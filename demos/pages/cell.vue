<template>
  <div class="page">
    <fe-header slot="header" style="width:100%;position:absolute;left:0;top:0;z-index:100;">Cell</fe-header>
    <div class="fe-content">
      <fe-group>
        <fe-cell title="我的账号" value="安全保护" @click.native="onClick"></fe-cell>
        <fe-cell title="余额" @click.native="onClick" :is-loading="!money" :value="money"></fe-cell>
        <fe-cell title="转账" disabled is-link></fe-cell>
      </fe-group>
      <fe-group title="is-link 显示右边箭头">
        <fe-cell is-link>
          <span slot="title" style="color:green;"><span style="vertical-align:middle;">信息</span><fe-badge text="1"></fe-badge></span>
        </fe-cell>
        <fe-cell title="通知" is-link></fe-cell>
        <fe-cell title="隐私" is-link></fe-cell>
        <fe-cell title="通用" is-link>
          <img slot="icon" width="20" style="display:block;margin-right:5px;" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAMAAABgZ9sFAAAAVFBMVEXx8fHMzMzr6+vn5+fv7+/t7e3d3d2+vr7W1tbHx8eysrKdnZ3p6enk5OTR0dG7u7u3t7ejo6PY2Njh4eHf39/T09PExMSvr6+goKCqqqqnp6e4uLgcLY/OAAAAnklEQVRIx+3RSRLDIAxE0QYhAbGZPNu5/z0zrXHiqiz5W72FqhqtVuuXAl3iOV7iPV/iSsAqZa9BS7YOmMXnNNX4TWGxRMn3R6SxRNgy0bzXOW8EBO8SAClsPdB3psqlvG+Lw7ONXg/pTld52BjgSSkA3PV2OOemjIDcZQWgVvONw60q7sIpR38EnHPSMDQ4MjDjLPozhAkGrVbr/z0ANjAF4AcbXmYAAAAASUVORK5CYII=">
        </fe-cell>
      </fe-group>
      <fe-group label-width="5em" title="Align-对其方式">
        <fe-cell primary="content" title="default" value="妈妈说标题要长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长"></fe-cell>
        <fe-cell title="flex-start" align-items="flex-start" value="妈妈说标题要长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长"></fe-cell>
      </fe-group>

      <fe-group title="折叠">
        <fe-cell
        title="Title 001"
        is-link
        :border-intent="false"
        :arrow-direction="showContent001 ? 'up' : 'down'"
        @click.native="showContent001 = !showContent001"></fe-cell>

        <template v-if="showContent001">
          <cell-box :border-intent="false" class="sub-item" is-link>content 001</cell-box>
          <cell-box class="sub-item" is-link>content 001</cell-box>
          <cell-box class="sub-item" is-link>content 001</cell-box>
        </template>

        <fe-cell
        title="Title 002"
        is-link
        :border-intent="false"
        :arrow-direction="showContent002 ? 'up' : 'down'"
        @click.native="showContent002 = !showContent002"></fe-cell>

        <!-- <template v-if="showContent002">
          <cell-form-preview :border-intent="false" :list="list"></cell-form-preview>
        </template> -->

        <fe-cell
        title="Title 003"
        is-link
        :border-intent="false"
        :arrow-direction="showContent003 ? 'up' : 'down'"
        @click.native="showContent003 = !showContent003"></fe-cell>

        <template v-if="showContent003">
          <cell-box :border-intent="false" class="sub-item">内容 003</cell-box>
        </template>

        <fe-cell
          title="有动画的"
          is-link
          :border-intent="false"
          :arrow-direction="showContent004 ? 'up' : 'down'"
          @click.native="showContent004 = !showContent004"></fe-cell>
          <p class="slide" :class="showContent004?'animate':''">嫂嫂，武二有话说.<br/>嫂嫂，武二有话说.<br/>嫂嫂，武二有话说.<br/>嫂嫂，武二有话说.</p>
        </fe-group>

      <fe-group>
        <fe-cell title="通知" value="已开启"></fe-cell>
      </fe-group>

      <fe-group title="使用Slot插槽自定义样式">
        <fe-cell title="Slot 插槽">
          <div>
            <span style="color: green">我是自定义内容</span>
          </div>
        </fe-cell>
      </fe-group>

      <fe-group title="带连接的">
        <fe-cell title="标题文字" value="404" is-link link="/404"></fe-cell>
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
        money: null,
        showContent001: false,
        showContent002: false,
        showContent003: false,
        showContent004: false
      }
    },
    mounted () {
      setTimeout(() => {
        this.money = -1024
      }, 2000)
    },
    methods: {
      onClick () {
        console.log('on click')
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