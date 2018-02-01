<template>
  <div class="page">
    <fe-header slot="header" style="width:100%;position:absolute;left:0;top:0;z-index:100;">CountUp</fe-header>
    <div class="fe-content">
      <div style="text-align:center;">
        <fe-countup :start-val="1" :end-val="1388" :duration="2" class="demo1"></fe-countup>
        <br/>
        <fe-countup :start-val="1388" :end-val="1" :duration="2" class="demo1"></fe-countup>
        <br/>
        <fe-countup :end-val="88.88" :duration="3" :decimals="2" class="demo1"></fe-countup>
        <br/>
        <fe-countup :end-val="10000" :duration="1" :decimals="2" class="demo1" :options='options' :callback='callback'></fe-countup>
        <br/>
        <fe-countup :end-val="1024" :duration="3" :reset='doReset' :start="doStart" class="demo1" :callback='callback1'></fe-countup>
        <br/>
        <div style="margin:20px;">
          <fe-button @click.native="doStart=true" type="primary">Start</fe-button>
          <fe-button @click.native="doResetFn" type="primary">Reset</fe-button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      doStart: false,
      doReset: false,
      options: {
        useEasing: true,
        useGrouping: true,
        separator: "",
        decimal: ".",
        prefix: "￥",
        suffix: "元"
      }
    };
  },
  methods: {
    doResetFn: function(params) {
      this.doReset = true;
      this.doStart = false;
    },
    callback: function(ins) {
      console.log(ins.endVal);
      Toast.success({
        duration: 1500,
        message: "滚完了"
      });
    },
    callback1: function() {
      Toast.success({
        duration: 1500,
        message: "点击成功鸟"
      });
    }
  }
};
</script>

<style scoped lang="less">
.demo1 {
  font-family: "Source Sans Pro", Helvetica, Arial, sans-serif;
  font-size: 55px;
  color: #4a90e2;
}
</style>
