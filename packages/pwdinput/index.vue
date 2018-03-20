<template>
  <div class="nuim-password-input">
    <ul class="nuim-password-input__security nuim-hairline--surround" @touchstart.stop="$emit('focus')">
      <li v-for="(visibility,index) in points" class="nuim-hairline"  :style="`borderBottom: 2px solid  ${currentColor}`" :class="{'current':'current' == `${visibility.crt}` && currentColor}" :key="index">
        <i :style="`visibility: ${visibility.dis}`" v-if="isPwd"/>
        <span class="code" v-else-if="visibility.ipt">{{visibility.ipt}}</span>
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
    isPwd: {
      type: Boolean,
      default: true
    },
    currentColor: String,
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
      const arr = {};
      for (let i = 0; i < this.length; i++) {
        var Ipt = this.value.split('')
        arr[i] = {'dis':this.value[i] ? 'visible' : 'hidden','crt':this.value.length==i?'current':'numm','ipt':Ipt[i]};
      }
      return arr;
    },
    crtColor(app) {
      return 'border-bottom:2px solid '+ this.currentColor;
    }
  }
};
</script>
