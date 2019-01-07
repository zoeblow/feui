<template>
  <div class="page">
    <fe-header slot="header" style="width:100%;position:absolute;left:0;top:0;z-index:100;">仿JD地址选择</fe-header>
    <div class="fe-content">
      <div style="margin:10px">
        <!-- <fe-button type='primary' @click.native='choseAdd'>显示</fe-button> -->
      </div>
      <fe-group>
        <jd-address title="请选择" placeholder="请选择地区" addTitle='您住哪儿?' :info='info' inlineDesc='地区必须选择哦' @on-show='onShow' @on-hide='onHide' :showClose='true' :clickMaskClose='false' :showMask='true' color='#4a90e2' ></jd-address>
      </fe-group>
    </div>
  </div>
</template>
<script>
import jdAddress from "../components/jd-address";
let addListInfo = [
  {id:"1",name:"北京市"},
{id:"2",name:"上海市"},
{id:"3",name:"天津市"},
{id:"4",name:"重庆市"},
{id:"5",name:"河北省"},
{id:"6",name:"山西省"},
{id:"7",name:"河南省"},
{id:"8",name:"辽宁省"},
{id:"9",name:"吉林省"},
{id:"10",name:"黑龙江省"},
{id:"11",name:"内蒙古"},
{id:"12",name:"江苏省"},
{id:"13",name:"山东省"},
{id:"14",name:"安徽省"},
{id:"15",name:"浙江省"},
{id:"16",name:"福建省"},
{id:"17",name:"湖北省"},
{id:"18",name:"湖南省"},
{id:"19",name:"广东省"},
{id:"20",name:"广西自治区"},
{id:"21",name:"江西省"},
{id:"22",name:"四川省"},
{id:"23",name:"海南省"},
{id:"24",name:"贵州省"},
{id:"25",name:"云南省"},
{id:"26",name:"西藏自治区"},
{id:"27",name:"陕西省"},
{id:"28",name:"甘肃省"},
{id:"29",name:"青海省"},
{id:"30",name:"宁夏省"},
{id:"31",name:"新疆自治区"},
{id:"32",name:"台湾"},
{id:"84",name:"钓鱼岛"},
{id:"52993",name:"港澳地区"},
{id:"53283",name:"海外"}
]

export default {
  data() {
    return {
      info: addListInfo,
    };
  },
  components: {
    jdAddress
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
