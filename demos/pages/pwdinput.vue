<template>
  <div class="page">
    <fe-header slot="header" style="width:100%;position:absolute;left:0;top:0;z-index:100;">Pwdinput</fe-header>
    <div class="fe-content">
      <div>
        <fe-tab :line-width=2 active-color='#4a90e2' v-model="index">
          <fe-tabitem class="nuim-center" :selected="demo2 === item" v-for="(item, index) in list2" @click="demo2 = item" :key="index">{{item}}</fe-tabitem>
        </fe-tab>
        <div v-if="index===0">
          <divider>基础用法</divider>
          <fe-pwdinput :value="value" :length='length' info="密码为 6 位数字" @focus="showKeyboard = true" ></fe-pwdinput>
          
          <divider>当前输入颜色提示</divider>
          <fe-pwdinput :value="value" :length='length' info="`密码为 6 位数字`" @focus="showKeyboard = true" currentColor='#4a90e2'></fe-pwdinput> 
          <p class="pwd">Password:<span>{{value}}</span></p>
        </div>
        <div v-else-if="index===1">
          <divider>输入明文</divider>
          <fe-pwdinput :value="value" :length='length' info="" @focus="showKeyboard = true" :isPwd='false'></fe-pwdinput>
        </div>
        <div v-else>
          <divider>身份证{{length1}}后位</divider>
          <fe-pwdinput :value="value1" :length='length1' @focus="showKeyboard1 = true" currentColor='#4a90e2' :isPwd='false'></fe-pwdinput>
          <p class="pwd">ID Card:<span>{{value1}}</span></p>
        </div>

        <fe-keyboard :show="showKeyboard" @input="onInput" @delete="onDelete" @blur="showKeyboard = false"  extra-key='X'></fe-keyboard>
        <fe-keyboard :show="showKeyboard1" @input="onInput1" @delete="onDelete1" @blur="showKeyboard1 = false"  extra-key='X'></fe-keyboard>
      </div>
    </div>
  </div>
</template>
<script>
const list = () => ["普通模式", "明文模式", "身份证后*位"];
export default {
  data() {
    return {
      index: 0,
      list2: list(),
      value: "",
      value1: "",
      length: 6,
      length1: 6,
      showKeyboard: true,
      showKeyboard1: true
    };
  },
  methods: {
    onInput(key) {
      this.value = (this.value + key).slice(0, this.length);
    },
    onDelete() {
      this.value = this.value.slice(0, this.value.length - 1);
    },

    // 身份证
    onInput1(key) {
      if (key === "X") {
        if (this.value1.length === this.length1 - 1) {
          this.value1 = (this.value1 + key).slice(0, this.length1);
        } else {
          return false;
        }
      } else {
        this.value1 = (this.value1 + key).slice(0, this.length1);
      }
    },
    onDelete1() {
      this.value1 = this.value1.slice(0, this.value1.length - 1);
    }
  }
};
</script>
<style scoped lang="less">
.pwd {
  text-align: center;
  color: #999;
  span {
    display: inline-block;
    width: 65px;
    text-align: left;
  }
}
</style>
