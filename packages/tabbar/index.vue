<template>
  <div class="weui-tabbar">
    <slot></slot>
  </div>
</template>

<script>
import { parentMixin } from '../utils/multi-items'

export default {
  mounted () {
    if (process.env.NODE_ENV === 'development') {
      this.$nextTick(() => {
        const $el = this.$el
        const position = window.getComputedStyle($el).position
        if (position === 'fixed') {
          return
        } else if (position === 'absolute') {
          if (document.documentElement.offsetHeight !== window.innerHeight) {
            console.warn('[Feui warn] tabbar 定位默认为 absolute，如果你没有使用 100% 布局(view-box)，需要手动设置 style position 为 fixed')
          }
        }
      })
    }
  },
  name: 'fe-tabbar',
  mixins: [parentMixin],
  props: {
    iconClass: String
  }
}
</script>
