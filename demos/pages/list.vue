<template>
  <div class="page">
    <fe-header slot="header" style="width:100%;position:absolute;left:0;top:0px;z-index:100;">List</fe-header>
    <div class="fe-content">
      <fe-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
        <div
          v-for="(item, index) in items"
          :key="index"
          @click="onItemClick(index)"
          class="item"
          :class="{'item-stable': index % 2 == 0}"
        >{{ item }}</div>
      </fe-list>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      items: [],
      loading: false,
      finished: false
    };
  },

  mounted() {
    for (let i = 1; i <= 20; i++) {
      // this.items.push(i + " - With You, Just Do IT.");
    }
  },

  methods: {
    onLoad() {
      console.log(1)
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          this.items.push(this.items.length + 1 + " - With You, Just Do IT.");
        }
        // 加载状态结束
        this.loading = false;

        // 数据全部加载完成
        if (this.items.length >= 40) {
          this.finished = true;
        }
      }, 500);
      console.log("--**");
    },
    onItemClick(index) {
      console.log(index);
    }
  }
};
</script>

<style scoped lang="less">
.page,
.fe-content {
  height: 100%;
  position: relative;
  .fe-list {
    overflow: hidden;
  }
  .item {
    box-sizing: border-box;
    font-size: 14px;
    line-height: 14px;
    color: #444;
    min-height: 50px;
    position: relative;
    z-index: 2;
    display: block;
    margin: -1px;
    padding: 16px;
    background-color: #fff;
  }
  .item.item-stable {
    border-color: #b2b2b2;
    background-color: #f5f5f5;
    color: #444;
  }
}
</style>
