<template>
    <div class="pages input">
      <fe-header slot="header" style="width:100%;position:absolute;left:0;top:0;z-index:100;">Toast</fe-header>
      <div class="fe-content">
        <fe-button @click="showSuccess">成功提示</fe-button>
        <fe-button @click="showError">失败提示</fe-button>
        <fe-button @click="showText">提示文字</fe-button>
        <fe-button @click="loading">加载中</fe-button>
      </div>  
    </div>
</template>
<script>
import Toast from '../../src/components/toast'
export default {
  data () {
    return {
      defaultT:true
    }
  },
  methods:{
    showSuccess () {
      Toast({
        duration: 1500,
        message: '操作成功',
        type: 'success'
      })
    },
    showError () {
      Toast({
        duration: 1500,
        message: '操作警告',
        mask:false,
        icon: 'cancel'
      })
    },
    showText(){
      Toast({
        duration: 1500,
        message: '操作失败',
        type: 'text'
      })
    },
    loading(){
      Toast({
        duration: 1500,
        message: '加载中...',
        type: 'loading'
      })
    }
  }
}
</script>

<style scoped lang="less">
  .fe-content{
    padding: 0 10px;
  }
</style>