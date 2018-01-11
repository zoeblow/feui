<template>
  <div
  class="nuim-cell-box weui-cell"
  :class="className"
  :style="style"
  @click="onClick">
    <slot></slot>
  </div>
</template>

<script>
import { go } from '../utils/router'

export default {
  name:'cell-box',
  props: {
    isLink: Boolean,
    link: [String, Object],
    borderIntent: {
      type: Boolean,
      default: true
    },
    noFlex: Boolean,
    alignItems: String
  },
  computed: {
    style () {
      if (this.alignItems) {
        return {
          'align-items': this.alignItems
        }
      }
    },
    className () {
      return {
        'nuim-tap-active': this.isLink || !!this.link,
        'weui-cell_access': this.isLink || !!this.link,
        'nuim-cell-no-border-intent': !this.borderIntent
      }
    }
  },
  methods: {
    onClick () {
      this.link && go(this.link, this.$router)
    }
  }
}
</script>
