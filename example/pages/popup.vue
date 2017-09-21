<template>
  <div class="page">
    <fe-header slot="header" style="width:100%;position:absolute;left:0;top:0;z-index:100;">Popup</fe-header>
    <div class="fe-content">
      <fe-group>
        <fe-switch title="Default popup" v-model="show"></fe-switch>
        <fe-switch title="全屏 popup" v-model="show1"></fe-switch>
        <fe-switch title="with a Scroller" v-model="show2"></fe-switch>
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
      <fe-popup v-model="show2" height="200px" @on-first-show="resetScroller">
        <fe-pullrefresh height="200px" ref="pullScroll" v-model="status"  style="background-color:ghostwhite">
          <div class="feui-box-demo">
              <li v-for="i of 10" class="nuim-1px-b" :key="i">{{i}}</li>
          </div>
        </fe-pullrefresh>
      </fe-popup>
  </div>
</template>

<script>
import Toast from '../../src/components/toast'
  export default {
    data () {
      return {
        show: false,
        show1: false,
        show2: false,
        show3: false,
        show4: false,
        show5: false,
        show6: false,
        title6: '默认空的',
        value6: [],
        showToast:false,
        show7: false,
        show8: false,
        show9: false,
        show10: false,
        show11: false,
        status:true
      }
    },
    methods: {
      resetScroller () {
        this.$nextTick(() => {
          this.$refs.scroller.reset()
        })
      },
      log (str) {
        console.log(str)
      }
    },
    watch: {
      show10 (val) {
        if (val) {
          setTimeout(() => {
            this.show10 = false
          }, 1000)
        }
      },
      showToast(s){
        if(s){
          Toast({
            duration: 2000,
            message: '操作成功',
            type: 'success'
          });
          setTimeout(() => {
            this.showToast = false;
          }, 2000)
        }
      }
    }
  }
</script>

<style scoped lang="less">
  .popup0 {
  padding-bottom:15px;
  height:200px;
}
.popup1 {
  width:100%;
  height:100%;
}
.popup2 {
  padding-bottom:15px;
  height:400px;
}
.position-vertical-demo {
  background-color: #ffe26d;
  color: #000;
  text-align: center;
  padding: 15px;
}
.position-horizontal-demo {
  position: relative;
  height: 100%;
  .nuim-close {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%) scale(4);
    color: #000;
  }
}
  
</style>
