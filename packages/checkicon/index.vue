<template>
  <div class="nuim-check-icon" @click="updateValue">
    <fe-icon type="success" v-if="!right" v-show="type === 'default' && value"></fe-icon>
    <fe-icon type="success_circle" v-if="!right"  v-show="type === 'plain' && value"></fe-icon>
    <fe-icon type="circle" v-if="!right"  v-show="!value"></fe-icon>
    <span><slot></slot></span>
    <fe-icon type="success" v-if="right" v-show="type === 'default' && value"></fe-icon>
    <fe-icon type="success_circle" v-if="right"  v-show="type === 'plain' && value"></fe-icon>
    <fe-icon type="circle" v-if="right"  v-show="!value"></fe-icon>
  </div>
</template>

<script>
import Icon from '../icon'

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