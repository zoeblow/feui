<template>
  <div
    class="weui-cell"
    :class="{
      'nuim-tap-active': isLink || !!link,
      'weui-cell_access': isLink || !!link,
      'nuim-cell-no-border-intent': !borderIntent,
      'nuim-cell-disabled': disabled
    }"
    :style="style"
    @click="onClick">
    <div class="weui-cell__hd">
      <slot name="icon"></slot>
    </div>
    <div class="nuim-cell-bd" :class="{'nuim-cell-primary': primary === 'title' && valueAlign !== 'left'}">
      <p>
        <label class="nuim-label" :style="labelStyles" :class="labelClass" v-if="title || hasTitleSlot">
          <slot name="title">{{ title }}</slot>
        </label>
        <slot name="after-title"></slot>
      </p>
      <inline-desc>
        <slot name="inline-desc">{{ inlineDesc }}</slot>
      </inline-desc>
    </div>
    <div class="weui-cell__ft" :class="valueClass">
      <slot name="value"></slot>
      <slot>{{ value }}</slot>
      <v-no-ssr>
        <i class="weui-loading" v-if="isLoading"></i>
      </v-no-ssr>
    </div>
    <slot name="child"></slot>
  </div>
</template>

<script>
  import { go } from '../utils/router'
  import InlineDesc from '../inline-desc'
  import cleanStyle from '../utils/clean-style'
  import getParentProp from '../utils/get-parent-prop'
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
      arrowDirection: String, // down or up
      alignItems: String
    },
    components: {
      [InlineDesc.name]: InlineDesc
    },
    computed: {
      labelStyles () {
        return cleanStyle({
          width: getParentProp(this, 'labelWidth'),
          textAlign: getParentProp(this, 'labelAlign'),
          marginRight: getParentProp(this, 'labelMarginRight')
        })
      },
      valueClass () {
        return {
          'nuim-cell-primary': this.primary === 'content' || this.valueAlign === 'left',
          'nuim-cell-align-left': this.valueAlign === 'left',
          'nuim-cell-arrow-transition': !!this.arrowDirection,
          'nuim-cell-arrow-up': this.arrowDirection === 'up',
          'nuim-cell-arrow-down': this.arrowDirection === 'down'
        }
      },
      labelClass () {
        return {
          'nuim-cell-justify': getParentProp(this, 'justify') === 'justify'
        }
      },
      style () {
        if (this.alignItems) {
          return {
            alignItems: this.alignItems
          }
        }
      }
    },
    methods: {
      onClick () {
        /* istanbul ignore next */
        !this.disabled && go(this.link, this.$router)
      }
    },
    data () {
      return {
        hasTitleSlot: true,
        hasMounted: false
      }
    }
  }
</script>