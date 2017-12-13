<template>
  <div class="nuim-cell-box weui-cell" :class="{'nuim-tap-active': isLink || !!link, 'weui-cell_access': isLink || !!link, 'nuim-cell-no-border-intent': !borderIntent}" @click="onClick">
    <div><slot></slot></div>
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
    }
  },
  methods: {
    onClick () {
      this.link && go(this.link, this.$router)
    }
  }
}
</script>
