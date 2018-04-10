<template>
  <div class="page">
    <fe-header slot="header" style="width:100%;position:absolute;left:0;top:0;z-index:100;">Myadd</fe-header>
    <div class="fe-content">
      <div style="margin:10px">
        <fe-button type='primary' @click.native='choseAdd'>显示</fe-button>
      </div>
      <fe-group>
        <x-address title="请选择" placeholder="请选择地区" addTitle='您住哪儿?' :info='info' inlineDesc='必须选择地区哦' @on-show='onShow' @on-hide='onHide' :showClose='true' :clickMaskClose='false' :showMask='true' color='#4a90e2' ></x-address>
      </fe-group>
    </div>
  </div>
</template>
<script>
import jdCityPicker from "../assets/datas/jd_city_picker.json";
export default {
  data() {
    return {
      info: jdCityPicker,
    };
  },
  methods: {
    onShow(e){
      console.log(e,'显示咯')
    },
    onHide(e){
      console.log(e,'隐藏咯')
    }
  }
};
</script>
<style scoped lang="less">

</style>
