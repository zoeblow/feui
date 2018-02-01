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
      </div>  
    </div>
</template>
<script>
export default {
  data() {
    return {
      defaultT: true
    };
  },
  methods: {}
};
</script>

<style  lang="less">

</style>
