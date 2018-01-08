<template>
  <div class="page">
    <fe-header slot="header" style="width:100%;position:absolute;left:0;top:0;z-index:100;">Tabbar</fe-header>
    <div class="fe-content">
      <fe-tabbar>
        <tabbar-item>
          <img slot="icon" src="../assets/images/logo-100.png" />
          <span slot="label">主页</span>
        </tabbar-item>
        <tabbar-item show-dot>
          <img slot="icon" src="../assets/images/logo-100.png" />
          <span slot="label">消息</span>
        </tabbar-item>
        <tabbar-item selected link="/tabbar" icon-class='selected'>
          <img slot="icon" src="../assets/images/logo-100.png" />
          <span slot="label">通讯录</span>
        </tabbar-item>
        <tabbar-item badge="2" @on-item-click='click'>
          <img slot="icon" src="../assets/images/logo-100.png" />
          <span slot="label">我的</span>
        </tabbar-item>
      </fe-tabbar>
    </div>
  </div>
</template>
<script>
  export default{
    data () {
      return {
      }
    },
    methods:{
      click:function(i){
        console.log(i)
      }
    }
  }
</script>
</style>
<style lang="less" scoped>
img{
  filter: grayscale(100%); 
}

.weui-bar__item_on {
  img{
    filter: grayscale(0%); 
  }
}
</style>
