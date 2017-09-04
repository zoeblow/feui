<template>
  <div class="page page-with-padding">
    <fe-header slot="header" style="width:100%;position:absolute;left:0;top:0;z-index:100;">Loading</fe-header>
    <div class="fe-content">
        <fe-button type="primary" @click="showLoading">show Loading</fe-button>
        <fe-button type="primary" @click="hideLoading">hide Loading</fe-button>
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
    // console.log(Loading)
  },
  methods:{
    showLoading () {
      Loading.show('loading...')
    },
    hideLoading () {
      Loading.hide()
    }
  }
}
</script>
<style scoped lang="less">
  .fe-content{
    margin: 10px;
  }
</style>
