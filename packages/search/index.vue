<template>
  <div
    class="nuim-search-box"
    :class="{ 'nuim-search-fixed':isFixed }"
    :style="{ top: isFixed ? top : '', position: fixPosition }">
    <div
      class="weui-search-bar"
      :class="{'weui-search-bar_focusing': !isCancel || currentValue}">
      <slot name="left"></slot>
      <form class="weui-search-bar__form" @submit.prevent="$emit('on-submit', value)" action=".">
        <label
          :for="`search_input_${uuid}`"
          class="nuim-search-mask"
          @click="touch"
          v-show="!isFixed && autoFixed"></label>
        <div class="weui-search-bar__box">
          <i class="weui-icon-search"></i>
          <input
            v-model="currentValue"
            ref="input"
            type="search"
            autocomplete="off"
            class="weui-search-bar__input"
            :id="`search_input_${uuid}`"
            :placeholder="placeholder"
            :required="required"
            @focus="onFocus"
            @blur="onBlur"
            @compositionstart="onComposition($event, 'start')"
            @compositionend="onComposition($event, 'end')"
            @input="onComposition($event, 'input')"/>
          <a
            href="javascript:"
            class="weui-icon-clear"
            @click="clear"
            v-show="currentValue"></a>
        </div>
        <label
          :for="`search_input_${uuid}`"
          class="weui-search-bar__label"
          v-show="!isFocus && !value">
          <i class="weui-icon-search"></i>
          <span>{{ placeholder || '搜索' }}</span>
        </label>
      </form>
      <a
        href="javascript:"
        class="weui-search-bar__cancel-btn"
        @click="cancel">{{ cancelText || '取消' }}
      </a>
      <slot name="right"></slot>
    </div>
    <div class="weui-cells nuim-search_show" v-show="isFixed">
      <slot></slot>
      <div
        class="weui-cell weui-cell_access"
        v-for="(item,index) in results"
        @click="handleResultClick(item)" :key='index'>
        <div class="weui-cell__bd weui-cell_primary">
          <p>{{item.title}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import uuidMixin from '../utils/uuid'

export default {
  name: 'fe-search',
  mixins: [uuidMixin],
  props: {
    required: {
      type: Boolean,
      default: false
    },
    placeholder: String,
    cancelText: String,
    value: {
      type: String,
      default: ''
    },
    results: {
      type: Array,
      default () {
        return []
      }
    },
    autoFixed: {
      type: Boolean,
      default: true
    },
    top: {
      type: String,
      default: '0px'
    },
    position: {
      type: String,
      default: 'fixed'
    },
    autoScrollToTop: Boolean
  },
  created () {
    if (this.value) {
      this.currentValue = this.value
    }
  },
  computed: {
    fixPosition () {
      if (this.isFixed) {
        return this.position === 'absolute' ? 'absolute' : 'fixed'
      }
      return 'static'
    }
  },
  methods: {
    emitEvent () {
      this.$nextTick(() => {
        this.$emit('input', this.currentValue)
        this.$emit('on-change', this.currentValue)
      })
    },
    onComposition ($event, type) {
      if (type === 'start') {
        this.onInput = true
      }
      if (type === 'end') {
        this.onInput = false
        this.emitEvent()
      }
      if (type === 'input') {
        if (!this.onInput) {
          this.emitEvent()
        }
      }
    },
    clear () {
      this.currentValue = ''
      this.isFocus = true
      this.setFocus()
      if (this.autoFixed && !this.isFixed) {
        this.isFixed = true
      }
    },
    cancel () {
      this.isCancel = true
      this.currentValue = ''
      this.isFixed = false
      this.$emit('on-cancel')
    },
    handleResultClick (item) {
      this.$emit('result-click', item) // just for compatibility
      this.$emit('on-result-click', item)
      this.isCancel = true
      this.isFixed = false
    },
    touch () {
      this.isCancel = false
      if (this.autoFixed) {
        this.isFixed = true
      }
      this.$emit('on-touch')
    },
    setFocus () {
      this.$refs.input.focus()
    },
    setBlur () {
      this.$refs.input.blur()
    },
    onFocus () {
      this.isFocus = true
      this.$emit('on-focus')
      this.touch()
    },
    onBlur () {
      this.isFocus = false
      this.$emit('on-blur')
    }
  },
  data () {
    return {
      onInput: false,
      currentValue: '',
      isCancel: true,
      isFocus: false,
      isFixed: false
    }
  },
  watch: {
    isFixed (val) {
      if (val === true) {
        this.setFocus()
        this.isFocus = true

        if (this.autoScrollToTop) {
          setTimeout(() => {
            window.scrollTo(0, 0)
          }, 150)
        }
      } else {}
    },
    value (val) {
      this.currentValue = val
    }
  }
}
</script>
