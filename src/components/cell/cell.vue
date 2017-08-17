<template>
  <div
    class="weui-cell"
    :class="{
      'nuim-tap-active': isLink || !!link,
      'weui-cell_access': isLink || !!link,
      'nuim-cell-no-border-intent': !borderIntent,
      'nuim-cell-disabled': disabled
    }"
    @click="onClick">
    <div class="weui-cell__hd">
      <slot name="icon"></slot>
    </div>
    <div class="nuim-cell-bd" :class="{'nuim-cell-primary': primary === 'title' && valueAlign !== 'left'}">
      <p>
        <label class="nuim-label" :style="getLabelStyles()" v-if="title">{{title}}</label>
        <slot name="after-title"></slot>
      </p>
      <inline-desc>
        <slot name="inline-desc">{{inlineDesc}}</slot>
      </inline-desc>
    </div>
    <div class="weui-cell__ft" :class="valueClass">
      <slot name="value"></slot>
      <slot>{{value}}</slot>
      <i class="weui-loading" v-if="isLoading"></i>
    </div>
    <slot name="child"></slot>
  </div>
</template>

<script>
  import { go } from '../../libs/router'
  export default {
    name: 'fe-cell',
    props:{
      title: [String, Number],
      value: [String, Number, Array],
      isLink: Boolean,
      isLoading: Boolean,
      inlineDesc: [String, Number],
      primary: {
        type: String,
        default: 'title'
      },
      link: [String, Object],
      valueAlign: [String, Boolean, Number],
      borderIntent: {
        type: Boolean,
        default: true
      },
      disabled: Boolean,
      arrowDirection: String // down or up
    },
    computed: {
      valueClass () {
        return {
          'nuim-cell-primary': this.primary === 'content' || this.valueAlign === 'left',
          'nuim-cell-align-left': this.valueAlign === 'left',
          'nuim-cell-arrow-transition': !!this.arrowDirection,
          'nuim-cell-arrow-up': this.arrowDirection === 'up',
          'nuim-cell-arrow-down': this.arrowDirection === 'down'
        }
      }
    },
    methods: {
      getLabelStyles () {
        return {
          width: this.$parent.labelWidth || this.$parent.$parent.labelWidth,
          textAlign: this.$parent.labelAlign || this.$parent.$parent.labelAlign,
          marginRight: this.$parent.labelMarginRight || this.$parent.$parent.labelMarginRight
        }
      },
      onClick () {
        !this.disabled && go(this.link, this.$router)
      }
    }
  }
</script>

<style lang="less">
@import '../../styles/variable.less';
@import '../../styles/weui/base/mixin/setArrow.less';
@import '../../styles/weui/widget/weui_cell/weui_cell_global';
@import '../../styles/weui/widget/weui-loading/weui-loading.less';

.nuim-cell-primary {
  flex: 1;
}
.nuim-label {
  display: block;
  word-wrap: break-word;
  word-break: break-all;
}
.weui-cell__ft .weui-loading {
  display: block;
}
.weui-cell__ft.nuim-cell-align-left {
  text-align: left;
}
.weui-cell.nuim-cell-no-border-intent:before {
  left: 0;
}
.weui-cell_access .weui-cell__ft.nuim-cell-arrow-down:after {
  transform: matrix(0.71, 0.71, -0.71, 0.71, 0, 0) rotate(90deg);
}
.weui-cell_access .weui-cell__ft.nuim-cell-arrow-up:after {
  transform: matrix(0.71, 0.71, -0.71, 0.71, 0, 0) rotate(-90deg);
}
.nuim-cell-arrow-transition:after {
  transition: transform 300ms;
}
.nuim-cell-disabled {
  .nuim-label {
    color: #b2b2b2;
  }
  &.weui-cell_access .weui-cell__ft:after {
    border-color: #e2e2e2;
  }
}
</style>
