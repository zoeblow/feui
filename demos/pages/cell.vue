<template>
  <div class="page">
    <fe-header slot="header" style="width:100%;position:absolute;left:0;top:0;z-index:100;">cell</fe-header>
    <div class="fe-content">
      <fe-group title='你好'>
        <fe-cell title='Cell' value='sss'></fe-cell>
        <fe-cell title='Cell' value='sss'>
        </fe-cell>
        <fe-cell title='Cell' value='sss'></fe-cell>     
        <fe-cell title='Cell' disabled is-link></fe-cell> 
        <fe-cell title='Cell' value='3666'>
          <fe-icons type='success' slot="icon"></fe-icons>
        </fe-cell> 
        <fe-cell title='Cell' value='3666'>
          <img slot="icon" width="20" style="display:block;margin-right:5px;" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAMAAABgZ9sFAAAAVFBMVEXx8fHMzMzr6+vn5+fv7+/t7e3d3d2+vr7W1tbHx8eysrKdnZ3p6enk5OTR0dG7u7u3t7ejo6PY2Njh4eHf39/T09PExMSvr6+goKCqqqqnp6e4uLgcLY/OAAAAnklEQVRIx+3RSRLDIAxE0QYhAbGZPNu5/z0zrXHiqiz5W72FqhqtVuuXAl3iOV7iPV/iSsAqZa9BS7YOmMXnNNX4TWGxRMn3R6SxRNgy0bzXOW8EBO8SAClsPdB3psqlvG+Lw7ONXg/pTld52BjgSSkA3PV2OOemjIDcZQWgVvONw60q7sIpR38EnHPSMDQ4MjDjLPozhAkGrVbr/z0ANjAF4AcbXmYAAAAASUVORK5CYII=">
        </fe-cell> 
      </fe-group>

      <fe-group title="折叠">
        <fe-cell
          title="折叠咯"
          is-link
          :border-intent="false"
          :arrow-direction="showContent001 ? 'up' : 'down'"
          @click.native="showContent001 = !showContent001">
        </fe-cell>
      
        <template v-if="showContent001">
          <cell-box :border-intent="false" class="sub-item" is-link>content 001</cell-box>
          <cell-box class="sub-item" is-link>content 001</cell-box>
          <cell-box class="sub-item" is-link>content 001</cell-box>
        </template>

        <fe-cell
          title="动画效果"
          is-link
          :border-intent="false"
          :arrow-direction="showContent004 ? 'up' : 'down'"
          @click.native="showContent004 = !showContent004"></fe-cell>
          <p class="slide" :class="showContent004?'animate':''">blablabla...<br/>blablabla...<br/>blablabla...<br/>blablabla...</p>
      </fe-group>
      <fe-group title="带连接的">
        <fe-cell title="标题文字" value="说明文字" is-link to="/"></fe-cell>
        <fe-cell title="去诺诺网" is-link link="http://jss.com.cn" inline-desc='去诺诺网'></fe-cell>
        <fe-cell title="去福元网" is-link link="http://ifuyuan.wang" inline-desc='福元网'></fe-cell>
      </fe-group>
    </div>
  </div>
</template>

<script>
  export default{
    data () {
      return {
        showContent001: false,
        showContent004: false,
      }
    },
  }
</script>
<style scoped lang="less">
  .sub-item {
    color: #888;
  }
  .slide {
    padding: 0 20px;
    overflow: hidden;
    max-height: 0;
    transition: max-height .5s cubic-bezier(0, 1, 0, 1) -.1s;
  }
  .animate {
    max-height: 9999px;
    transition-timing-function: cubic-bezier(0.5, 0, 1, 0);
    transition-delay: 0s;
  }
</style>