<template>
  <div class="nuim-slider">
    <div class="nuim-swiper" :style="{height: xheight}">
      <slot></slot>

      <div
      class="nuim-swiper-item"
      v-for="(item, index) in list"
      @click="clickListItem(item)"
      :data-index="index">
        <a href="javascript:">
          <div class="nuim-img" :style="{backgroundImage: buildBackgroundUrl(item)}"></div>
          <p class="nuim-swiper-desc" v-if="showDescMask">{{ item.title }}</p>
        </a>
      </div>

      <div
      v-if="listTwoLoopItem.length > 0"
      class="nuim-swiper-item nuim-swiper-item-clone"
      v-for="(item, index) in listTwoLoopItem"
      @click="clickListItem(item)"
      :data-index="index">
        <a href="javascript:">
          <div class="nuim-img" :style="{backgroundImage: buildBackgroundUrl(item)}"></div>
          <p class="nuim-swiper-desc" v-if="showDescMask">{{ item.title }}</p>
        </a>
      </div>

    </div>
    <div :class="[dotsClass, 'nuim-indicator', `nuim-indicator-${dotsPosition}`]" v-show="showDots">
      <a href="javascript:" v-for="key in length">
        <i class="nuim-icon-dot" :class="{'active': key - 1 === current}"></i>
      </a>
    </div>
  </div>
</template>

<script>
import Swiper from './swiper.js'
import { go } from '../utils/router'

export default {
  name: 'fe-swiper',
  created () {
    this.index = this.value || 0
    if (this.index) {
      this.current = this.index
    }
  },
  mounted () {
    this.hasTwoLoopItem()
    this.$nextTick(() => {
      if (!(this.list && this.list.length === 0)) {
        this.render(this.index)
      }
      this.xheight = this.getHeight()
      this.$emit('on-get-height', this.xheight)
    })
  },
  methods: {
    hasTwoLoopItem () {
      if (this.list.length === 2 && this.loop) {
        this.listTwoLoopItem = this.list
      } else {
        this.listTwoLoopItem = []
      }
    },
    clickListItem (item) {
      go(item.url, this.$router)
      this.$emit('on-click-list-item', JSON.parse(JSON.stringify(item)))
    },
    buildBackgroundUrl (item) {
      return item.fallbackImg ? `url(${item.img}), url(${item.fallbackImg})` : `url(${item.img})`
    },
    render (index = 0) {
      this.swiper && this.swiper.destroy()
      this.swiper = new Swiper({
        container: this.$el,
        direction: this.direction,
        auto: this.auto,
        loop: this.loop,
        interval: this.interval,
        threshold: this.threshold,
        duration: this.duration,
        height: this.height || this._height,
        minMovingDistance: this.minMovingDistance,
        imgList: this.imgList
      })
      .on('swiped', (prev, index) => {
        this.current = index % this.length
        this.index = index % this.length
      })
      if (index > 0) {
        this.swiper.go(index)
      }
    },
    rerender () {
      if (!this.$el || this.hasRender) {
        return
      }
      this.hasRender = true
      this.hasTwoLoopItem()
      this.$nextTick(() => {
        this.index = this.value || 0
        this.current = this.value || 0
        this.length = this.list.length || this.$children.length
        this.destroy()
        this.render(this.value)
      })
    },
    destroy () {
      this.hasRender = false
      this.swiper && this.swiper.destroy()
    },
    getHeight () {
      const hasHeight = parseInt(this.height, 10)
      if (hasHeight) return this.height
      if (!hasHeight) {
        if (this.aspectRatio) {
          return this.$el.offsetWidth * this.aspectRatio + 'px'
        }
        return '180px'
      }
    }
  },
  props: {
    list: {
      type: Array,
      default () {
        return []
      }
    },
    direction: {
      type: String,
      default: 'horizontal'
    },
    showDots: {
      type: Boolean,
      default: true
    },
    showDescMask: {
      type: Boolean,
      default: true
    },
    dotsPosition: {
      type: String,
      default: 'right'
    },
    dotsClass: String,
    auto: Boolean,
    loop: Boolean,
    interval: {
      type: Number,
      default: 3000
    },
    threshold: {
      type: Number,
      default: 50
    },
    duration: {
      type: Number,
      default: 300
    },
    height: {
      type: String,
      default: 'auto'
    },
    aspectRatio: Number,
    minMovingDistance: {
      type: Number,
      default: 0
    },
    value: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      hasRender: false,
      current: this.index || 0,
      xheight: 'auto',
      length: this.list.length,
      index: 0,
      listTwoLoopItem: [] // issue #1484
    }
  },
  watch: {
    auto (val) {
      if (!val) {
        this.swiper && this.swiper.stop()
      } else {
        this.swiper && this.swiper._auto()
      }
    },
    list (val) {
      this.rerender()
    },
    current (currentIndex) {
      this.index = currentIndex
      this.$emit('on-index-change', currentIndex)
    },
    index (val) {
      const _this = this
      if (val !== this.current) {
        this.$nextTick(() => {
          _this.swiper && _this.swiper.go(val)
        })
      }
      this.$emit('input', val)
    },
    value (val) {
      this.index = val
    }
  },
  beforeDestroy () {
    this.destroy()
  }
}

</script>