<template>
  <div class="nuim-cell-box weui-cell" :class="{'nuim-tap-active': isLink || !!link, 'weui-cell_access': isLink || !!link, 'nuim-cell-no-border-intent': !borderIntent}" @click="onClick">
    <div><slot></slot></div>
  </div>
</template>

<script>
import { go } from '../../libs/router'

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

<style lang="less">
@import '../../styles/variable.less';
@import '../../styles/weui/base/mixin/setArrow.less';
@import '../../styles/weui/widget/weui_cell/weui_cell_global';

.nuim-cell-box > div {
  padding-right: 13px;
}
.nuim-cell-primary {
  flex: 1;
}
.weui-cell.nuim-cell-no-border-intent:before {
  left: 0;
}
.nuim-tap-active {
  tap-highlight-color: rgba(0,0,0,0);
  user-select:none;
}
.nuim-tap-active:active {
  background-color: #ECECEC;
}
.weui-cell_access.nuim-cell-box:after {
    content: " ";
    display: inline-block;
    height: 6px;
    width: 6px;
    border-width: 2px 2px 0 0;
    border-color: #c8c8cd;
    border-style: solid;
    -webkit-transform: matrix(.71,.71,-.71,.71,0,0);
    transform: matrix(.71,.71,-.71,.71,0,0);
    position: relative;
    top: -2px;
    position: absolute;
    top: 50%;
    margin-top: -4px;
    right: 17px;
}


</style>
