<template>
  <div class="page">
    <fe-header slot="header" style="width:100%;position:absolute;left:0;top:0;z-index:100;">Pwdinput</fe-header>
    <div class="fe-content">
      <divider>基础用法</divider>
      <fe-pwdinput :value="value" info="密码为 6 位数字" @focus="showKeyboard = true" ></fe-pwdinput>
      <divider>输入明文</divider>
      <fe-pwdinput :value="value" info="" @focus="showKeyboard = true" :isPwd='false'></fe-pwdinput>
      <divider>当前输入颜色提示</divider>
      <fe-pwdinput :value="value" info="密码为 6 位数字" @focus="showKeyboard = true" currentColor='#4a90e2'></fe-pwdinput>
      <p class="pwd">Password:<span>{{value}}</span></p>
      <fe-keyboard :show="showKeyboard" @input="onInput" @delete="onDelete" @blur="showKeyboard = false"  extra-key='X'></fe-keyboard>
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
.pwd{
  text-align:center;
  color:#999;
  span{
    display: inline-block;
    width: 65px;
    text-align: left;
  }
}
</style>
