<template>
  <div class="page">
    <fe-header slot="header" style="width:100%;position:absolute;left:0;top:0;z-index:100;">Lazyload</fe-header>
    <div class="fe-content">
      <divider>基础用法</divider>
      <fe-group title="iPad Pro">
        <img v-for="img in imageList" v-lazy="img" :key='img'  />
      </fe-group>
      <divider>懒加载背景图</divider>      
      <fe-group title="iPhone 8">
        <div v-for="img in backgroundImageList" class='lazyback' v-lazy:background-image="img" :key='img'></div>
      </fe-group>
      <divider>懒加载模块</divider>
      <fe-group title="MacBook Pro">
        <lazy-component>
          <img v-for="img in componentImageList" v-lazy="img" :key='img' />
        </lazy-component>
      </fe-group>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      imageList: [
        'https://i.loli.net/2018/01/22/5a657b6d542d4.jpg',
        'https://i.loli.net/2018/01/22/5a657b718c766.jpg',
        'https://i.loli.net/2018/01/22/5a657b7140692.jpg',
        'https://i.loli.net/2018/01/22/5a657b62a72bb.jpg'
      ],
      backgroundImageList: [
        'https://i.loli.net/2018/01/29/5a6e94028cdd0.jpg',
        'https://i.loli.net/2018/01/29/5a6e9402daf3a.jpg',
        'https://i.loli.net/2018/01/29/5a6e94051e657.jpg'
      ],
      componentImageList: [
        'https://i.loli.net/2018/01/22/5a657b6118e21.jpg',
        'https://i.loli.net/2018/01/22/5a657b62f3c8b.jpg'
      ]
    }
  }
}
</script>
<style scoped lang="less">
.fe-content {
  padding: 46px 15px 0;

  img,div[lazy] {
    padding: 15px;
    width: 100%;
    margin: 10px 0 0;
    background-color: white;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
    background-size: 315px 225px;
    background-position: 15px;
    background-repeat: no-repeat;
    box-sizing: border-box;
  }
  .lazyback{
    height: 225px;
  }
}
</style>
