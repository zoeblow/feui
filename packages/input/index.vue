<template>
  <div
    class="nuim-fe-input weui-cell"
    :class="{
      'weui-cell_warn': showWarn,
      disabled: disabled,
      'nuim-input-has-right-full': hasRightFullHeightSlot
    }"
  >
    <div class="weui-cell__hd">
      <div :style="labelStyles" v-if="hasRestrictedLabel">
        <slot name="restricted-label"></slot>
      </div>
      <slot name="label">
        <label
          class="weui-label"
          :class="labelClass"
          :style="{
            width: labelWidth || $parent.labelWidth || labelWidthComputed,
            textAlign: $parent.labelAlign,
            marginRight: $parent.labelMarginRight
          }"
          v-if="title"
          v-html="title"
          :for="`nuim-fe-input-${uuid}`"
        ></label>
        <inline-desc v-if="inlineDesc">{{ inlineDesc }}</inline-desc>
      </slot>
    </div>
    <div
      class="weui-cell__bd weui-cell__primary"
      :class="
        placeholderAlign ? `nuim-fe-input-placeholder-${placeholderAlign}` : ''
      "
    >
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
        ref="input"
      />
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
        ref="input"
      />
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
        ref="input"
      />
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
        ref="input"
      />
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
        ref="input"
      />
    </div>
    <div class="weui-cell__ft">
      <!-- @touchend.native="clear" -->
      <fe-icons
        type="clear"
        v-show="
          !hasRightFullHeightSlot &&
            !equalWith &&
            showClear &&
            currentValue !== '' &&
            !readonly &&
            !disabled &&
            isFocus
        "
        @click.native="clear"
      ></fe-icons>
      <fe-icons
        @click.native="onClickErrorIcon"
        class="nuim-input-icon"
        type="warn"
        :title="!valid ? firstError : ''"
        v-show="showWarn"
      ></fe-icons>
      <fe-icons
        @click.native="onClickErrorIcon"
        class="nuim-input-icon"
        type="warn"
        v-if="!novalidate && hasLengthEqual && dirty && equalWith && !valid"
      ></fe-icons>
      <fe-icons
        type="success"
        v-show="!novalidate && equalWith && equalWith === currentValue && valid"
      ></fe-icons>

      <fe-icons
        type="success"
        class="nuim-input-icon"
        v-show="novalidate && iconType === 'success'"
      ></fe-icons>
      <fe-icons
        type="warn"
        class="nuim-input-icon"
        v-show="novalidate && iconType === 'error'"
      ></fe-icons>

      <slot name="right"></slot>
      <div v-if="hasRightFullHeightSlot" class="nuim-input-right-full">
        <slot name="right-full-height"></slot>
      </div>
    </div>
  </div>
</template>

<script>
import Base from "../utils/base";
import isEmail from "validator/lib/isEmail";
import isMobilePhone from "validator/lib/isMobilePhone";
import Debounce from "../utils/debounce";
import Icon from "../icons";
import InlineDesc from "../inline-desc";
import Toast from "../toast";
import mask from "vanilla-masker";
const validators = {
  email: {
    fn: isEmail,
    msg: "邮箱格式"
  },
  "china-mobile": {
    fn(str) {
      return isMobilePhone(str, "zh-CN");
    },
    msg: "手机号码"
  },
  "china-name": {
    fn(str) {
      return str.length >= 2 && str.length <= 6;
    },
    msg: "中文姓名"
  }
};
export default {
  name: "fe-input",
  created() {
    this.currentValue =
      this.value === undefined || this.value === null
        ? ""
        : this.mask
        ? this.maskValue(this.value)
        : this.value;
    if (
      this.required &&
      (typeof this.currentValue === "undefined" || this.currentValue === "")
    ) {
      this.valid = false;
    }
    this.handleChangeEvent = true;
    if (this.debounce) {
      this._debounce = Debounce(() => {
        this.$emit("on-change", this.currentValue);
      }, this.debounce);
    }
  },
  components: {
    [InlineDesc.name]: InlineDesc,
    [Toast.name]: Toast,
    [Icon.name]: Icon
  },
  beforeMount() {
    if (this.$slots && this.$slots["restricted-label"]) {
      this.hasRestrictedLabel = true;
    }
    if (this.$slots && this.$slots["right-full-height"]) {
      this.hasRightFullHeightSlot = true;
    }
  },
  beforeDestroy() {
    if (this._debounce) {
      this._debounce.cancel();
    }
    // window.removeEventListener("resize", this.scrollIntoView);
  },
  mixins: [Base],
  props: {
    title: {
      type: String,
      default: ""
    },
    type: {
      type: String,
      default: "text"
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
      default: "off"
    },
    autocapitalize: {
      type: String,
      default: "off"
    },
    autocorrect: {
      type: String,
      default: "off"
    },
    spellcheck: {
      type: String,
      default: "false"
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
    labelStyles() {
      const { $parent = {} } = this;
      return {
        width:
          this.labelWidthComputed ||
          $parent.labelWidth ||
          this.labelWidthComputed,
        textAlign: $parent.labelAlign,
        marginRight: $parent.labelMarginRight
      };
    },
    labelClass() {
      return {
        "nuim-cell-justify":
          this.$parent.labelAlign === "justify" ||
          this.$parent.$parent.labelAlign === "justify"
      };
    },
    pattern() {
      if (this.keyboard === "number" || this.isType === "china-mobile") {
        return "[0-9]*";
      }
    },
    labelWidthComputed() {
      const width = this.title.replace(/[^x00-xff]/g, "00").length / 2 + 1;
      if (width < 10) {
        return width + "em";
      }
    },
    hasErrors() {
      return Object.keys(this.errors).length > 0;
    },
    inputStyle() {
      if (this.textAlign) {
        return {
          textAlign: this.textAlign
        };
      }
    },
    showWarn() {
      return (
        !this.novalidate &&
        !this.equalWith &&
        !this.valid &&
        this.firstError &&
        (this.touched || this.forceShowError)
      );
    }
  },
  mounted() {
    // window.addEventListener("resize", this.scrollIntoView);
    // fixed ios12+
    document.body.addEventListener("focusout", () => {
      if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
        // 软键盘收起的事件处理
        setTimeout(() => {
          const scrollHeight =
            document.documentElement.scrollTop || document.body.scrollTop || 0;
          window.scrollTo(0, Math.max(scrollHeight - 1, 0));
        }, 100);
      }
    });
  },
  methods: {
    scrollIntoView(time = 0) {
      if (/iphone/i.test(navigator.userAgent)) {
      }
      if (
        document.activeElement.tagName === "INPUT" ||
        document.activeElement.tagName === "TEXTAREA"
      ) {
        setTimeout(() => {
          this.$refs.input.scrollIntoViewIfNeeded(true);
        }, time);
      }
    },
    onClickErrorIcon() {
      if (this.shouldToastError && this.firstError) {
        Toast({
          duration: 600,
          message: this.firstError
        });
      }
      this.$emit("on-click-error-icon", this.firstError);
    },
    maskValue(val) {
      const val1 = this.mask ? mask.toPattern(val, this.mask) : val;
      return val1;
    },
    reset(value = "") {
      this.dirty = false;
      this.currentValue = value;
      this.firstError = "";
      this.valid = true;
    },
    clear() {
      this.currentValue = "";
      this.isFocus = true;
      this.focus();
      this.$emit("on-click-clear-icon");
    },
    focus() {
      setTimeout(() => {
        this.$refs.input.focus();
      }, 0);
    },
    focusHandler($event) {
      this.$emit("on-focus", this.currentValue, $event);
      this.isFocus = true;
      setTimeout(() => {
        // 因为有1秒的延迟，如果切换了页面，input已经不存在，所以加个判断
        !this.$refs.input || this.$refs.input.scrollIntoViewIfNeeded(false);
      }, 400);
    },
    onBlur($event) {
      setTimeout(() => {
        this.setTouched();
        this.validate();
        this.isFocus = false;
        this.$emit("on-blur", this.currentValue, $event);
      }, 0);
    },
    onKeyUp(e) {
      if (e.key === "Enter") {
        e.target.blur();
        this.$emit("on-enter", this.currentValue, e);
      }
    },
    getError() {
      let key = Object.keys(this.errors)[0];
      this.firstError = this.errors[key];
    },
    validate() {
      if (typeof this.equalWith !== "undefined") {
        this.validateEqual();
        return;
      }
      this.errors = {};
      if (!this.currentValue && !this.required) {
        this.valid = true;
        return;
      }
      if (!this.currentValue && this.required) {
        this.valid = false;
        this.errors.required = "必填哦";
        this.getError();
        return;
      }
      if (typeof this.isType === "string") {
        const validator = validators[this.isType];
        if (validator) {
          let value = this.currentValue;
          if (this.isType === "china-mobile" && this.mask === "999 9999 9999") {
            value = this.currentValue.replace(/\s+/g, "");
          }
          this.valid = validator["fn"](value);
          if (!this.valid) {
            this.forceShowError = true;
            this.errors.format = validator["msg"] + "格式不对哦~";
            this.getError();
            return;
          } else {
            delete this.errors.format;
          }
        }
      }
      if (typeof this.isType === "function") {
        const validStatus = this.isType(this.currentValue);
        this.valid = validStatus.valid;
        if (!this.valid) {
          this.errors.format = validStatus.msg;
          this.forceShowError = true;
          this.getError();
          return;
        } else {
          delete this.errors.format;
        }
      }
      if (this.min) {
        if (this.currentValue.length < this.min) {
          this.errors.min = `最少应该输入${this.min}个字符哦`;
          this.valid = false;
          this.getError();
          return;
        } else {
          delete this.errors.min;
        }
      }
      if (this.max) {
        if (this.currentValue.length > this.max) {
          this.errors.max = `最多可以输入${this.max}个字符哦`;
          this.valid = false;
          this.forceShowError = true;
          return;
        } else {
          this.forceShowError = false;
          delete this.errors.max;
        }
      }
      this.valid = true;
    },
    validateEqual() {
      if (!this.equalWith && this.currentValue) {
        this.valid = false;
        this.errors.equal = "输入不一致";
        return;
      }
      let willCheck =
        this.dirty || this.currentValue.length >= this.equalWith.length;
      // 只在长度符合时显示正确与否
      if (willCheck && this.currentValue !== this.equalWith) {
        this.valid = false;
        this.errors.equal = "输入不一致";
        return;
      } else {
        if (!this.currentValue && this.required) {
          this.valid = false;
        } else {
          this.valid = true;
          delete this.errors.equal;
        }
      }
    },
    // #2810
    _getInputMaskSelection(selection, direction, maskVal, loop) {
      if (!this.mask || (loop && direction === 0)) {
        return selection;
      }
      if (direction === 0) {
        direction = this.lastDirection;
      }
      if (direction > 0) {
        const maskChar = this.mask.substr(selection - direction, 1);
        if (!maskChar.match(/[9SA]/)) {
          return this._getInputMaskSelection(
            selection + 1,
            direction,
            maskVal,
            true
          );
        }
      }
      return selection;
    }
  },
  data() {
    return {
      hasRightFullHeightSlot: false,
      hasRestrictedLabel: false,
      firstError: "",
      forceShowError: false,
      hasLengthEqual: false,
      valid: true,
      currentValue: "",
      showErrorToast: false,
      isFocus: false
    };
  },
  watch: {
    mask(val) {
      if (val && this.currentValue) {
        this.currentValue = this.maskValue(this.currentValue);
      }
    },
    valid() {
      this.getError();
    },
    value(val) {
      this.currentValue = val;
    },
    equalWith(newVal) {
      if (newVal && this.equalWith) {
        if (newVal.length === this.equalWith.length) {
          this.hasLengthEqual = true;
        }
        this.validateEqual();
      } else {
        this.validate();
      }
    },
    currentValue(newVal, oldVal) {
      let selection = null;
      if (!this.equalWith && newVal) {
        this.validateEqual();
      }
      if (newVal && this.equalWith) {
        if (newVal.length === this.equalWith.length) {
          this.hasLengthEqual = true;
        }
        this.validateEqual();
      } else {
        this.validate();
      }

      try {
        selection = this.$refs.input.selectionStart;
        let direction = newVal.length - oldVal.length;
        selection = this._getInputMaskSelection(
          selection,
          direction,
          this.maskValue(newVal)
        );
        this.lastDirection = direction;
      } catch (e) {}
      this.$emit("input", this.maskValue(newVal));

      this.$nextTick(() => {
        if (this.$refs.input.selectionStart !== selection) {
          this.$refs.input.selectionStart = selection;
          this.$refs.input.selectionEnd = selection;
        }
        if (this.currentValue !== this.maskValue(newVal)) {
          this.currentValue = this.maskValue(newVal);
        }
      });

      if (this._debounce) {
        this._debounce();
      } else {
        this.$emit("on-change", newVal);
      }
    }
  }
};
</script>