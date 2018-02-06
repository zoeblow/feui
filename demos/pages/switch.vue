<template>
    <div class="page input">
      <fe-header slot="header" style="width:100%;position:absolute;left:0;top:0;z-index:100;">switch</fe-header>
      <div class="fe-content">
        <fe-group title='一般使用'>
          <fe-switch title="默认false"></fe-switch>
          <fe-switch title="默认true"  :inline-desc="defaultT + ''" v-model="defaultT"></fe-switch>
        </fe-group>
        <fe-group title="disabled">
          <fe-switch title="默认false" disabled></fe-switch>
          <fe-switch title="默认true" :value="true" disabled></fe-switch>
        </fe-group>
        <fe-group title="设置title 颜色">
          <fe-switch  title="<span style='color:red'>我的颜色</span>"></fe-switch>
        </fe-group>
        <fe-group title="阻止默认">
          <fe-switch title="默认false" prevent-default v-model="defaultF" @on-click="onClick"></fe-switch>
        </fe-group>
        <fe-group title="值转换 map">
          <fe-switch title="默认true" :value-map="['0', '1']" v-model="stringValue"></fe-switch>
          <fe-cell title="value" :value="typeof stringValue + ' ' + stringValue"></fe-cell>
        </fe-group>
      </div>  
    </div>
</template>
<script>
export default {
  data() {
    return {
      defaultT: true,
      defaultF: false,
      stringValue: '0'
    };
  },
  methods: {
    onClick (newVal, oldVal) {
      console.log(newVal, oldVal)
      Toast.loading({
        duration: 1000,
        message: "处理中..."
      });
      setTimeout(() => {
        this.defaultF = newVal
      }, 1000);
    }
  }
};
</script>

<style  lang="less">

</style>
