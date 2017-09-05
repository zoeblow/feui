<template>
  <div v-if="visible">
    <div class="weui-mask_transparent" v-if='mask'></div> 
    <div class="weui-toast" :class="{ 'weui-toast_text': type === 'text' }" :style="style" ref="toast">
      <fe-icon :type="icon" class="weui-icon_toast" v-if="type !== 'text'"></fe-icon>
      <p class="weui-toast__content"  v-text="message"></p>
    </div>
  </div>
</template>

<script>

export default {
  props: {
      visible: {
        default: true
      },
      mask: {
        type:Boolean,
        default: true
      },
      icon: {
        type: String,
        default: 'success-no-circle'
      },
      type: {
        type: String,
        default: 'success'
      },
      message: {
        type: String,
        default: ''
      }
    },

    computed: {
      style () {
        if (this.type === 'text') {
          const messageLength = 80
          return {
            width: messageLength + '%',
            marginLeft: '-' + (messageLength / 2) + '%'
          }
        }

        return {}
      }
    }
}
</script>

<style lang="less">
@import '../../styles/transition.less';
@import '../../styles/weui/widget/weui_tips/weui_mask';
@import '../../styles/weui/widget/weui_tips/weui_toast';

.weui-toast .weui-icon_toast {
  font-size: 55px;
  display: inline-block;
}

.weui-toast_text {
  min-width: 0;
  min-height: 0;
  max-width: 80%;
  padding: .5em 0;
  margin: 0 auto;
  .weui-toast__content {
    margin: 0;
  }
}
</style>
