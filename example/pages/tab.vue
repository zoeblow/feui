<template>
  <div class="page">
    <fe-header slot="header" style="width:100%;position:absolute;left:0;top:0;z-index:100;">Tab</fe-header>
    <div class="fe-content">
      <fe-tab>
        <fe-tabitem selected @on-item-click="onItemClick">微信支付</fe-tabitem>
        <fe-tabitem @on-item-click="onItemClick">支付宝支付</fe-tabitem>
        <fe-tabitem @on-item-click="onItemClick">爱咋咋地支付</fe-tabitem>
      </fe-tab>
      <br/>
      <br/>
      <divider>定义bar固定宽度</divider>
      <fe-tab :line-width="1" custom-bar-width="60px">
        <fe-tabitem selected>已发货</fe-tabitem>
        <fe-tabitem>未发货</fe-tabitem>
        <fe-tabitem>全部订单</fe-tabitem>
      </fe-tab>
      <br/>
      <br/>
      <divider>使用函数定义bar宽度</divider>
      <fe-tab :line-width="1" :custom-bar-width="getBarWidth">
        <fe-tabitem selected>AA</fe-tabitem>
        <fe-tabitem>AAAA</fe-tabitem>
        <fe-tabitem>AAAAAAA</fe-tabitem>
      </fe-tab>
      <br/>
      <br/>
      <divider>设置bar颜色</divider>
      <div style="width: 100%;overflow:scroll;-webkit-overflow-scrolling:touch;">
        <fe-tab style="width:500px;" bar-active-color="#41b883" :line-width="1">
          <fe-tabitem>已发货</fe-tabitem>
          <fe-tabitem selected>未发货</fe-tabitem>
          <fe-tabitem>全部订单</fe-tabitem>
          <fe-tabitem>全部订单</fe-tabitem>
          <fe-tabitem>全部订单</fe-tabitem>
        </fe-tab>
      </div>
      <br/>
      <br/>
      <divider>不同的颜色</divider>
      <fe-tab :animate="false">
        <fe-tabitem active-class="active-6-1">已发货</fe-tabitem>
        <fe-tabitem active-class="active-6-2" selected>未发货</fe-tabitem>
        <fe-tabitem active-class="active-6-3">全部订单</fe-tabitem>
      </fe-tab>
    <br/>
    <br/>
    <divider>没有动画肿么办</divider>
    <fe-tab :animate="false">
      <fe-tabitem>已发货</fe-tabitem>
      <fe-tabitem selected>未发货</fe-tabitem>
      <fe-tabitem>全部订单</fe-tabitem>
    </fe-tab>
    <br/>
    <br/>
    <divider>不可用</divider>
    <fe-tab>
      <fe-tabitem selected>A</fe-tabitem>
      <fe-tabitem>B</fe-tabitem>
      <fe-tabitem disabled>Disabled</fe-tabitem>
    </fe-tab>
    <br/>
    <br/>
    <divider>加个线</divider>
    <fe-tab :line-width="2">
      <fe-tabitem :selected="demo3 === item" v-for="(item, index) in list3" :class="{'nuim-1px-r': index===0}" @click="demo3 = item" :key="index">{{item}}</fe-tabitem>
    </fe-tab>
    <br/>
    <br/>
    <fe-tab :line-width="1">
      <fe-tabitem :selected="demo4 === item" v-for="(item, index) in list4" @click="demo4 = item" :key="index">{{item}}</fe-tabitem>
    </fe-tab>
    <br/>
    <br/>
    <divider>tab-item badge</divider>
    <fe-tab>
      <fe-tabitem selected badge-label="1">收到的消息</fe-tabitem>
      <fe-tabitem badge-background="#38C972" badge-color="#fff" badge-label="2">发出的消息</fe-tabitem>
    </fe-tab>
    <br/>
    <br/>
    </div>
  </div>
</template>

<script>
const list = () => ['精选', '美食', '电影', '酒店', '外卖']

export default {
 
  data () {
    return {
      list2: list(),
      demo2: '美食',
      list3: ['收到的消息', '发出的消息'],
      demo3: '收到的消息',
      list4: ['正在正映', '即将上映'],
      demo4: '即将上映',
      demoDisabled: 'A',
      index: 0,
      getBarWidth: function (index) {
        return (index + 1) * 22 + 'px'
      }
    }
  },
  methods: {
    onItemClick (index) {
      console.log('on item click:', index)
    },
    addTab () {
      if (this.list2.length < 5) {
        this.list2 = list().slice(0, this.list2.length + 1)
      }
    },
    removeTab () {
      if (this.list2.length > 1) {
        this.list2 = list().slice(0, this.list2.length - 1)
      }
    },
    next () {
      if (this.index === this.list2.length - 1) {
        this.index = 0
      } else {
        ++this.index
      }
    },
    prev () {
      if (this.index === 0) {
        this.index = this.list2.length - 1
      } else {
        --this.index
      }
    }
  }
}
</script>
<style scoped lang="less">

  .active-6-1 {
    color: rgb(252, 55, 140) !important;
    border-color: rgb(252, 55, 140) !important;
  }
  .active-6-2 {
    color: #04be02 !important;
    border-color: #04be02 !important;
  }
  .active-6-3 {
    color: rgb(55, 174, 252) !important;
    border-color: rgb(55, 174, 252) !important;
  }
  .nuim-1px-r{
    position: relative!important;
    &:after {
      content: " ";
      position: absolute;
      right: 0;
      top: 0;
      width: 1px;
      bottom: 0;
      border-right: 1px solid #C7C7C7;
      color: #C7C7C7;
      -webkit-transform-origin: 100% 0;
      transform-origin: 100% 0;
      -webkit-transform: scaleX(0.5);
      transform: scaleX(0.5);
    }
}
</style>
