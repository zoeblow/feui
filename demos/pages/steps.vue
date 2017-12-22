<template>
  <div class="page">
    <fe-header slot="header" style="width:100%;position:absolute;left:0;top:0;z-index:100;">Steps</fe-header>
    <div class="fe-content">
      <fe-steps :active="active">
        <fe-step>买家下单</fe-step>
        <fe-step>商家接单</fe-step>
        <fe-step>买家提货</fe-step>
        <fe-step>交易完成</fe-step>
      </fe-steps>
      <div style="padding:10px">
        <fe-button @click.native="nextStep">下一步</fe-button>
      </div>
      <fe-steps
        :active="active"
        icon="download"
        icon-class="steps-success"
        title="大象放冰箱"
        description="要把大象放冰箱,总共分几步"
      >
        <fe-step>第一步</fe-step>
        <fe-step>第二步</fe-step>
        <fe-step>第三步</fe-step>
        <fe-step>第亖步</fe-step>
      </fe-steps>
      <br>
      <br>
      <fe-steps direction="vertical" :active="0" active-color="#f60">
      <fe-step>
        <h3>派件中</h3>
        <p>2016-07-12 12:40</p>
      </fe-step>
      <fe-step>
        <h3>已到达杭州</h3>
        <p>2016-07-11 10:00</p>
      </fe-step>
      <fe-step>
        <h3>已到达浙江</h3>
        <p>2016-07-10 09:30</p>
      </fe-step>
      <fe-step>
        <h3>已收件</h3>
        <p>2016-07-09 18:30</p>
      </fe-step>
    </fe-steps>
    </div>
  </div>
</template>
<script>
  export default{
    data() {
      return {
        active: 0
      };
    },
    methods:{
      nextStep(){
        this.active = ++this.active % 4;
      }
    }
  }
</script>
<style scoped lang='less' >
.page {
  .steps-success,
  .nuim-icon-location {
    color: #4a90e2;
  }
  .nuim-button {
    margin: 15px 0 0 15px;
  }
  .nuim-steps__message + p {
    margin-bottom: 10px;
  }
  p,
  h3 {
    margin: 0;
    font-size: inherit;
    font-weight: normal;
  }
}
</style>

