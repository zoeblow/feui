<template>
  <div class="page">
    <fe-header slot="header" style="width:100%;position:absolute;left:0;top:0;z-index:100;">CountUp</fe-header>
    <div class="fe-content">
      <div style="text-align:center;">
        <fe-countup :start-val="1" :end-val="1388" :duration="2" class="demo1"></fe-countup>
        <br/>
        <fe-countup :end-val="88.88" :duration="3" :decimals="2" class="demo1"></fe-countup>
        <br>
        <fe-countup :end-val="1024" :duration="3" :start="doStart" class="demo1"></fe-countup>
        <br />
        <div style="margin:20px;">
          <fe-button @click.native="doStart=true" type="primary">Start</fe-button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      doStart: false
    }
  }
}
</script>

<style scoped lang="less">
.demo1 {
  font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif;
  font-size: 6em;
  color: #4a90e2;
}
</style>
