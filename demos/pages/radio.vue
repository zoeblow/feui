<template>
  <div class="page">
    <fe-header slot="header" style="width:100%;position:absolute;left:0;top:0;z-index:100;">Radio</fe-header>
    <div class="fe-content">
      <fe-group title="default">
        <fe-radio :options="radio001" @on-change="change"></fe-radio>
      </fe-group>

      <fe-group title="选中的 'China'">
        <fe-radio :options="radio001" value="China"></fe-radio>
      </fe-group>

      <fe-group :title="'已填充选中颜色 '+radio001Value">
        <fe-radio fill-mode :options="radio001" v-model="radio001Value" :selected-label-style="selected"  @on-change="change"></fe-radio>
      </fe-group>

      <fe-group title="自定义占位符和标签">
        <fe-radio fill-mode fill-label="Other" fill-placeholder="填写其他的哦" :options="radio001" @on-change="change"></fe-radio>
      </fe-group>

      <fe-group title="对象选项">
        <fe-radio fill-mode fill-label="Other" fill-placeholder="other" :options="radio003" @on-change="change"></fe-radio>
      </fe-group>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      radio001: [ 'China', 'Japan' ],
      radio001Value: 'China',
      radio002Value: 'Japan',
      radio003: [{
        icon: 'http://temp.im/50x50/4a90e2/fff',
        key: '001',
        value: 'radio001'
      }, {
        icon: 'http://temp.im/50x50/4a90e2/fff',
        key: '002',
        value: 'radio002'
      }],
      selected:{color: '#4a90e2'}
    }
  },
  methods: {
    change (value) {
      console.log('change:', value)
    }
  }
}
</script>
<style scoped lang="less">
  
</style>
