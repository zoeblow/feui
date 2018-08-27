<template>
  <div class="page">
    <fe-header slot="header" style="width:100%;position:absolute;left:0;top:0;z-index:100;">Checker</fe-header>
    <div class="fe-content">
      <divider>单选,默认不选</divider> 
      <div class="box">
        <fe-checker v-model="demo1" default-item-class="demo1-item" selected-item-class="demo1-item-selected">
          <fe-checker-item value="1">壹</fe-checker-item>
          <fe-checker-item value="2">貮</fe-checker-item>
          <fe-checker-item value="3">叁</fe-checker-item>
          <fe-checker-item value="4">肆</fe-checker-item>
          <fe-checker-item value="5">伍</fe-checker-item>
        </fe-checker>
        <br>
          <span>当前选择值: {{ demo1 }}</span>
        <br/>
      </div>


      <divider>单选：值为Object类型</divider>
      <div class="box">
        <fe-checker v-model="demo11" default-item-class="demo1-item" selected-item-class="demo1-item-selected">
          <fe-checker-item :value="item" v-for="(item, index) in items1" :key="index">{{item.value}}</fe-checker-item>
        </fe-checker>
        <br>
        <span>当前选择值: {{demo11}}</span>
        <br>
        <br>
        <fe-checker v-model="demo12" default-item-class="demo1-item" selected-item-class="demo1-item-selected">
          <fe-checker-item :value="item" v-for="(item, index) in items1" :key="index">{{item.value}}</fe-checker-item>
        </fe-checker>
        <br>
        <span>当前选择值: {{demo12}}</span>
        <br>
      </div>


      <divider>多选：值为Object类型</divider>
      <div class="box">
        <fe-checker v-model="demo21" type="checkbox" default-item-class="demo1-item" selected-item-class="demo1-item-selected">
          <fe-checker-item :value="item" v-for="(item, index) in items1" :key="index">{{item.value}}</fe-checker-item>
        </fe-checker>
        <br>
        <span>当前选择值: {{demo21}}</span>
        <br>
        <br>
        <fe-checker v-model="demo23" type="checkbox" default-item-class="demo1-item" selected-item-class="demo1-item-selected" :max="2">
          <fe-checker-item :value="item" v-for="(item, index) in items1" :key="index">{{item.value}}</fe-checker-item>
        </fe-checker>
        <br>
        <span>当前选择值: {{demo23}}</span>
        <br>
      </div>


      <divider>默认值</divider>
      <div class="box">
        <fe-checker v-model="demo2" default-item-class="demo2-item" selected-item-class="demo2-item-selected">
          <fe-checker-item value="1">1</fe-checker-item>
          <fe-checker-item value="2">2</fe-checker-item>
          <fe-checker-item value="3">3</fe-checker-item>
        </fe-checker>
        <br>
        <span>当前选择值:{{demo2}}</span>
        <br>
      </div>

      <divider>自定义样式</divider>
      <div class="box">
        <fe-checker v-model="demo3" default-item-class="demo3-item" selected-item-class="demo3-item-selected">
          <fe-checker-item value="FD6E0E">
            <img src="http://temp.im/80x45/FD6E0E/ffffff" alt="">
          </fe-checker-item>
          <fe-checker-item value="e71e18">
            <img src="http://temp.im/80x45/E71E18/ffffff" alt="">
          </fe-checker-item>
          <fe-checker-item value="453221">
            <img src="http://temp.im/80x45/45322E/ffffff" alt="">
          </fe-checker-item>
        </fe-checker>
        <br>
        <span>当前选择值:{{demo3}}</span>
        <br>
      </div>


      <divider>使用弹出</divider>
      <fe-group>
        <fe-cell title="选择套餐" :value="demo4" is-link @click.native="showPopup=true"></fe-cell>
      </fe-group>
      <div v-transfer-dom>
        <fe-popup v-model="showPopup" class="checker-popup">
          <div style="padding:10px 10px 40px 10px;">
            <p style="padding: 5px 5px 5px 2px;color:#888;">选择套餐</p>
            <fe-checker
            v-model="demo4"
            default-item-class="demo4-item"
            selected-item-class="demo4-item-selected"
            disabled-item-class="demo4-item-disabled">
              <fe-checker-item value="云和天" @on-item-click="onItemClick">云和天</fe-checker-item>
              <fe-checker-item value="蝶和花" @on-item-click="onItemClick">蝶和花</fe-checker-item>
              <fe-checker-item value="我和你" @on-item-click="onItemClick">我和你</fe-checker-item>
              <fe-checker-item value="全家福" disabled @on-item-click="onItemClick">全家福</fe-checker-item>
            </fe-checker>
          </div>
        </fe-popup>
      </div>

      <divider>单选：常见demo {{demo5}}</divider>
      <fe-checker
      v-model="demo5"
      default-item-class="demo5-item"
      selected-item-class="demo5-item-selected"
      >
        <fe-checker-item v-for="i in [1, 2, 3]" :key="i" :value="i">￥{{i*300}}</fe-checker-item>
      </fe-checker>
      <br/>
      <divider>多选：常见demo {{demo6}}</divider>
      <fe-checker
        v-model="demo6"
        type="checkbox"
        default-item-class="demo5-item"
        selected-item-class="demo5-item-selected"
      >
        <fe-checker-item v-for="i in [1, 2, 3]" :key="i" :value="i">{{['good', 'nice','awesome'][i - 1]}}</fe-checker-item>
      </fe-checker>


    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      items1: [
        {
          key: "1",
          value: "A"
        },
        {
          key: "2",
          value: "B"
        },
        {
          key: "3",
          value: "C"
        }
      ],
      demo1: "",
      demo11: null,
      demo12: { key: "2", value: "B" },
      demo21: null,
      demo22: [{ key: "2", value: "B" }],
      demo23: null,
      demo2: "2",
      demo3: "",
      demo4: '云和天',
      showPopup: false,
      demo5: 1,
      demo6: [2, 3],
    };
  },
  methods: {
    onItemClick (value, disabled) {
      console.log(value, disabled)
      if (!this.disabled) {
        this.showPopup = false
      }
    }
  },
};
</script>
<style scoped lang="less">
.box {
  padding: 0 15px;
}
.demo1-item {
  border: 1px solid #d3d4d5;
  padding: 5px 15px;
}
.demo1-item-selected {
  border: 1px solid #1990fa;
}
.demo2-item {
  width: 40px;
  height: 40px;
  border: 1px solid #ccc;
  display: inline-block;
  border-radius: 50%;
  line-height: 40px;
  text-align: center;
}
.demo2-item-selected {
  border-color: #1990fa;
}
.demo3-item {
  padding: 5px 5px;
  font-size: 0;
}
.demo3-item-selected {
  outline: 1px solid #8B8AEE;
}
.demo4-item {
  background-color: #ddd;
  color: #222;
  font-size: 14px;
  padding: 5px 10px;
  margin-right: 10px;
  line-height: 18px;
  border-radius: 15px;
}
.demo4-item-selected {
  background-color: #e71e18;
  color: #fff;
}
.demo4-item-disabled {
  color: #999;
}
.demo5-item {
  width: 100px;
  height: 26px;
  line-height: 26px;
  text-align: center;
  border-radius: 3px;
  border: 1px solid #ccc;
  background-color: #fff;
  margin-right: 6px;
}
.demo5-item-selected {
  background: #ffffff url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAALCAMAAACecocUAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QTZDOEJBQ0E3NkIxMTFFNEE3MzJFOUJCMEU5QUM0QkIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QTZDOEJBQ0I3NkIxMTFFNEE3MzJFOUJCMEU5QUM0QkIiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpBNkM4QkFDODc2QjExMUU0QTczMkU5QkIwRTlBQzRCQiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpBNkM4QkFDOTc2QjExMUU0QTczMkU5QkIwRTlBQzRCQiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PnMGp3kAAAAJUExURf9KAP///////4Jqdw0AAAADdFJOU///ANfKDUEAAAAuSURBVHjaTMpBDgAABAPB5f+PlhLUpZMWuQcYMWLEyDN4ymqa5KS4+3G+KAEGACQmAGlKzr56AAAAAElFTkSuQmCC) no-repeat right bottom;
  border-color: #ff4a00;
}
</style>
