<template>
  <div>
    <div class="weui-cells__title" v-if="title" :style="{ color: titleColor }" v-html="title"></div>
    <div class="weui-cells">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'fe-group',
    props: {
      title: String,
      titleColor: String
    }
  }
</script>
<style lang="less">
@import '../../styles/weui/widget/weui_cell/weui_access';
@import '../../styles/weui/widget/weui_cell/weui_cell_global';
</style>
