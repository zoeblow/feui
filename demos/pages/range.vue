<template>
  <div class="page">
    <fe-header slot="header" style="width:100%;position:absolute;left:0;top:0;z-index:100;">Range</fe-header>
    <div class="fe-content">
      <fe-group title="默认用法">
        <fe-cell title="默认" :inline-desc="'value: '+data1" primary="content">
          <fe-range v-model="data1" @on-change="onChange"></fe-range>
        </fe-cell>
        <fe-cell title="允许小数" :inline-desc="'value is: '+data2" primary="content">
          <fe-range v-model="data2" decimal></fe-range>
        </fe-cell>
        <fe-cell title="默认值=20" :inline-desc="'value is: '+data3" primary="content">
          <fe-range v-model="data3"></fe-range>
        </fe-cell>
      </fe-group>
      <fe-group title="最大值和最小值">
        <fe-cell title="最小值=8" :inline-desc="'value is: '+data4" primary="content">
          <fe-range v-model="data4" :min="8"></fe-range>
        </fe-cell>
        <fe-cell title="最大值=88" :inline-desc="'value is: '+data5" primary="content">
          <fe-range v-model="data5" :max="88"></fe-range>
        </fe-cell>
        <fe-cell title="设置最小/大值" :inline-desc="'value is: '+data6" primary="content">
          <fe-range v-model="data6" :min="7" :max="77"></fe-range>
        </fe-cell>
        <fe-cell title="自定义取值" primary="content">
          <fe-range v-model="dynamiValue" :min="min" :max="max" :step="step"></fe-range>
        </fe-cell>
        <fe-cell title="当前值" :value="dynamiValue + ''"></fe-cell>
      </fe-group>
      <br>
      <div style="margin:0 10px;">
        <fe-button type="primary" @click.native="update">小值= {{min}}, 大值 = {{max}} and 步长 = {{step}}</fe-button>
      </div>

      <fe-group title="设置步长">
        <fe-cell title="步长10" :inline-desc="'valus is: '+data7" primary="content">
          <fe-range v-model="data7" :min="7" :max="77" :step="10"></fe-range>
        </fe-cell>
      </fe-group>

      <fe-group title="不可用">
        <fe-cell title="不可用" :inline-desc="'valus is: '+data8" primary="content">
          <fe-range v-model="data8" disabled></fe-range>
        </fe-cell>
        <fe-cell title="透明度" :inline-desc="'valus is: '+data8" primary="content">
          <fe-range v-model="data8" disabled :disabled-opacity="0.1"></fe-range>
        </fe-cell>
      </fe-group>

      <fe-group title="线条高度">
        <fe-cell title="线条高度" :inline-desc="'value is: '+data9" primary="content">
          <fe-range v-model="data9" :range-bar-height="4"></fe-range>
        </fe-cell>
      </fe-group>

      <fe-group title="自定义html大小">
        <fe-cell title="文字大小" :inline-desc="'字号: ' + data10" primary="content">
          <fe-range v-model="data10" :min="12" :max="22" minHTML="<span style='font-size:12px;'>小</span>" maxHTML="<span style='font-size:22px;'>大</span>"></fe-range>
        </fe-cell>
        <fe-cell title="内容" :inline-desc="'value is: ' + data11 + '%'" primary="content">
          <fe-range v-model="data11" minHTML="<span style='font-size:16px;color:#4a90e2;'>-</span>" maxHTML="<span style='font-size:30px;color:#4a90e2;'>+</span>"></fe-range>
        </fe-cell>
      </fe-group>

      <fe-group title="联动">
        <fe-cell title="默认值" primary="content">
          <fe-range v-model="data12"></fe-range>
        </fe-cell>
        <fe-cell title="默认值" primary="content">
          <fe-range v-model="data12"></fe-range>
        </fe-cell>
      </fe-group>

      <fe-group :title="'延时效果 ' + 'value: ' + data13">
        <fe-cell title="Default" primary="content">
          <fe-range :step="10" v-model="data13" v-show="showData13"></fe-range>
        </fe-cell>
      </fe-group>
    </div>
  </div>
</template>
<script>
export default {
  mounted() {
    setTimeout(() => {
      this.showData13 = true;
    }, 2000);
  },
  data() {
    return {
      data1: 0,
      data2: 0,
      data3: 20,
      data4: 18,
      data5: 28,
      data6: 37,
      data7: 17,
      data8: 25,
      data9: 50,
      data10: 14,
      data11: 30,
      data12: 0,
      data13: 10,
      showData13: false,
      min: 0,
      max: 100,
      step: 1,
      dynamiValue: 0
    };
  },
  methods: {
    onChange(val) {
      console.log("change", val);
    },
    update() {
      this.min = Math.floor(Math.random() * 30);
      this.max = Math.floor(50 + Math.random() * 100);
      this.step = 1 + Math.floor(Math.random() * 10);
    }
  }
};
</script>
<style scoped lang="less">

</style>
