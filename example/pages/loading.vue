<template>
  <div class="page page-with-padding">
    <fe-header slot="header" style="width:100%;position:absolute;left:0;top:0;z-index:100;">Loading</fe-header>
    <div class="fe-content">
        <fe-button type="primary" @click="showLoading">show Loading(2秒后关闭)</fe-button>
    </div>
  </div>
</template>
<script>
  import Loading from '../../src/components/loading'
  export default {
  data () {
    return {
    }
  },
  created:function(){
  },
  methods:{
    showLoading () {
      Loading.show({text:'显示咯'});
      setTimeout(function(){
         Loading.hide()
      },2000)
    }
  }
}
</script>
<style scoped lang="less">
  .fe-content{
    margin: 10px;
  }
</style>
