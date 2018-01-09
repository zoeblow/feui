<template>
  <div class="nuim-check-icon" @click="updateValue">
    <fe-icons type="success" v-if="!right" v-show="type === 'default' && value"></fe-icons>
    <fe-icons type="success_circle" v-if="!right"  v-show="type === 'plain' && value"></fe-icons>
    <fe-icons type="circle" v-if="!right"  v-show="!value"></fe-icons>
    <span><slot></slot></span>
    <fe-icons type="success" v-if="right" v-show="type === 'default' && value"></fe-icons>
    <fe-icons type="success-circle" v-if="right"  v-show="type === 'plain' && value"></fe-icons>
    <fe-icons type="circle" v-if="right"  v-show="!value"></fe-icons>
  </div>
</template>

<script>
import Icon from '../icons'

export default {
  name:'fe-checkicon',
  components: {
    [Icon.name]: Icon
  },
  methods: {
    updateValue () {
      this.$emit('update:value', !this.value)
    }
  },
  props: {
    value: {
      type: Boolean,
      default: false
    },
    right:{
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: 'default'
    }
  }
}
</script>