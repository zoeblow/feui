<template>
  <transition name="nuim-toast-fade">
    <div class="nuim-toast-wrapper" v-show="visible">
      <div class="nuim-toast" :class="[`nuim-toast--${displayStyle}`, `nuim-toast--${position}`]">
        <!-- text only -->
        <div v-if="displayStyle === 'text'">{{ message }}</div>
        <div v-if="displayStyle === 'html'" v-html="message" />

        <!-- with icon -->
        <template v-if="displayStyle === 'default'">
          <loading v-if="type === 'loading'" :type='loadingType' :loadingColor="white" ></loading>
          <fe-icons v-else class="nuim-toast__icon" :type="iconName" ></fe-icons>
          <div v-if="message" class="nuim-toast__text">{{ message }}</div>
        </template>
      </div>
      <div class="nuim-toast__overlay" :class="{ 'nuim-toast__overlay--mask': mask }" v-if="forbidClick || mask" />
    </div>
  </transition>
</template>

<script>
import Icon from '../icons';
import Loading from '../loading';

const DEFAULT_STYLE_LIST = ['success', 'fail', 'loading', 'info'];
export default {
  name: 'nuim-toast',
  components: {
    [Icon.name]: Icon,
    [Loading.name]: Loading
  },
  props: {
    mask: Boolean,
    message: String,
    forbidClick: Boolean,
    type: {
      type: String,
      default: 'text'
    },
    loadingType: {
      type: String,
      default: 'spinner'
    },
    loadingColor: {
      type: String,
      default: 'white'
    },
    position: {
      type: String,
      default: 'middle'
    }
  },

  data() {
    return {
      visible: false
    };
  },

  computed: {
    displayStyle() {
      return DEFAULT_STYLE_LIST.indexOf(this.type) !== -1 ? 'default' : this.type;
    },
    iconName() {
      var name = this.type=='success'?'success-no-circle':this.type
      return name;
    }
  }
};
</script>
