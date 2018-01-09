<template>
  <div class="page">
    <br>
    <fe-header>这是一个标题</fe-header>
    <br>
    <fe-header style="background-color:#f00;"  @on-click-back='clickBack' :left-options="{preventGoBack: true}" >自定义返回事件</fe-header>
    <br>
    <fe-header :left-options="{showBack: false}">不显示返回按钮</fe-header>
    <br>
    <fe-header :left-options="{backText: ''}">不显示文字</fe-header>
    <br>
    <fe-header :right-options="{showMore: true}" @on-click-more="showMenus = true">显示更多按钮</fe-header>
    <br>
    <fe-header>右边连接<a slot="right">Feedback</a></fe-header>
    <br>
    <fe-header>标题要长长长长长长长长长长长长长长长长长长长长长长长<a slot="right">Feedback</a></fe-header>
    <br>
    <fe-header>左边也能现实点啥<a slot="left">Close</a></fe-header>
    <br>
    <fe-header>
      <span>重写左边</span>
      <fe-icons slot="overwrite-left" type="left" style='font-size:34px;color:#f60;margin-top: -7px;' ></fe-icons>
    </fe-header>
    <br>
    <fe-header style="background-color:#000;">自定义背景颜色</fe-header>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        menus: {
          menu1: 'Take Photo',
          menu2: 'Choose from photos'
        },
        showMenus: false
      }
    },
    methods: {
      onHeaderClick () {
        console.log('header clicked')
      },
      clickBack () {
        alert('自定义返回事件')
      }
    }
  }
</script>

<style scoped lang="less">
  .demo-header {
    margin-bottom: 30px;
  }
</style>
