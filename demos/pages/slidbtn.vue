<template>
  <div class="page">
    <fe-header slot="header" style="width:100%;position:absolute;left:0;top:0;z-index:100;">滑动</fe-header>
    <div class="fe-content">
      <divider>正常</divider>
      <fe-slidbtn :right-width="65" :left-width="65" @on-click-left='clickLeft' @on-click-right='clickRight' >
        <span slot="left" >选择</span>
        <fe-group>
          <fe-cell title="单元格1" value="单元格1内容"></fe-cell>
        </fe-group>
        <span slot="right" >删除</span>
      </fe-slidbtn>
      <divider>自定义按钮颜色</divider>
      <fe-slidbtn :right-width="65" :left-width="65" :bg-color="['green','red']"  @on-click-left='clickLeft' @on-click-right='clickRight'>
        <span slot="left" >选择</span>
        <fe-group>
          <fe-cell title="单元格1" value="单元格1内容"></fe-cell>
        </fe-group>
        <span slot="right" >删除</span>
      </fe-slidbtn>
      <divider>做能左滑</divider>
      <fe-slidbtn :right-width="65" @on-click-left='clickLeft' @on-click-right='clickRight' >
        <fe-group>
          <fe-cell title="单元格1" value="单元格1内容"></fe-cell>
        </fe-group>
        <span slot="right" >删除</span>
      </fe-slidbtn>
      <divider>做能右滑</divider>
      <fe-slidbtn :left-width="65" @on-click-left='clickLeft' @on-click-right='clickRight' >
        <span slot="left" >选择</span>
        <fe-group>
          <fe-cell title="单元格1" value="单元格1内容"></fe-cell>
        </fe-group>
      </fe-slidbtn>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    clickRight() {
      alert("点击了 Right");
    },
    clickLeft() {
      alert("点击了 Left");
    }
  }
};
</script>
<style scoped lang="less">

</style>
