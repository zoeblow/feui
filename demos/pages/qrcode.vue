<template>
  <div class="page">
    <fe-header slot="header" style="width:100%;position:absolute;left:0;top:0;z-index:100;">QRcode</fe-header>
    <div class="fe-content">
      <divider>默认类型为 img，可长按识别</divider>
      <fe-qrcode value="https://feui.gitee.io" type="img"></fe-qrcode>
      <br>
      <divider>类型为 canvas</divider>
      <fe-qrcode value="https://feui.gitee.io"></fe-qrcode>
      <br>
      <fe-qrcode :value="value" :fg-color="fgColor"></fe-qrcode>
      <br>
      <span>当前url: {{value}}</span>
      <br>
      <span>当前颜色: {{fgColor}}</span>
    </div>
  </div>
</template>
<script>
  export default {
    mounted () {
      setInterval(() => {
        this.value = `https://feui.gitee.io?t=#${Math.random().toString(16).substr(3,6)}`;
        this.fgColor = `#${Math.random().toString(16).substr(3,6)}`;
      }, 500)
    },
    data () {
      return {
        value: 'https://feui.gitee.io',
        fgColor: '#000000'
      }
    }
  }
</script>
<style scoped lang="less">
  .fe-content{
    text-align: center; 
  }
</style>
