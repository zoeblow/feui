<template>
  <div class="nuim-check-icon" @click="updateValue">
    <icon type="success" v-if="!right" v-show="type === 'default' && value"></icon>
    <icon type="success_circle" v-if="!right"  v-show="type === 'plain' && value"></icon>
    <icon type="circle" v-if="!right"  v-show="!value"></icon>
    <span><slot></slot></span>
    <icon type="success" v-if="right" v-show="type === 'default' && value"></icon>
    <icon type="success_circle" v-if="right"  v-show="type === 'plain' && value"></icon>
    <icon type="circle" v-if="right"  v-show="!value"></icon>
  </div>
</template>

<script>
import Icon from '../icon'

export default {
  name:'fe-checkicon',
  components: {
    Icon
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

<style lang="less">
@import '../../styles/variable.less';
.nuim-check-icon {
  padding: 10px 15px;
  position: relative;
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  align-items: center;
  .right{
    float: right;
    margin-top: 2px;
  }
}
.nuim-check-icon > span {
  line-height: 23px;
  color: #222;
  vertical-align: middle;
  flex: 1;
}
.nuim-check-icon > .weui-icon-success:before, .nuim-check-icon > .weui-icon-success-circle:before {
  color: @check-icon-color-checked;
}
</style>
