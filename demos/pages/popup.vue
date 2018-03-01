<template>
  <div class="page">
    <fe-header slot="header" style="width:100%;position:absolute;left:0;top:0;z-index:100;">Popup</fe-header>
    <div class="fe-content">
      <fe-group>
        <fe-switch title="Default popup" v-model="show"></fe-switch>
        <fe-switch title="全屏弹出" v-model="show1"></fe-switch>
        <fe-switch title="多弹出 (first)" v-model="show3"></fe-switch>
        <fe-switch title="with a Scroller" v-model="show2"></fe-switch>
        <fe-switch title="禁用点击mask关闭" v-model="show5"></fe-switch>
      </fe-group>
    </div>
    <fe-popup v-model="show" @on-hide="log('hide')" @on-show="log('show')">
      <div class="popup0">
        <fe-group>
          <fe-switch title="另一个 switch" v-model="show"></fe-switch>
          <fe-switch title="显示 Toast" v-model="showToast"></fe-switch>
        </fe-group>
      </div>
    </fe-popup>
    <fe-popup v-model="show1" height="100%">
      <div class="popup1">
        <fe-switch title="另一个 switch" v-model="show1"></fe-switch>
      </div>
    </fe-popup>
    <fe-popup v-model="show3">
      <div class="popup2">
        <fe-group>
          <fe-switch title="多弹出(first)" v-model="show3"></fe-switch>
          <fe-switch title="多弹出(second)" v-model="show4"></fe-switch>
        </fe-group>
        这是 first 弹出
      </div>
    </fe-popup>
  
    <fe-popup v-model="show4">
      <div class="popup2">
        <fe-group>
          <fe-switch title="多弹出(second)" v-model="show4"></fe-switch>
        </fe-group>
        这是 second 弹出
      </div>
    </fe-popup>

    <fe-popup v-model="show2" height="250px" style='overflow:hidden;'  @on-first-show="resetScroller">
      <fe-scroll class="page-content" :on-refresh="onRefresh" :on-infinite="onInfinite">
        <div v-for="(item, index) in items" :key="index" @click.native="onItemClick(index)" class='item' :class="{'item-stable': index % 2 == 0}">
          {{ item }}
        </div>
        <div v-if="infiniteCount >= 2" slot="infinite" class="text-center">没有更多数据</div>
      </fe-scroll>
    </fe-popup>
    <fe-popup v-model="show5" :hide-on-blur=false>
      <div class="popup2">
        <fe-group>
          <fe-switch title="禁用点击mask关闭" v-model="show5"></fe-switch>
        </fe-group>
        Mask不可点
      </div>
    </fe-popup>

    <fe-group>
      <fe-switch title="背景透明" v-model="show7"></fe-switch>
    </fe-group>
    <fe-popup v-model="show7" height="270px" is-transparent>
      <div style="width: 95%;background-color:#fff;height:250px;margin:0 auto;border-radius:5px;padding-top:10px;">
        <fe-group>
        <fe-cell title="产品名称" value="比特币1个"></fe-cell>
        <fe-cell title="金额" value="￥10.24"></fe-cell>
        </fe-group>
        <div style="padding:20px 15px;">
        <fe-button type="primary">支付</fe-button>
        <fe-button @click.native="show7 = false"> 取消</fe-button>
        </div>
      </div>
    </fe-popup>

    <fe-group title='设置位置'>
      <fe-switch title="左边(100% width)" v-model="show8"></fe-switch>
      <fe-switch title="右边" v-model="show9"></fe-switch>
      <fe-switch title="上面(没有mask)" v-model="show10"></fe-switch>
      <fe-switch title="下面" v-model="show11"></fe-switch>
    </fe-group>

    <fe-popup v-model="show8" position="left" width="100%">
      <div class="position-horizontal-demo">
        <span class="nuim-close" @click="show8 = false"></span>
      </div>
    </fe-popup>

    <fe-popup v-model="show9" position="right">
      <div style="width:200px;">
      </div>
    </fe-popup>

    <fe-popup v-model="show10" position="top" :show-mask="false">
      <div class="position-vertical-demo">
        我在顶部咯. 1s后消失.
      </div>
    </fe-popup>

    <fe-popup v-model="show11" position="bottom">
      <div class="position-vertical-demo">
        我在底下呢
      </div>
    </fe-popup>
    
  </div>
</template>

<script>
export default {
  mounted() {
    for (let i = 1; i <= 20; i++) {
      this.items.push(i + " - With You, Just Do IT.");
    }
    this.top = 1;
    this.bottom = 20;
  },
  data() {
    return {
      show: false,
      show1: false,
      show2: false,
      show3: false,
      show4: false,
      show5: false,
      show6: false,
      title6: "默认空的",
      value6: [],
      showToast: false,
      show7: false,
      show8: false,
      show9: false,
      show10: false,
      show11: false,
      status: true,
      items: [],
      infiniteCount: 0,
      hasHeader: false
    };
  },
  methods: {
    resetScroller() {
      this.$nextTick(() => {
        this.$refs.scroller.reset();
      });
    },
    log(str) {
      console.log(str);
    },
    onRefresh(done) {
      setTimeout(() => {
        let start = this.top - 1;
        for (let i = start; i > start - 10; i--) {
          this.items.splice(0, 0, i + " With You, Just Do CSS.");
        }
        this.top = this.top - 10;

        done();
      }, 1500);
    },

    onInfinite(done) {
      setTimeout(() => {
        if (this.infiniteCount < 2) {
          let start = this.bottom + 1;
          for (let i = start; i < start + 10; i++) {
            this.items.push(i + " With You, Just Do JS.");
          }
          this.bottom = this.bottom + 10;

          this.infiniteCount++;
        }

        done();
      }, 1500);
    },

    onItemClick(index) {
      console.log(index);
    }
  },
  watch: {
    show10(val) {
      if (val) {
        setTimeout(() => {
          this.show10 = false;
        }, 1000);
      }
    },
    showToast(s) {
      if (s) {
        Toast({
          duration: 2000,
          message: "操作成功"
        });
        setTimeout(() => {
          this.showToast = false;
        }, 2000);
      }
    }
  }
};
</script>

<style scoped lang="less">
.popup0 {
  padding-bottom: 15px;
  height: 200px;
}
.popup1 {
  width: 100%;
  height: 100%;
}
.popup2 {
  padding-bottom: 15px;
  height: 400px;
}
.position-vertical-demo {
  background-color: #2196F3;
  color: #000;
  text-align: center;
  padding: 15px;
}
.position-horizontal-demo {
  position: relative;
  height: 100%;
  .nuim-close {
    display: inline-block;
    vertical-align: middle;
    width: 24px;
    height: 24px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%) scale(4);
    color: #000;
    &:before, &:after {
      content: '';
      position: absolute;
      left: 0;
      top: 11px;
      width: 24px;
      height: 1px;
      background-color: currentColor;
      -webkit-transform: rotate(-45deg);
      transform: rotate(-45deg);
    }
    &:after {
      -webkit-transform: rotate(45deg);
      transform: rotate(45deg);
    }
  }
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
