<template>
  <div class="nuim-actionsheet">
    <transition name="nuim-actionsheet-mask">
      <div class="weui-mask weui-mask_transparent" @click="onClickingMask" v-show="show"></div>
    </transition>
    <div class="weui-actionsheet" :class="{'weui-actionsheet_toggle': show}">
      <div class="weui-actionsheet__menu">
        <div class="weui-actionsheet__cell" v-for="(text, key) in menus" @click="onMenuClick(text, key)" :key="key"  v-html="text.label || text" :class="`nuim-actionsheet-menu-${text.type || 'default'}`">
        </div>
      </div>
      <div class="weui-actionsheet__action" @click="emitEvent('on-click-menu', '取消')" v-if="showCancel">
        <div class="weui-actionsheet__cell">{{cancelText || '取消'}}</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'fe-actionsheet',
  mounted () {
    this.$nextTick(() => {
      this.$tabbar = document.querySelector('.weui-tabbar')
    })
  },
  props: {
    value: Boolean,
    showCancel: Boolean,
    cancelText: String,
    menus: {
      type: [Object, Array],
      default: () => ({})
    },
    closeOnClickingMask: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      show: false
    }
  },
  methods: {
    onMenuClick (text, key) {
      if (typeof text === 'string') {
        this.emitEvent('on-click-menu', key)
      } else {
        if (text.type !== 'disabled' && text.type !== 'info') {
          if (text.value) {
            this.emitEvent('on-click-menu', text.value)
          } else {
            this.show = false
          }
        }
      }
    },
    onClickingMask () {
      this.closeOnClickingMask && (this.show = false)
    },
    emitEvent (event, menu, shouldClose = true) {
      if (event === 'on-click-menu' && !/.noop/.test(menu)) {
        this.$emit(event, menu)
        this.$emit(`${event}-${menu}`)
        shouldClose && (this.show = false)
      }
    },
    fixIos (zIndex) {
      if (this.$el.parentNode && this.$el.parentNode.className.indexOf('v-transfer-dom') !== -1) {
        return
      }
      if (this.$tabbar && /iphone/i.test(navigator.userAgent)) {
        this.$tabbar.style.zIndex = zIndex
      }
    }
  },
  watch: {
    show (val) {
      this.$emit('input', val)
      if (val) {
        this.fixIos(-1)
      } else {
        setTimeout(() => {
          this.fixIos(100)
        }, 200)
      }
    },
    value: {
      handler: function (val) {
        this.show = val
      },
      immediate: true
    }
  },
  beforeDestroy () {
    this.fixIos(100)
  }
}
</script>
