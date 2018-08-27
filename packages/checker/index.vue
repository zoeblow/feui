<template>
  <div class="nuim-checker-box">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'fe-checker',
  props: {
    defaultItemClass: String,
    selectedItemClass: String,
    disabledItemClass: String,
    type: {
      type: String,
      default: 'radio'
    },
    value: [String, Number, Array, Object],
    max: Number,
    radioRequired: Boolean
  },
  watch: {
    value (newValue) {
      this.currentValue = newValue
    },
    currentValue (val) {
      this.$emit('input', val)
      this.$emit('on-change', val)
    }
  },
  data () {
    return {
      currentValue: this.value
    }
  }
}
</script>
