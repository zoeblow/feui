<template>
  <div class="weui-cells_radio" :class="disabled ? 'nuim-radio-disabled' : ''">
    <label class="weui-cell weui-cell_radio weui-check__label" :for="`radio_${uuid}_${index}`" :key='index' v-for="(one, index) in options">
      <div class="weui-cell__bd">
        <slot name="each-item" :icon="one.icon" :label="getValue(one)" :index="index" :selected="currentValue === getKey(one)">
          <p>
            <img class="nuim-radio-icon" :src="one.icon" v-show="one && one.icon">
            <span class="nuim-radio-label" :style="currentValue === getKey(one) ? (selectedLabelStyle || '') : ''">{{ one | getValue }}</span>
          </p>
        </slot>
      </div>
      <div class="weui-cell__ft">
        <input type="radio" class="weui-check" v-model="currentValue" :id="disabled ? '' : `radio_${uuid}_${index}`" :value="getKey(one)">
        <span class="weui-icon-checked"></span>
      </div>
    </label>
    <div class="weui-cell" v-show="fillMode">
      <div class="weui-cell__hd"><label for="" class="weui-label">{{ fillLabel }}</label></div>
      <div class="weui-cell__bd">
        <input class="weui-input needsclick" type="text" v-model="fillValue" :placeholder="fillPlaceholder" @blur="isFocus=false" @focus="onFocus()">
      </div>
      <div class="weui-cell__ft" v-show="value==='' && !isFocus">
        <i class="weui-icon-warn"></i>
      </div>
    </div>
  </div>
</template>

<script>
import Base from '../../libs/base'
import { getValue, getKey, getLabel } from '../../libs/object-filter'
import props from './props'

export default {
  name:'fe-radio',
  mixins: [Base],
  filters: {
    getValue,
    getKey
  },
  props: props(),
  mounted () {
    this.handleChangeEvent = true
  },
  methods: {
    getValue,
    getKey,
    onFocus () {
      this.currentValue = this.fillValue || ''
      this.isFocus = true
    }
  },
  watch: {
    value (val) {
      this.currentValue = val
    },
    currentValue (newVal) {
      var isOption = contains(this.options, newVal)
      if (newVal !== '' && isOption) {
        this.fillValue = ''
      }
      this.$emit('on-change', newVal, getLabel(this.options, newVal))
      this.$emit('input', newVal)
    },
    fillValue (newVal) {
      if (this.fillMode && this.isFocus) {
        this.currentValue = newVal
      }
    }
  },
  data () {
    return {
      fillValue: '',
      isFocus: false,
      currentValue: this.value
    }
  }
}

function contains (a, obj) {
  var i = a.length
  while (i--) {
    if (a[i] === obj) {
      return true
    }
  }
  return false
}
</script>

<style lang="less">
@import '../../styles/weui/widget/weui_cell/weui_check';
@import '../../styles/weui/widget/weui_cell/weui_form/weui_form_common';
@import '../../styles/weui/icon/weui_icon_font';
.weui-cell_radio > * {
  pointer-events: none;
}
.nuim-radio-icon {
  width: 24px;
  height:24px;
  display: inline-block;
  vertical-align: middle;
  margin-right: 5px;
}
.nuim-radio-label {
  vertical-align: middle;
}
.weui-cells_radio.nuim-radio-disabled .weui-check:checked + .weui-icon-checked:before {
  opacity: 0.5;
}
.weui-cells_radio .weui-check:checked + .weui-icon-checked:before{
  color:@radio-icon-checked;
  // content: "\EA06";
}
</style>
