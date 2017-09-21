<template>
  <transition :name="`nuim-popup-animate-${position}`">
    <div v-show="show" :style="styles" class="nuim-popup-dialog" :class="[`nuim-popup-${position}`, show ? 'nuim-popup-show' : '']">
      <slot></slot>
    </div>
  </transition>
</template>

<script>
import Popup from './popup'

export default {
  name:'fe-popup',
  props: {
    value: Boolean,
    height: {
      type: String,
      default: 'auto'
    },
    width: {
      type: String,
      default: 'auto'
    },
    showMask: {
      type: Boolean,
      default: true
    },
    isTransparent: Boolean,
    hideOnBlur: {
      type: Boolean,
      default: true
    },
    position: {
      type: String,
      default: 'bottom'
    }
  },
  mounted () {
    this.$nextTick(() => {
      const _this = this
      this.popup = new Popup({
        showMask: _this.showMask,
        container: _this.$el,
        hideOnBlur: _this.hideOnBlur,
        onOpen () {
          _this.fixSafariOverflowScrolling('auto')
          _this.show = true
        },
        onClose () {
          _this.show = false
          if (Object.keys(window.__$nuimPopups).length > 1) return
          if (document.querySelector('.nuim-popup-dialog.nuim-popup-mask-disabled')) return
          setTimeout(() => {
            _this.fixSafariOverflowScrolling('touch')
          }, 300)
        }
      })
      this.$overflowScrollingList = document.querySelectorAll('.nuim-fix-safari-overflow-scrolling')
    })
  },
  methods: {
    fixSafariOverflowScrolling (type) {
      if (!this.$overflowScrollingList.length) return
      for (let i = 0; i < this.$overflowScrollingList.length; i++) {
        this.$overflowScrollingList[i].style.webkitOverflowScrolling = type
      }
    }
  },
  data () {
    return {
      hasFirstShow: false,
      show: this.value
    }
  },
  computed: {
    styles () {
      const styles = {}
      if (!this.position || this.position === 'bottom' || this.position === 'top') {
        styles.height = this.height
      } else {
        styles.width = this.width
      }

      this.isTransparent && (styles['background'] = 'transparent')
      return styles
    }
  },
  watch: {
    show (val) {
      this.$emit('input', val)
      if (val) {
        this.popup.show()
        this.$emit('on-show')
        this.fixSafariOverflowScrolling('auto')
        if (!this.hasFirstShow) {
          this.$emit('on-first-show')
          this.hasFirstShow = true
        }
      } else {
        this.$emit('on-hide')
        this.show = false
        this.popup.hide(false)
        setTimeout(() => {
          if (!document.querySelector('.nuim-popup-dialog.nuim-popup-show')) {
            this.fixSafariOverflowScrolling('touch')
          }
        }, 200)
      }
    },
    value (val) {
      this.show = val
    }
  },
  beforeDestroy () {
    this.popup.destroy()
    this.fixSafariOverflowScrolling('touch')
  }
}
</script>

<style lang="less">
@import '../../styles/variable.less';

.nuim-popup-dialog {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background: @popup-background-color;
  z-index: 501;
  transition-property: transform;
  transition-duration: 300ms;
}
.nuim-popup-dialog.nuim-popup-left {
  width: auto;
  height: 100%;
  top: 0;
  right: auto;
  bottom: auto;
  left: 0;
}
.nuim-popup-dialog.nuim-popup-right {
  width: auto;
  height: 100%;
  top: 0;
  right: 0;
  bottom: auto;
  left: auto;
}
.nuim-popup-dialog.nuim-popup-top {
  width: 100%;
  top: 0;
  right: auto;
  bottom: auto;
  left: 0;
}
.nuim-popup-mask {
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  opacity: 0;
  tap-highlight-color: rgba(0,0,0,0);
  z-index: -1;
  transition: opacity 400ms;
}
.nuim-popup-mask.nuim-popup-show {
  opacity: 1;
}

.nuim-popup-animate-bottom-enter, .nuim-popup-animate-bottom-leave-active {
  transform: translate3d(0, 100%, 0);
}

.nuim-popup-animate-left-enter, .nuim-popup-animate-left-leave-active {
  transform: translate3d(-100%, 0, 0);
}

.nuim-popup-animate-right-enter, .nuim-popup-animate-right-leave-active {
  transform: translate3d(100%, 0, 0);
}

.nuim-popup-animate-top-enter, .nuim-popup-animate-top-leave-active {
  transform: translate3d(0, -100%, 0);
}
</style>
