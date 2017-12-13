<template>
  <div class="nuim-rater">
    <input v-model="currentValue" style="display:none">
    <a class="nuim-rater-box" v-for="i in max" @click="handleClick(i-1)" :key='i' :class="{'is-active':currentValue > i-1}" :style="{color: colors && colors[i-1] ? colors[i-1] : '#ccc',marginRight:margin+'px',fontSize: fontSize + 'px', width: fontSize + 'px', height: fontSize + 'px', lineHeight: fontSize + 'px'}">
      <span class="nuim-rater-inner">{{star}}<span class="nuim-rater-outer" :style="{color: activeColor, width: cutPercent + '%'}" v-if="cutPercent > 0 && cutIndex === i-1">{{star}}</span></span>
    </a>
  </div>
</template>

<script>
export default {
  name:'fe-rater',
  created () {
    this.currentValue = this.value
  },
  mounted () {
    this.updateStyle()
  },
  props: {
    max: {
      type: Number,
      default: 5
    },
    value: {
      type: Number,
      default: 0
    },
    disabled: Boolean,
    star: {
      type: String,
      default: '★'
    },
    activeColor: {
      type: String,
      default: '#4a90e2'
    },
    margin: {
      type: Number,
      default: 2
    },
    fontSize: {
      type: Number,
      default: 25
    }
  },
  computed: {
    sliceValue () {
      const _val = this.currentValue.toString().split('.')
      return _val.length === 1 ? [_val[0], 0] : _val
    },
    cutIndex () {
      return this.sliceValue[0] * 1
    },
    cutPercent () {
      return this.sliceValue[1] * 10
    }
  },
  methods: {
    handleClick (i, force) {
      if (!this.disabled || force) {
        if (this.currentValue === i + 1) {
          this.currentValue = i
          this.updateStyle()
        } else {
          this.currentValue = i + 1
        }
      }
    },
    updateStyle () {
      for (var j = 0; j < this.max; j++) {
        if (j <= this.currentValue - 1) {
          this.$set(this.colors, j, this.activeColor)
        } else {
          this.$set(this.colors, j, '#ccc')
        }
      }
    }
  },
  data () {
    return {
      colors: [],
      currentValue: 0
    }
  },
  watch: {
    currentValue (val) {
      this.updateStyle()
      this.$emit('input', val)
    },
    value (val) {
      this.currentValue = val
    }
  }
}
</script>
