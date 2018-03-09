<template>
  <div class="nuim-password-input">
    <ul class="nuim-password-input__security nuim-hairline--surround" @touchstart.stop="$emit('focus')">
      <li v-for="visibility in points" class="nuim-hairline" :key="visibility">
        <i :style="`visibility: ${visibility}`" />
      </li>
    </ul>
    <div 
      v-if="errorInfo || info" 
      v-text="errorInfo || info" 
      :class="errorInfo ? 'nuim-password-input__error-info' : 'nuim-password-input__info'"
    />
</div>
</template>

<script>
export default {
  name: 'fe-pwdinput',

  props: {
    info: String,
    errorInfo: String,
    value: {
      type: String,
      default: ''
    },
    length: {
      type: Number,
      default: 6
    }
  },

  computed: {
    points() {
      const arr = [];
      for (let i = 0; i < this.length; i++) {
        arr[i] = this.value[i] ? 'visible' : 'hidden';
      }
      return arr;
    }
  }
};
</script>
