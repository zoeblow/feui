<template>
  <div class="page">
    <div class="page__hd">
      <img :src="logoImg" alt="" class="logo">
      <h1 class="page__title">Feui</h1>
    </div>
    <fe-group :title="navGroup.groupTitle" v-for="navGroup in navs" :key="navGroup.index">
      <fe-cell v-for="nav in navGroup.navItems" :key="nav.name" :link="nav.path" is-link :title="nav.name" >
        <i class="cell-icon iconfont" :class="'feui-' + nav.icon" slot="icon"></i>
        <p slot="inline-desc" style="color: #b3b3b3">{{nav.description}}</p>
      </fe-cell>
    </fe-group>
  </div>
</template>

<script>
  import { navs } from '../route/index.js'
  import logoImg from '../assets/images/logo.png'

  export default {
    data () {
      return {
        logoImg,
        navs,
        keyword: '',
        componentList: []
      }
    },

    mounted () {
      let debug = process.env.NODE_ENV === 'development'
      if (!debug) {
        // 生产环境，及线上演示时不显示未完成组件项
        let tempNavs = []
        navs.map(navGroup => {
          navGroup.navItems = navGroup.navItems.filter(item => item.status !== 'todo')
          tempNavs = tempNavs.concat(navGroup)
        })
        this.navs = tempNavs
      }

      navs.map(navGroup => {
        this.componentList = this.componentList.concat(navGroup.navItems)
      })
    },

    computed: {
      filterResult () {
        return this.componentList.filter(value => new RegExp(this.keyword, 'i').test(value.name))
      }
    }
  }
</script>

<style scoped lang="less">
  .logo {
    display: block;
    margin: 0 auto;
    width: 75px;
  }

  .page__hd {
    padding: 40px;

    .page__title {
      text-align: center;
      font-size: 20px;
      font-weight: 400;
    }
  }

  .page {
    margin-bottom: 0;
  }

  .cell-icon {
    display: block;
    margin-right: 5px;
    color: #41b883;
    overflow: hidden;
    font-size: 20px;
  }

  .footer-copyright {
    margin: 40px 0 20px;
  }
  .nuim-tap-active{
    // align-items: baseline;
  }
</style>
