<template>
  <div class="page">
    <fe-header slot="header" style="width:100%;position:absolute;left:0;top:0;z-index:100;">Popup Picker</fe-header>
    <div class="fe-content">
      <fe-group title="单列">
        <popup-picker :title="title1" :data="list1" v-model="value1" @on-show="onShow" @on-hide="onHide" @on-change="onChange" placeholder="请选择"></popup-picker>
      </fe-group>
      <br>
      <div class="picker-buttons">
        <fe-button type="primary" @click.native="value1=[]">将值置为空</fe-button>
        <fe-button type="primary" @click.native="changeList10">重新赋值列表</fe-button>
        <fe-button type="primary" @click.native="changeList11">push方式更改列表</fe-button>
      </div>
      <fe-group title="两列">
        <popup-picker :title="title2" :data="list2" v-model="value2"></popup-picker>
      </fe-group>
      <br>
      <divider>控制PopupPicker的可见性</divider>
      <div style="margin: 0 15px;">
        <fe-button @click.native="showPopupPicker = true" type="primary">显示PopupPicker的值: {{value5 }}</fe-button>
      </div>
      <fe-group>
        <popup-picker :show="showPopupPicker" :show-cell="false" title="TEST" :data="[['1', '2', '3', '4', '5']]" v-model="value5" @on-hide="showPopupPicker=false"></popup-picker>
      </fe-group>
      <fe-group title="chained columns">
        <popup-picker :title="title3" :data="list3" :columns="3" v-model="value3" ref="picker3"></popup-picker>
        <fe-cell title="获取值对应的文字" :value="$refs.picker3&&$refs.picker3.getNameValues()"></fe-cell>
        <popup-picker :title="title4" :data="list3" :columns="3" v-model="value4" show-name></popup-picker>
      </fe-group>
      <br>
      <fe-group title="隐藏时不影响其他popup-picker的mask">
        <fe-switch title="隐藏popup" v-model="switch6"></fe-switch>
        <popup-picker v-if="!switch6" title="显示值" :data="['你猜猜我是谁啊'.split('')]" v-model="value6"></popup-picker>
      </fe-group>
      <fe-group title="显示格式化">
        <popup-picker title="时间" :inline-desc="`当前值[${formatDemoValue}]`"v-model="formatDemoValue" :data="[['01','02','03'],['11','12','13']]" :display-format="format"></popup-picker>
      </fe-group>

    </div>
  </div>
</template>

<script>
export default {
  methods: {
    onChange(val) {
      console.log("val change", val);
    },
    changeList10() {
      this.list1 = [
        ["小米1", "iPhone1", "华为1", "情怀1", "三星1", "其他1", "不告诉你1"]
      ];
    },
    changeList11() {
      this.list1[0].push("我是push条目");
    },
    changeList20() {},
    changeList21() {
      this.list3.push({
        name: "美国002_007",
        value: "0007",
        parent: "usa002"
      });
    },
    onShow() {
      console.log("on show");
    },
    onHide(type) {
      console.log("on hide", type);
    }
  },
  data() {
    return {
      title1: "手机机型",
      title2: "详细机型",
      title3: "联动显示值",
      title4: "联动显示文字",
      list1: [["小米", "iPhone", "华为", "情怀", "三星", "其他", "不告诉你"]],
      list2: [
        ["小米", "iPhone", "华为", "情怀", "三星", "其他", "不告诉你"],
        ["小米1", "iPhone2", "华为3", "情怀4", "三星5", "其他6", "不告诉你7"]
      ],
      list3: [
        {
          name: "中国",
          value: "china",
          parent: 0
        },
        {
          name: "美国",
          value: "USA",
          parent: 0
        },
        {
          name: "安徽",
          value: "ah",
          parent: "china"
        },
        {
          name: "浙江",
          value: "zj",
          parent: "china"
        },
        {
          name: "加州",
          value: "ca",
          parent: "USA"
        },
        {
          name: "纽约州",
          value: "nyk",
          parent: "USA"
        },
        {
          name: "合肥",
          value: "hf",
          parent: "ah"
        },
        {
          name: "宿州",
          value: "sz",
          parent: "ah"
        },
        {
          name: "杭州",
          value: "hz",
          parent: "zj"
        },
        {
          name: "宁波",
          value: "nb",
          parent: "zj"
        },
        {
          name: "南加州",
          value: "ca-s",
          parent: "ca"
        },
        {
          name: "北加州",
          value: "ca-n",
          parent: "ca"
        },
        {
          name: "布鲁克林区",
          value: "0005",
          parent: "nyk"
        },
        {
          name: "曼哈顿",
          value: "Manhattan",
          parent: "nyk"
        }
      ],
      value1: ["iPhone"],
      value2: ["iPhone", "华为3"],
      value3: [],
      value4: [],
      showPopupPicker: false,
      value5: ["2"],
      switch6: false,
      value6: [],
      formatDemoValue: ["01", "12"],
      format: function(value, name) {
        return `${value[0]}:${value[1]}`;
      }
    };
  }
};
</script>

<style scoped>
.picker-buttons {
  margin: 0 15px;
}
</style>
