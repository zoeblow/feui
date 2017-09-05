<template>
  <div v-show="visible">
    <div class="weui-mask_transparent"></div>
    <div class="weui-toast">
      <i class="weui-loading weui-icon_toast"></i>
      <p class="weui-toast__content">{{ text || 'loading' }}<slot></slot></p>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      spinner: {
        type: String
      },
      text: String
    },
    data () {
      return {
        visible: false
      }
    }
  }
</script>
<style lang="less">
@import '../../styles/transition.less';
@import '../../styles/weui/widget/weui_tips/weui_mask';
@import '../../styles/weui/widget/weui_tips/weui_toast';
.weui-toast .weui-icon_toast {
  display: inline-block;
}
</style>