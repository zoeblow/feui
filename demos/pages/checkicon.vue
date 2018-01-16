<template>
  <div class="page">
    <fe-header slot="header" style="width:100%;position:absolute;left:0;top:0;z-index:100;">Checkicon</fe-header>
    <div class="fe-content">
      <fe-group title="左对齐">
        <fe-checkicon :value.sync="demo1"  >你是否同意? ({{ demo1 }})</fe-checkicon>
        <fe-checkicon :value.sync="demo2"  type="plain">同意《注册协议》({{ demo2 }})</fe-checkicon>
      </fe-group>
      <fe-group title="右对齐">
        <fe-checkicon :value.sync="demo4" right >你是否同意? ({{ demo4 }})</fe-checkicon>
        <fe-checkicon :value.sync="demo3" right type="plain">同意《注册协议》({{demo3}})</fe-checkicon>
      </fe-group>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      demo1: false,
      demo2: true,
      demo3: false,
      demo4: true
    }
  }
}
</script>