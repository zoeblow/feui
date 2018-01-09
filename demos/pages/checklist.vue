<template>
  <div class="page">
    <fe-header slot="header" style="width:100%;position:absolute;left:0;top:0;z-index:100;">Checklist</fe-header>
    <div class="fe-content">
      <fe-checklist title="基础用法" :label-position="labelPosition" required :options="commonList" v-model="checklist001" @on-change="change"></fe-checklist>
      <div style="padding:15px;">
        <fe-button @click.native="labelPosition = labelPosition === 'left' ? '' : 'left'" type="primary">切换 label 位置</fe-button>
        <fe-button @click.native="selectFirst" type="primary">选择第1个值</fe-button>
        <fe-button @click.native="selectFirstTwo" type="primary">选择前两个值</fe-button>
        <fe-button @click.native="selectLeft" type="primary">选择剩下值</fe-button>
      </div>
      <!-- <fe-checklist title="错误处理" required :options="commonList" show-error v-model="checklist0011" @on-change="change" @on-error="onError" @on-clear-error="onNoError" name="demo1" :max="2">
        <p slot="footer" v-show="error" class="error">{{error}}</p>
      </fe-checklist> -->
      <fe-checklist title="默认选中 安徽 和 浙江 (禁用操作)" disabled label-position="left" :options="commonList" v-model="checklist002" @on-change="change"></fe-checklist>

      <fe-checklist title="最多选2个" :options="commonList" v-model="checklist003" :max=2 @on-change="change"></fe-checklist>

      <fe-checklist title="只能选一个(单选模式)" :options="commonList" v-model="radioValue" :max="1" @on-change="change"></fe-checklist>

      <fe-checklist title="打乱选项顺序" random-order :options="checklist005" v-model="checklist005Value" @on-change="change"></fe-checklist>

      <fe-checklist ref="demoObject" title="使用 Object 类型的选项列表，key 必须为字符串" :options="objectList" v-model="objectListValue" @on-change="change"></fe-checklist>
      
      <fe-group>
        <p>{{ fullValues }}</p>
      </fe-group>
      <div style="padding:15px;">
        <fe-button type="primary" @click.native="fullValues = $refs.demoObject.getFullValue()">getFullValue()</fe-button>
      </div>
      <fe-checklist title="包含 inlineDesc 属性的 Object 类型选项列表" :options="inlineDescList" v-model="inlineDescListValue" @on-change="change"></fe-checklist>
      <fe-checklist title="异步选项列表" :max="3" :options="asyncList" v-model="asyncListValue" @on-change="change"></fe-checklist>
    </div>
  </div>
</template>

<script>
import _ from 'lodash'
export default {
  mounted () {
    setTimeout(() => {
      this.asyncList = ['A', 'B', 'C', 'D']
    }, 3000)
  },
  data () {
    return {
      fullValues: [],
      checklist001: [],
      checklist0011: [],
      labelPosition: '',
      error: '',
      commonList: [ '安徽', '浙江', '北京' ],
      checklist002: [ '安徽', '浙江' ],
      checklist003: [ '安徽', '浙江' ],
      checklist005: [ '01', '02', '03' ],
      checklist005Value: [],
      objectList: [{key: '1', value: '001 value'}, {key: '2', value: '002 value'}, {key: '3', value: '003 value'}],
      objectListValue: ['1', '2'],
      inlineDescList: [
        {key: '1', value: 'Tiger is good', inlineDesc: 'Tiger is the king of mountain'},
        {key: '2', value: 'Lion is better', inlineDesc: 'Lion is the king of woods'},
        {key: '3', value: 'Camel is best, no inline-desc'}
      ],
      inlineDescListValue: [1],
      asyncList: [],
      asyncListValue: [],
      radioValue: ['安徽']
    }
  },
  methods: {
    change (val) {
      console.log('change', val)
    },
    onError (errors) {
      console.log(errors)
      this.error = errors
    },
    onNoError () {
      this.error = null
    },
    selectFirst () {
      this.checklist001 = ['安徽']
    },
    selectFirstTwo () {
      this.checklist001 = ['安徽', '浙江']
    },
    selectLeft () {
      const left = _.without.apply(_, [this.commonList].concat(this.checklist001))
      this.checklist001 = left
    }
  },
}
</script>