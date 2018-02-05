<template>
  <div class="page">
    <fe-header slot="header" style="width:100%;position:absolute;left:0;top:0;z-index:100;">Radio</fe-header>
    <div class="fe-content">
      <fe-group title="基本用法">
        <fe-radio :options="radio001" @on-change="change"></fe-radio>
      </fe-group>
 
      <fe-group title="选中的 '安徽'">
        <fe-radio :options="radio001" value="安徽" disabled></fe-radio>
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
  data() {
    return {
      radio001: ["安徽", "北京"],
      radio001Value: "安徽",
      radio002Value: "北京",
      radio003: [
        {
          icon: "http://temp.im/50x50/f17c67/fff",
          key: "001",
          value: "珊瑚朱"
        },
        {
          icon: "http://temp.im/50x50/008573/fff",
          key: "002",
          value: "松石绿"
        },
        { icon: "http://temp.im/50x50/228fbd/fff", key: "003", value: "浅缥色" }
      ],
      selected: { color: "#4a90e2" }
    };
  },
  methods: {
    change(value) {
      console.log("change:", value);
    }
  }
};
</script>
