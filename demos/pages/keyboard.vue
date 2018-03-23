<template>
  <div class="page">
    <fe-header slot="header" style="width:100%;position:absolute;left:0;top:0;z-index:100;">Keyboard</fe-header>
    <div class="fe-content">
      <div style='margin:10px;'>
        <fe-button :gradients="['#1D62F0', '#19D5FD']" @click.native='showKeyboard1 = !showKeyboard1' >打开普通键盘</fe-button>
        <fe-button :gradients="['#0D2633', '#007FBF']" @click.native='showKeyboard2 = !showKeyboard2' >打开自定义键盘</fe-button>
      </div>
      <fe-keyboard :show="showKeyboard1" extra-key='.' @input="onInput" @delete="onDelete" @blur="showKeyboard1 = false"></fe-keyboard>
      <fe-keyboard :show="showKeyboard2" title='请输入密码' extra-key='X' theme='custom' z-index='1000' @input="onInput" close-button-text="完成/确定" @delete="onDelete" @blur="showKeyboard2 = false"></fe-keyboard>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      showKeyboard1: false,
      showKeyboard2: false
    }
  },
  methods:{
    onInput(val){;
      console.log(val);
      Toast({text:'text',message:'touch:'+val,duration:500});
    },
    onDelect(val) {
      console.log(val);
    }
  }
};
</script>