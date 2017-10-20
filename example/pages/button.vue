<template>
  <div class="page">
    <fe-header slot="header" style="width:100%;position:absolute;left:0;top:0;z-index:100;" @on-click-back='clickBack' :left-options="{preventGoBack: true}" >button</fe-header>
    <div class="fe-content">
      <div style="margin:10px;">
        <divider>大按钮</divider>
        <div class="buttons-big">
          <fe-button type="primary">页面主要操作 Normal</fe-button>
          <fe-button type="primary" is-loading>页面主要操作 Loading</fe-button>
          <fe-button type="primary" disabled>页面主要操作 Disabled</fe-button>
          <fe-button type="default">页面次要操作 Normal</fe-button>
          <fe-button type="default" is-loading>页面次要操作 Loading</fe-button>
          <fe-button type="default" disabled>页面次要操作 Disabled</fe-button>
          <fe-button type="warn">警告类操作 Normal</fe-button>
          <fe-button type="warn" is-loading>警告类操作 Loading</fe-button>
          <fe-button type="warn" disabled>警告类操作 Disabled</fe-button>
        </div>

        <divider>边框按钮</divider>
        <div class="buttons-plain">
          <fe-button type="default" :plain="true">按钮</fe-button>
          <fe-button type="default" :plain="true" disabled>按钮</fe-button>
          <fe-button type="primary" :plain="true">按钮</fe-button>
          <fe-button type="primary" :plain="true" disabled>按钮</fe-button>
        </div>
        <divider>小按钮</divider>
        <div class="buttons-mini">
          <fe-button type="primary" :mini="true">按钮</fe-button>
          <fe-button type="default" :mini="true">按钮</fe-button>
          <fe-button type="warn" :mini="true">按钮</fe-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  methods:{
    clickBack () {
      this.$router.push({path:'/'});
    }
  }
}
</script>
<style scoped lang="less">
  .buttons-big {
    display: block;
    margin: 10px auto;
  }
  .buttons-plain {
    display: block;
    width: 60%;
    margin: 10px auto;
  }

  .buttons-mini {
    display: block;
    width: 60%;
    margin: 10px auto;
  }
</style>