<template>
  <div class="page">
    <fe-header slot="header" style="width:100%;position:absolute;left:0;top:0;z-index:100;">ImgPreview</fe-header>
    <div class="fe-content">
      <div style='padding:10px;'>
        <fe-button @click.native="showImgPreview">预览图片</fe-button>
        <fe-button @click.native="showImgPreview(1)">指定初始位置</fe-button>
      </div>
    </div>
  </div>
</template>
<script>
import { ImgPreview } from 'packages';
export default {
  methods: {
    showImgPreview(position){
      console.log(position)
      const instance = ImgPreview([
        'https://i.loli.net/2018/03/23/5ab4981e8a9af.jpg',
        'https://i.loli.net/2018/03/23/5ab4981e683d6.jpg',
        'https://i.loli.net/2018/03/23/5ab4996ef0026.jpg',
        'https://i.loli.net/2018/03/23/5ab4981e79768.jpg',
        'https://i.loli.net/2018/03/23/5ab4981e81a8e.jpg'
      ], typeof position === 'number' ? position : 0);
    }
  }
};
</script>
<style scoped lang="less">
  .nuim-img-preview {
    img {
      pointer-events: none;
    }
  }
</style>
