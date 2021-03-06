<template>
  <div :class="disabled ? 'nuim-checklist-disabled' : ''">
    <div v-show="title" class="weui-cells__title">{{ title }}</div>
    <slot name="after-title"></slot>
    <div class="weui-cells weui-cells_checkbox">
      <label
        class="weui-cell weui-check_label"
        :class="{ 'nuim-checklist-label-left': labelPosition === 'left' }"
        :for="`checkbox_${uuid}_${index}`"
        v-for="(one, index) in currentOptions"
        :key="index"
      >
        <div class="weui-cell__hd">
          <input
            type="checkbox"
            class="weui-check"
            :name="`nuim-checkbox-${uuid}`"
            :value="getKey(one)"
            v-model="currentValue"
            :id="disabled ? '' : `checkbox_${uuid}_${index}`"
            :disabled="isDisabled(getKey(one))"
          />
          <i class="weui-icon-checked nuim-checklist-icon-checked"></i>
        </div>
        <div class="weui-cell__bd">
          <p v-html="getValue(one)"></p>
          <inline-desc v-if="getInlineDesc(one)">{{
            getInlineDesc(one)
          }}</inline-desc>
        </div>
      </label>
    </div>
    <slot name="footer"></slot>
  </div>
</template>

<script>
import Base from "../utils/base";
import Icon from "../icons";
import InlineDesc from "../inline-desc";
import {
  getValue,
  getLabels,
  getKey,
  getInlineDesc
} from "../utils/object-filter";
import shuffle from "array-shuffle";

export default {
  name: "fe-checklist",
  components: {
    [InlineDesc.name]: InlineDesc,
    [Icon.name]: Icon
  },
  filters: {
    getValue,
    getKey
  },
  mixins: [Base],
  props: {
    name: String,
    showError: Boolean,
    title: String,
    required: {
      type: Boolean,
      default: false
    },
    options: {
      type: Array,
      required: true
    },
    value: {
      type: Array,
      default: () => []
    },
    max: Number,
    min: Number,
    fillMode: Boolean,
    randomOrder: Boolean,
    checkDisabled: {
      type: Boolean,
      default: true
    },
    labelPosition: {
      type: String,
      default: "right"
    },
    disabled: Boolean
  },
  data() {
    return {
      currentValue: [],
      currentOptions: this.options,
      tempValue: "" // used only for radio mode
    };
  },
  beforeUpdate() {
    if (this.isRadio) {
      const { length } = this.currentValue;
      if (length > 1) {
        this.currentValue = [this.currentValue[length - 1]];
      }
      const val = pure(this.currentValue);
      this.tempValue = val.length ? val[0] : "";
    }
  },
  created() {
    this.handleChangeEvent = true;
    if (this.value) {
      this.currentValue = this.value;
      if (this.isRadio) {
        this.tempValue = this.isRadio ? this.value[0] : this.value;
      }
    }
    if (this.randomOrder) {
      this.currentOptions = shuffle(this.options);
    } else {
      this.currentOptions = this.options;
    }
  },
  methods: {
    getValue,
    getKey,
    getInlineDesc,
    getFullValue() {
      const labels = getLabels(this.options, this.value);
      return this.currentValue.map((one, index) => {
        return {
          value: one,
          label: labels[index]
        };
      });
    },
    isDisabled(key) {
      if (this._max >= this._min && this._min >= 1 && this._max > 1) {
        if (this.currentValue.indexOf(key) !== -1) {
          return this.currentValue.length === this._min;
        }
        return this.currentValue.length === this._max;
      }
      if (this._max > 1) {
        return (
          this.currentValue.indexOf(key) === -1 &&
          this.currentValue.length === this._max
        );
      }
      if (this._min >= 1) {
        return (
          this.currentValue.indexOf(key) !== -1 &&
          this.currentValue.length === this._min
        );
      }

      return false;
    }
  },
  computed: {
    isRadio() {
      if (typeof this.max === "undefined") {
        return false;
      }
      return this.max === 1;
    },
    _total() {
      return this.fillMode ? this.options.length + 1 : this.options.length;
    },
    _min() {
      if (!this.required && !this.min) {
        return 0;
      }
      if (!this.required && this.min) {
        return Math.min(this._total, this.min);
      }
      if (this.required) {
        if (this.min) {
          const max = Math.max(1, this.min);
          return Math.min(this._total, max);
        }
        return 1;
      }
    },
    /* eslint-enable */
    _max() {
      if (!this.required && !this.max) {
        return this._total;
      }
      if (this.max) {
        if (this.max > this._total) {
          return this._total;
        }
        return this.max;
      }
      return this._total;
    },
    valid() {
      return (
        this.currentValue.length >= this._min &&
        this.currentValue.length <= this._max
      );
    }
  },
  watch: {
    tempValue(val) {
      const _val = val ? [val] : [];
      this.$emit("input", _val);
      this.$emit("on-change", _val, getLabels(this.options, _val));
    },
    value(newVal) {
      if (JSON.stringify(newVal) !== JSON.stringify(this.currentValue)) {
        this.currentValue = newVal;
      }
    },
    options(val) {
      this.currentOptions = val;
    },
    currentValue(newVal) {
      const val = pure(newVal);
      if (!this.isRadio) {
        this.$emit("input", val);
        this.$emit("on-change", val, getLabels(this.options, val));
        let err = {};
        if (this._min) {
          if (this.required) {
            if (this.currentValue.length < this._min) {
              err = {
                min: this._min
              };
            }
          } else if (
            this.currentValue.length &&
            this.currentValue.length < this._min
          ) {
            err = {
              min: this._min
            };
          }
        }
        if (!this.valid && this.dirty && Object.keys(err).length) {
          this.$emit("on-error", err);
        } else {
          this.$emit("on-clear-error");
        }
      }
    }
  }
};
function pure(obj) {
  return JSON.parse(JSON.stringify(obj));
}
</script>
