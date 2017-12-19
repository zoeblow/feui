<template>
    <div class="page input">
      <fe-header slot="header" style="width:100%;position:absolute;left:0;top:0;z-index:100;">Toast</fe-header>
      <div class="fe-content">
        <div style="margin:10px;">
          <fe-button @click.native="showSuccess">成功提示</fe-button>
          <fe-button @click.native="showError">失败提示</fe-button>
          <fe-button @click.native="showText">提示文字</fe-button>
          <fe-button @click.native="showLoading">Loading</fe-button>
          <br>
          <fe-button @click.native="gaoji">高级用法</fe-button>
        </div>
      </div>  
    </div>
</template>
<script>
export default {
  data () { 
    return {
      defaultT:true
    }
  },
  methods:{
    showSuccess () {
      Toast.success({
        duration: 1500,
        message: '操作成功'
      })
    },
    showError () {
      Toast.cancel({
        duration: 1500,
        message: '操作警告'
      })
    },
    showLoading(){
      Toast.loading({duration: 1501, mask: true });
    },
    showText(){
      Toast({
        duration: 1500,
        message: '显示文字咯咯咯..',
      })
    },
    gaoji(){
        const toast = Toast.loading({
          duration: 0,       // 持续展示 toast
          forbidClick: true, // 禁用背景点击
          message: '倒计时 3 秒'
        });

        let second = 3;
        const timer = setInterval(() => {
          second--;
          if (second) {
            toast.message = `倒计时 ${second} 秒`;
          } else {
            clearInterval(timer);
            Toast.clear();
          }
        }, 1000);
    }
  }
}
</script>