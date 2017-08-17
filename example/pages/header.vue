<template>
  <div class="page">
    <br>
    <fe-header>This is the page title.</fe-header>
    <br>
    <fe-header :left-options="{showBack: false}">do not show Back</fe-header>
    <br>
    <fe-header :left-options="{backText: ''}">set empty back text</fe-header>
    <br>
    <fe-header :right-options="{showMore: true}" @on-click-more="showMenus = true">with more menu</fe-header>
    <br>
    <fe-header>with right link<a slot="right">Feedback</a></fe-header>
    <br>
    <fe-header>long long long long long long long text<a slot="right">Feedback</a></fe-header>
    <br>
    <fe-header>with left slot<a slot="left">Close</a></fe-header>
    <br>
    <fe-header>
      <span>overwrite-left</span>
      <fe-icon slot="overwrite-left" type="navicon" size="35" style="fill:#fff;position:relative;top:-8px;left:-3px;"></fe-icon>
    </fe-header>
    <br>
    <fe-header style="background-color:#000;">custom background color</fe-header>
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
      }
    }
  }
</script>

<style scoped lang="less">
  .demo-header {
    margin-bottom: 30px;
  }
</style>
