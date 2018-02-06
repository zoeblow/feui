<template>
	<div class="nuim-fe-input weui-cell" :class="{'weui-cell_warn': showWarn, 'disabled': disabled}">
    <div class="weui-cell__hd">
      <div :style="labelStyles" v-if="hasRestrictedLabel">
        <slot name="restricted-label"></slot>
      </div>
      <slot name="label">
        <label class="weui-label" :class="labelClass" :style="{width: labelWidth || $parent.labelWidth || labelWidthComputed, textAlign: $parent.labelAlign, marginRight: $parent.labelMarginRight}" v-if="title" v-html="title" :for="`nuim-fe-input-${uuid}`"></label>
        <inline-desc v-if="inlineDesc">{{inlineDesc}}</inline-desc>
      </slot>
    </div>
    <div class="weui-cell__bd weui-cell__primary" :class="placeholderAlign ? `nuim-fe-input-placeholder-${placeholderAlign}` : ''">
      <input
      :id="`nuim-fe-input-${uuid}`"
      v-if="!type || type === 'text'"
      class="weui-input"
      :maxlength="max"
      :autocomplete="autocomplete"
      :autocapitalize="autocapitalize"
      :autocorrect="autocorrect"
      :spellcheck="spellcheck"
      :style="inputStyle"
      type="text"
      :name="name"
      :pattern="pattern"
      :placeholder="placeholder"
      :readonly="readonly"
      :disabled="disabled"
      v-model="currentValue"
      @focus="focusHandler"
      @blur="onBlur"
      @keyup="onKeyUp"
      ref="input"/>
      <input
      :id="`nuim-fe-input-${uuid}`"
      v-if="type === 'number'"
      class="weui-input"
      :maxlength="max"
      :autocomplete="autocomplete"
      :autocapitalize="autocapitalize"
      :autocorrect="autocorrect"
      :spellcheck="spellcheck"
      :style="inputStyle"
      type="number"
      :name="name"
      :pattern="pattern"
      :placeholder="placeholder"
      :readonly="readonly"
      :disabled="disabled"
      v-model="currentValue"
      @focus="focusHandler"
      @blur="onBlur"
      @keyup="onKeyUp"
      ref="input"/>
      <input
      :id="`nuim-fe-input-${uuid}`"
      v-if="type === 'email'"
      class="weui-input"
      :maxlength="max"
      :autocomplete="autocomplete"
      :autocapitalize="autocapitalize"
      :autocorrect="autocorrect"
      :spellcheck="spellcheck"
      :style="inputStyle"
      type="email"
      :name="name"
      :pattern="pattern"
      :placeholder="placeholder"
      :readonly="readonly"
      :disabled="disabled"
      v-model="currentValue"
      @focus="focusHandler"
      @blur="onBlur"
      @keyup="onKeyUp"
      ref="input"/>
      <input
      :id="`nuim-fe-input-${uuid}`"
      v-if="type === 'password'"
      class="weui-input"
      :maxlength="max"
      :autocomplete="autocomplete"
      :autocapitalize="autocapitalize"
      :autocorrect="autocorrect"
      :spellcheck="spellcheck"
      :style="inputStyle"
      type="password"
      :name="name"
      :pattern="pattern"
      :placeholder="placeholder"
      :readonly="readonly"
      :disabled="disabled"
      v-model="currentValue"
      @focus="focusHandler"
      @blur="onBlur"
      @keyup="onKeyUp"
      ref="input"/>
      <input
      :id="`nuim-fe-input-${uuid}`"
      v-if="type === 'tel'"
      class="weui-input"
      :maxlength="max"
      :autocomplete="autocomplete"
      :autocapitalize="autocapitalize"
      :autocorrect="autocorrect"
      :spellcheck="spellcheck"
      :style="inputStyle"
      type="tel"
      :name="name"
      :pattern="pattern"
      :placeholder="placeholder"
      :readonly="readonly"
      :disabled="disabled"
      v-model="currentValue"
      @focus="focusHandler"
      @blur="onBlur"
      @keyup="onKeyUp"
      ref="input"/>
    </div>
    <div class="weui-cell__ft">
      <!-- //v-show="!equalWith && showClear && currentValue && !readonly && !disabled && isFocus" -->
      <fe-icons type="clear" v-show="!equalWith && showClear && currentValue && !readonly && !disabled && isFocus" @click.native="clear"></fe-icons>
      <fe-icons @click.native="onClickErrorIcon" class="nuim-input-icon" type="warn" :title="!valid ? firstError : ''" v-show="showWarn"></fe-icons>
      <fe-icons @click.native="onClickErrorIcon" class="nuim-input-icon" type="warn" v-if="!novalidate && hasLengthEqual && dirty && equalWith && !valid"></fe-icons>
      <fe-icons type="success" v-show="!novalidate && equalWith && equalWith === currentValue && valid"></fe-icons>

      <fe-icons type="success" class="nuim-input-icon" v-show="novalidate && iconType === 'success'"></fe-icons>
      <fe-icons type="warn" class="nuim-input-icon" v-show="novalidate && iconType === 'error'"></fe-icons>

      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
  import Base from '../utils/base'
  import isEmail from 'validator/lib/isEmail'
  import isMobilePhone from 'validator/lib/isMobilePhone'
  import Debounce from '../utils/debounce'
  import Icon from '../icons'
  import InlineDesc from '../inline-desc'
  import Toast from '../toast'
  import mask from 'vanilla-masker'
  const validators = {
    'email': {
      fn: isEmail,
      msg: '邮箱格式'
    },
    'china-mobile': {
      fn (str) {
        return isMobilePhone(str, 'zh-CN')
      },
      msg: '手机号码'
    },
    'china-name': {
      fn (str) {
        return str.length >= 2 && str.length <= 6
      },
      msg: '中文姓名'
    }
  }
  export default {
    name: 'fe-input',
    created () {
      this.currentValue = (this.value === undefined || this.value === null) ? '' : (this.mask ? this.maskValue(this.value) : this.value)
      if (this.required && typeof this.currentValue === 'undefined') {
        this.valid = false
      }
      this.handleChangeEvent = true
      if (this.debounce) {
        this._debounce = Debounce(() => {
          this.$emit('on-change', this.currentValue)
        }, this.debounce)
      }
    },
    components: {
      [InlineDesc.name]: InlineDesc,
      [Toast.name]: Toast,
      [Icon.name]: Icon,
    },
    beforeMount () {
      if (this.$slots && this.$slots['restricted-label']) {
        this.hasRestrictedLabel = true
      }
    },
    beforeDestroy () {
      if (this._debounce) {
        this._debounce.cancel()
      }
    },
    mixins: [Base],
    props: {
      title: {
        type: String,
        default: ''
      },
      type: {
        type: String,
        default: 'text'
      },
      placeholder: String,
      value: [String, Number],
      name: String,
      readonly: Boolean,
      disabled: Boolean,
      keyboard: String,
      inlineDesc: String,
      isType: [String, Function],
      min: Number,
      max: Number,
      showClear: {
        type: Boolean,
        default: true
      },
      equalWith: String,
      textAlign: String,
      // https://github.com/yisibl/blog/issues/3
      autocomplete: {
        type: String,
        default: 'off'
      },
      autocapitalize: {
        type: String,
        default: 'off'
      },
      autocorrect: {
        type: String,
        default: 'off'
      },
      spellcheck: {
        type: String,
        default: 'false'
      },
      novalidate: {
        type: Boolean,
        default: false
      },
      iconType: String,
      debounce: Number,
      placeholderAlign: String,
      labelWidth: String,
      mask: String,
      shouldToastError: {
        type: Boolean,
        default: true
      }
    },
    computed: {
      labelStyles () {
        return {
          width: this.labelWidthComputed || this.$parent.labelWidth || this.labelWidthComputed,
          textAlign: this.$parent.labelAlign,
          marginRight: this.$parent.labelMarginRight
        }
      },
      labelClass () {
        return {
          'nuim-cell-justify': this.$parent.labelAlign === 'justify' || this.$parent.$parent.labelAlign === 'justify'
        }
      },
      pattern () {
        if (this.keyboard === 'number' || this.isType === 'china-mobile') {
          return '[0-9]*'
        }
      },
      labelWidthComputed () {
        const width = this.title.replace(/[^x00-xff]/g, '00').length / 2 + 1
        if (width < 10) {
          return width + 'em'
        }
      },
      hasErrors () {
        return Object.keys(this.errors).length > 0
      },
      inputStyle () {
        if (this.textAlign) {
          return {
            textAlign: this.textAlign
          }
        }
      },
      showWarn () {
        return !this.novalidate && !this.equalWith && !this.valid && this.firstError && (this.touched || this.forceShowError)
      }
    },
    methods: {
      onClickErrorIcon () {
        if (this.shouldToastError && this.firstError) {
          Toast({
            duration: 600,
            message: this.firstError,
          })
        }
        this.$emit('on-click-error-icon', this.firstError)
      },
      maskValue (val) {
        const val1 = this.mask ? mask.toPattern(val, this.mask) : val
        return val1
      },
      reset (value = '') {
        this.dirty = false
        this.currentValue = value
        this.firstError = ''
        this.valid = true
      },
      clear () {
        this.currentValue = ''
        this.focus()
      },
      focus () {
        console.log('fff-focus')
        this.$refs.input.focus()
      },
      blur () {
        this.$refs.input.blur()
      },
      focusHandler ($event) {
        this.isFocus = true;
        this.$emit('on-focus', this.currentValue, $event)
      },
      onBlur ($event) {
        this.isFocus = false;
        this.setTouched()
        this.validate()
        this.$emit('on-blur', this.currentValue, $event)
      },
      onKeyUp (e) {
        if (e.key === 'Enter') {
          e.target.blur()
          this.$emit('on-enter', this.currentValue, e)
        }
      },
      getError () {
        let key = Object.keys(this.errors)[0]
        this.firstError = this.errors[key]
      },
      validate () {
        if (typeof this.equalWith !== 'undefined') {
          this.validateEqual()
          return
        }
        this.errors = {}

        if (!this.currentValue && !this.required) {
          this.valid = true
          return
        }

        if (!this.currentValue && this.required) {
          this.valid = false
          this.errors.required = '必填哦'
          this.getError()
          return
        }

        if (typeof this.isType === 'string') {
          const validator = validators[this.isType]
          if (validator) {
            let value = this.currentValue

            if (this.isType === 'china-mobile' && this.mask === '999 9999 9999') {
              value = this.currentValue.replace(/\s+/g, '')
            }

            this.valid = validator[ 'fn' ](value)
            if (!this.valid) {
              this.forceShowError = true
              this.errors.format = validator[ 'msg' ] + '格式不对哦~'
              this.getError()
              return
            } else {
              delete this.errors.format
            }
          }
        }

        if (typeof this.isType === 'function') {
          const validStatus = this.isType(this.currentValue)
          this.valid = validStatus.valid
          if (!this.valid) {
            this.errors.format = validStatus.msg
            this.forceShowError = true
            this.getError()
            return
          } else {
            delete this.errors.format
          }
        }

        if (this.min) {
          if (this.currentValue.length < this.min) {
            this.errors.min = `最少应该输入${this.min}个字符哦`
            this.valid = false
            this.getError()
            return
          } else {
            delete this.errors.min
          }
        }

        if (this.max) {
          if (this.currentValue.length > this.max) {
            this.errors.max = `最多可以输入${this.max}个字符哦`
            this.valid = false
            this.forceShowError = true
            return
          } else {
            this.forceShowError = false
            delete this.errors.max
          }
        }

        this.valid = true
      },
      validateEqual () {
        if (!this.equalWith && this.currentValue) {
          this.valid = false
          this.errors.equal = '输入不一致'
          return
        }
        let willCheck = this.dirty || this.currentValue.length >= this.equalWith.length
        // 只在长度符合时显示正确与否
        if (willCheck && this.currentValue !== this.equalWith) {
          this.valid = false
          this.errors.equal = '输入不一致'
          return
        } else {
          if (!this.currentValue && this.required) {
            this.valid = false
          } else {
            this.valid = true
            delete this.errors.equal
          }
        }
      }
    },
    data () {
      let data = {
        isFocus:false,
        hasRestrictedLabel: false,
        firstError: '',
        forceShowError: false,
        hasLengthEqual: false,
        valid: true,
        currentValue: '',
        showErrorToast: false
      }
      return data
    },
    watch: {
      mask (val) {
        if (val && this.currentValue) {
          this.currentValue = this.maskValue(this.currentValue)
        }
      },
      valid () {
        this.getError()
      },
      value (val) {
        this.currentValue = val
      },
      equalWith (newVal) {
        if (newVal && this.equalWith) {
          if (newVal.length === this.equalWith.length) {
            this.hasLengthEqual = true
          }
          this.validateEqual()
        } else {
          this.validate()
        }
      },
      currentValue (newVal) {
        if (!this.equalWith && newVal) {
          this.validateEqual()
        }
        if (newVal && this.equalWith) {
          if (newVal.length === this.equalWith.length) {
            this.hasLengthEqual = true
          }
          this.validateEqual()
        } else {
          this.validate()
        }
        this.$emit('input', this.maskValue(newVal))
        if (this._debounce) {
          this._debounce()
        } else {
          this.$emit('on-change', newVal)
        }
      }
    }
  }
</script>