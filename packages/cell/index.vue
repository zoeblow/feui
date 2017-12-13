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
  import { go } from '../utils/router'
  import InlineDesc from '../inline-desc'
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
    components: {
      [InlineDesc.name]: InlineDesc
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