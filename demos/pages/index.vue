<template>
  <div class="page">
    <div class="page__hd">
      <i class="cell-icon iconfont feui-feui"></i>
      <h1 class="page__title">Feui <span class="version">V{{version}}</span></h1>
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
import { navs } from "../router/index.js";
const version = process.env.VERSION || require("../../package.json").version;

export default {
  data() {
    return {
      navs,
      keyword: "",
      componentList: [],
      version: version
    };
  },
  mounted() {
    let debug = process.env.NODE_ENV === "development";
    if (!debug) {
      // 生产环境，及线上演示时不显示未完成组件项
      let tempNavs = [];
      navs.map(navGroup => {
        navGroup.navItems = navGroup.navItems.filter(
          item => item.status !== "todo"
        );
        tempNavs = tempNavs.concat(navGroup);
      });
      this.navs = tempNavs;
    }

    navs.map(navGroup => {
      this.componentList = this.componentList.concat(navGroup.navItems);
    });
  },

  computed: {
    filterResult() {
      return this.componentList.filter(value =>
        new RegExp(this.keyword, "i").test(value.name)
      );
    }
  }
};
</script>

<style>

</style>

<style scoped lang="less">
.logo {
  display: block;
  margin: 0 auto;
  width: 75px;
}
.version{    
  font-size: 12px;
  vertical-align: middle;
  color: #41b883;
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
.feui-feui {
  font-size: 65px;
  text-align: center;
}
</style>
