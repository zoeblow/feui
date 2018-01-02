<template>
  <div class="page">
    <fe-header slot="header" style="width:100%;position:absolute;left:0;top:0;z-index:100;">Rater</fe-header>
    <div class="fe-content">
      <fe-group title="基础用法">
        <fe-cell title="默认设置" inline-desc="默认总共5星">
          <fe-rater v-model="data3" slot="value"></fe-rater>
        </fe-cell>
        <fe-cell title="自定义颜色">
          <fe-rater v-model="data2" slot="value" :max="6" active-color="red"></fe-rater>
        </fe-cell>
      </fe-group>

      <fe-group title="不可用">
        <fe-cell title="历史得分">
          <fe-rater v-model="data4" slot="value" disabled></fe-rater>
        </fe-cell>
        <fe-cell :title="'小数形式 ' + data41 ">
          <fe-rater v-model="data41" slot="value" active-color="red" disabled></fe-rater>
        </fe-cell>
        <fe-cell title="自定义大小(15px)">
          <fe-rater v-model="data42" slot="value" active-color="red" :font-size="15" disabled></fe-rater>
        </fe-cell>
      </fe-group>

      <fe-group title="自定义图标">
        <fe-cell title="小心心">
          <fe-rater v-model="data4" slot="value" star="♡" active-color="red" :margin="15"></fe-rater>
        </fe-cell>
        <fe-cell title="发光的太阳">
          <fe-rater v-model="data5" slot="value" star="☼" active-color="#4a90e2" :margin="4"></fe-rater>
        </fe-cell>
        <fe-cell title="笑脸">
          <fe-rater v-model="data5" slot="value" star="☻" active-color="#4a90e2" :margin="4"></fe-rater>
        </fe-cell>
        <fe-cell title="小星星">
          <fe-rater v-model="data5" slot="value" star="✩" active-color="red" :margin="4"></fe-rater>
        </fe-cell>
        <fe-cell title="尴尬">
          <fe-rater v-model="data5" slot="value" star="囧" active-color="#4a90e2" :margin="4"></fe-rater>
        </fe-cell>
        <fe-cell title="诺">
          <fe-rater v-model="data5" slot="value" star="诺" active-color="#FD6E0E" :margin="4"></fe-rater>
        </fe-cell>
      </fe-group>

      <fe-group title="联动">
        <fe-cell title="你的分数">
          <fe-rater v-model="data6" active-color="red" slot="value"></fe-rater>
        </fe-cell>
        <fe-cell title="range" primary="content" :inline-desc="data6 + ''">
          <fe-range slot="value" v-model="data6" :step="1" :min="0" :max="5"></fe-range>
        </fe-cell>
      </fe-group>
    </div>
  </div>
</template>

<script>
  export default {
    data (){
      return{
        data1: 0,
        data2: 5,
        data3: 5,
        data4: 3,
        data41: 3.7,
        data42: 3.5,
        data5: 3,
        data6: 3
      } 
    }
  }  
</script>

<style scoped lang="less">
</style>
