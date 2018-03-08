<template>
  <div class="page">
    <fe-header slot="header" style="width:100%;position:absolute;left:0;top:0;z-index:100;">Upload</fe-header>
    <div class="fe-content">
      <divider>基础用法</divider>
      <div class="demo-uploader-container">
        <fe-uploader :after-read="logContent">
          <fe-icons type="camera" />
        </fe-uploader>
      </div>
      <divider>设置input属性</divider>
      <div class="demo-uploader-container">
        <fe-uploader :after-read="logContent" accept="image/gif ,image/png, image/jpeg" multiple>
          <fe-icons type="camera" />
        </fe-uploader>
      </div>
      
      <div class="perview">
        <p  v-if='fileName'>{{fileName}}</p>
        <img class="demo-img" :src="imgSrc" alt="" v-if="imgSrc">
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return {
      imgSrc:'',
      fileName:''
    }
  },
  methods:{
    logContent(file) {
      console.log(file,file.file.name);
      this.fileName=file.file.name
      if((file.file.type).indexOf('image'>=0)){
        this.imgSrc=file.content
      }
    }
  }
};
</script>
<style scoped lang="less">
.demo-uploader-container {
  padding: 10px 20px;
  font-size: 20px;
  .feui{
    font-size: 32px;
  }
}
.perview{
  padding: 10px;
  box-sizing: border-box;
  .demo-img{
    max-width: 100%;
  }
}
</style>
