<template>
  <div class="page">
    <fe-header slot="header" style="width:100%;position:absolute;left:0;top:0;z-index:100;">Address</fe-header>
    <div class="fe-content">
      <fe-group>
        <fe-address @on-hide="logHide" @on-show="logShow" :title="title" v-model="value" :list="addressData" placeholder="请选择地址" inline-desc="可以设置placeholder"></fe-address>
        <fe-cell title="上面value值" :value="value"></fe-cell>
      </fe-group>
      <br>
      <fe-group label-width="4em" label-align="left">
        <fe-address :title="title2" v-model="value2" raw-value :list="addressData" value-text-align="left"></fe-address>
      </fe-group>
      <br/>
      <div style="padding: 0 15px;">
        <fe-button type="primary" @click.native="changeData">改变数据（通过 id）</fe-button>
        <fe-button type="primary" @click.native="changeDataByLabels">改变数据（通过文字值）</fe-button>
        <fe-button type="primary" @click.native="changeDataByLabels2">改变数据（两级，通过文字值）</fe-button>
      </div>
      <br/>

      <fe-group>
        <fe-address title="二级省市" v-model="value3" raw-value :list="addressData"></fe-address>
      </fe-group>
      <fe-group>
        <fe-address title="只显示省市" v-model="value4" raw-value :list="addressData" hide-district></fe-address>
        <fe-cell title="value值" :value="value4"></fe-cell>
        <fe-cell title="转换成文字值" :value="getName(value4)"></fe-cell>
      </fe-group>

      <br/>
      <fe-group title="错误的地址将不能正确渲染到相应位置">
        <fe-address title="错误的值" v-model="value5" raw-value :list="addressData" inline-desc="广东省, 深圳 市, 南山区"></fe-address>
      </fe-group>  
    </div>
  </div>
</template>
<script>
import value2name from '../../src/libs/value2name'
import ChinaAddressV3   from '../assets/datas/china_address_v3.json'

export default {
  data () {
    return {
      title: '默认为空',
      value: [],
      title2: '设置值：',
      value2: ['天津市', '市辖区', '和平区'],
      value3: ['广东省', '中山市', '--'],
      addressData: ChinaAddressV3,
      value4: [],
      value5: ['广东省', '深圳 市', '南山区']
    }
  },
  created(){
    console.log()
  },
  methods: {
    changeData () {
      this.value2 = ['430000', '430400', '430407']
    },
    changeDataByLabels () {
      this.value2 = ['广东省', '广州市', '天河区']
    },
    changeDataByLabels2 () {
      this.value2 = ['广东省', '中山市', '--']
    },
    getName (value) {
      return value2name(value, ChinaAddressV3)
    },
    logHide (str) {
      console.log('on-hide', str)
    },
    logShow (str) {
      console.log('on-show')
    }
  }
}
</script>

<style scoped lang="less">
  
</style>
