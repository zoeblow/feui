<template>
  <div class="page">
    <fe-header slot="header" style="width:100%;position:absolute;left:0;top:0;z-index:100;">Pwdinput</fe-header>
    <div class="fe-content">
      <br>
      <divider>基础用法</divider>
      <fe-pwdinput :value="value" info="密码为 6 位数字" @focus="showKeyboard = true" ></fe-pwdinput>
      <p>{{value}}</p>

      <fe-keyboard :show="showKeyboard" @input="onInput" @delete="onDelete" @blur="showKeyboard = false"></fe-keyboard>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: '',
      showKeyboard: true
    };
  },

  methods: {
    onInput(key) {
      this.value = (this.value + key).slice(0, 6);

    },
    onDelete() {
      this.value = this.value.slice(0, this.value.length - 1);
    }
  }
};
</script>
<style scoped lang="less">
</style>
