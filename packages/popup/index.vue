<template>
  <transition :name="`nuim-popup-animate-${position}`">
    <div v-show="show && !initialShow" :style="styles" class="nuim-popup-dialog" :class="[`nuim-popup-${position}`, show ? 'nuim-popup-show' : '']">
      <slot></slot>
    </div>
  </transition>
</template>

<script>
import Popup from './popup'
import dom from '../utils/dom'

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
    },
    maxHeight: String,
    popupStyle: Object,
    hideOnDeactivated: {
      type: Boolean,
      default: true
    }
  },
  created () {
    // get global layout config
    if (this.$nuim && this.$nuim.config && this.$nuim.config.$layout === 'VIEW_BOX') {
      this.layout = 'VIEW_BOX'
    }
  },
  mounted () {
    this.$overflowScrollingList = document.querySelectorAll('.nuim-fix-safari-overflow-scrolling')
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
	  if (window.__$nuimPopups && Object.keys(window.__$nuimPopups).length > 1) return
          if (document.querySelector('.nuim-popup-dialog.nuim-popup-mask-disabled')) return
          setTimeout(() => {
            _this.fixSafariOverflowScrolling('touch')
          }, 300)
        }
      })
      if (this.value) {
        this.popup.show()
      }
      this.initialShow = false
    })
  },
  deactivated () {
    if (this.hideOnDeactivated) {
      this.show = false
    }
    this.removeModalClassName()
    },   
    methods: {
    /**
    * https://github.com/airyland/nuim/issues/311
    * https://benfrain.com/z-index-stacking-contexts-experimental-css-and-ios-safari/
    */
    fixSafariOverflowScrolling (type) {
      if (!this.$overflowScrollingList.length) return
      // if (!/iphone/i.test(navigator.userAgent)) return
      for (let i = 0; i < this.$overflowScrollingList.length; i++) {
        this.$overflowScrollingList[i].style.webkitOverflowScrolling = type
      }
    },
    removeModalClassName () {
      this.layout === 'VIEW_BOX' && dom.removeClass(document.body, 'nuim-modal-open')
    }
  },
  data () {
     return {
      layout: '',
      initialShow: true,
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