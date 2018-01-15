<template>
  <div class="page">
    <fe-header slot="header" style="width:100%;position:absolute;left:0;top:0px;z-index:100;">Scroll</fe-header>
    <div class="fe-content">
      <div class="scroll-page" >
        <fe-scroll class="page-content"
                :on-refresh="onRefresh"
                :on-infinite="onInfinite"
                :hasHeader="hasHeader">
          <div v-for="(item, index) in items" :key="index" @click.native="onItemClick(index)" class='item' :class="{'item-stable': index % 2 == 0}">
            {{ item }}
          </div>
          <div v-if="infiniteCount >= 2" slot="infinite" class="text-center">没有更多数据</div>
        </fe-scroll>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        items: [],
        infiniteCount: 0,
        hasHeader:true
      }
    },

    mounted() {
      for (let i = 1; i <= 20; i++) {
        this.items.push(i + ' - With You, Just Do IT.')
      }
      this.top = 1
      this.bottom = 20
    },

    methods: {
      onRefresh(done) {
        setTimeout(() => {
          let start = this.top - 1
          for (let i = start; i > start - 10; i--) {
            this.items.splice(0, 0, i + ' With You, Just Do CSS.')
          }
          this.top = this.top - 10;

          done()
        }, 1500)
      },

      onInfinite(done) {
        setTimeout(() => {
          if (this.infiniteCount < 2) {
            let start = this.bottom + 1
            for (let i = start; i < start + 10; i++) {
              this.items.push(i + ' With You, Just Do JS.')
            }
            this.bottom = this.bottom + 10;

            this.infiniteCount++
          }

          done()
        }, 1500)
      },

      onItemClick(index) {
        console.log(index)
      }
    }

  }
</script>

<style scoped lang="less">
.page,.fe-content{
  height: 100%;
  position: relative;
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
</style>
