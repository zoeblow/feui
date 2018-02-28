<template>
  <div class="page page-with-padding">
    <fe-header slot="header" style="width:100%;position:absolute;left:0;top:0;z-index:100;">Loading</fe-header>
    <div class="fe-content">
      <div style="margin:10px;">
        <fe-button type="primary" @click.native="showLoading">show Loading(2秒后关闭)</fe-button>
        <fe-button type="primary" @click.native="gaoji">show Loading(2秒后关闭高级用法)</fe-button>
        <br>
        <divider>circular</divider> 
        <loading type='circular' color='black'></loading>
        <loading type='circular' color='white'></loading>
        <br>
        <br>
        <divider>circle</divider> 
        <loading type="circle" color="black" />
        <loading type="circle" color="white" />
        <br>
        <br>
        <divider>spinner</divider> 
        <loading type="spinner" color="black" />
        <loading type="spinner" color="white" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  created: function() {},
  methods: {
    showLoading() {
      Toast.loading({ duration: 3000,loadingType:'spinner', mask: true,message:'请骚等...'});
    },
    gaoji() {
      const toast = Toast.loading({
        duration: 0, // 持续展示 toast
        forbidClick: true, // 禁用背景点击
        mask: false,
        message: "倒计时 3 秒"
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
};
</script>
<style>
.nuim-loading{
  display: inline-block;
  margin-left: 20px;
}
.nuim-loading--white {
    padding: 10px;
    border-radius: 3px;
    background-color: rgba(0,0,0,.5);
}
</style>
