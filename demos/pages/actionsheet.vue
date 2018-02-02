<template>
  <div class="page page-with-padding">
    <fe-header slot="header" style="width:100%;position:absolute;left:0;top:0;z-index:100;">Actionsheet</fe-header>
    <div class="fe-content">
      <fe-group>
        <fe-switch title="基本使用" v-model="show1"></fe-switch>
        <fe-switch title="Android样式" v-model="show7"></fe-switch>
        <fe-switch title="显示取消菜单" v-model="show2"></fe-switch>
        <fe-switch title="数组自定义菜单" v-model="show5"></fe-switch>
      </fe-group>

      <fe-group >
        <fe-switch title="点击遮罩层不自动关闭" v-model="show4"></fe-switch>
      </fe-group>

      <fe-group>
        <fe-switch title="显示提示文字" v-model="show3"></fe-switch>
        <fe-switch title="使用headerSlot" v-model="show6"></fe-switch>
        <fe-switch title="不自动关闭" v-model="show8"></fe-switch>
      </fe-group>
      <fe-actionsheet v-model="show4" :menus="menus1" :close-on-clicking-mask="false" show-cancel @on-click-mask="console('on click mask')"></fe-actionsheet>
      <fe-actionsheet v-model="show1" :menus="menus1" @on-click-menu="click"></fe-actionsheet>
      <fe-actionsheet v-model="show2" :menus="menus2" @on-click-menu="click" show-cancel></fe-actionsheet>
      <fe-actionsheet v-model="show3" :menus="menus3" @on-click-menu="click" @on-click-menu-delete="onDelete" show-cancel></fe-actionsheet>
      <fe-actionsheet v-model="show5" :menus="menus5" show-cancel @on-click-menu="click5"></fe-actionsheet>
      <fe-actionsheet v-model="show6" :menus="menus1">
        <p slot="header" v-html="headerSlot"></p>
      </fe-actionsheet>
      <fe-actionsheet v-model="show7" :menus="menus7" theme="android" @on-click-menu="click">
      </fe-actionsheet>
      <div v-transfer-dom>
        <fe-actionsheet v-model="show8" :menus="menus8" @on-click-menu="demo8doClose" :close-on-clicking-mask="false" :close-on-clicking-menu="false">
        </fe-actionsheet>
      </div>
    </div>
  </div>
</template>
<script>
var tips =
  '确定咩?<br/><span style="color:#666;font-size:12px;">删除后就无法撤消了哦</span>';
export default {
  data() {
    return {
      show1: false,
      show2: false,
      show3: false,
      show4: false,
      show5: false,
      show6: false,
      show7: false,
      show8: false,
      headerSlot: tips,
      menus1: {
        menu1: "分享给朋友",
        menu2: "分享到朋友圈"
      },
      menus2: {
        menu1: "拍照",
        menu2: "从相册选择"
      },
      menus3: {
        "title.noop": tips,
        delete: '<span style="color:red">删除</span>'
      },
      menus5: [
        {
          label: tips,
          type: "info"
        },
        {
          label: "Primary",
          type: "primary",
          value: "primary"
        },
        {
          label: "Warn",
          type: "warn"
        },
        {
          label: "Disabled",
          type: "disabled"
        },
        {
          label: "Default"
        }
      ],
      menus7: {
        menu1: "蒸羊羔",
        menu2: "蒸熊掌",
        menu3: "蒸鹿尾儿",
        menu4: "一盆米饭"
      },
      menus8: {
        menu1: "点我关闭",
        menu2: "点我关闭"
      }
    };
  },
  methods: {
    demo8doClose() {
      Toast.loading({
        duration: 2000,
        message: "关闭成功！"
      });
      setTimeout(() => {
        this.show8 = false;
      }, 2000);
    },
    console(msg) {
      console.log(msg);
    },
    click(key) {
      console.log(key);
    },
    click5(key, item) {
      console.log(key, item);
    },
    onDelete() {
      Toast({
        duration: 2000,
        message: "删除成功"
      });
      setTimeout(() => {
        this.showToast = false;
      }, 2000);
    }
  }
};
</script>
