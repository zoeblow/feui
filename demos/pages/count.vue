<template>
  <div class="page page-with-padding">
    <fe-header slot="header" style="width:100%;position:absolute;left:0;top:0;z-index:100;">Count</fe-header>
    <div class="fe-content">
      <fe-group title="默认">
        <fe-count name="数量" title="数量"></fe-count>
      </fe-group>

      <fe-group title="监听 on-change 事件，在调试窗口中输出">
        <fe-count title="数量" :value="0" :min="0" @on-change="change"></fe-count>
      </fe-group>

      <fe-group title="设置宽度为100px">
        <fe-count title="数量" width="100px"></fe-count>
      </fe-group>

      <fe-group title="圆形按钮">
        <fe-count title="数量" v-model="roundValue" button-style="round" :min="0" :max="5"></fe-count>
      </fe-group>

      <fe-group title="设置步长为0.5">
        <fe-count title="数量" :step="0.5"></fe-count>
      </fe-group>

      <fe-group title="设置值为1，最小值为-5，最大值为8">
        <fe-count title="数量" :min="-5" :max="8" :value="1"></fe-count>
      </fe-group>

      <fe-group title="设置可以输入">
        <fe-count :value="10" title="数量" fillable></fe-count>
      </fe-group>
    </div>

  </div>
</template>
<script>
export default {
  data() {
    return {
      roundValue: 0
    };
  },
  methods: {
    change(val) {
      console.log("change", val);
    }
  }
};
</script>
