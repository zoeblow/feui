<template>
  <div class="page page-with-padding">
    <fe-header slot="header" style="width:100%;position:absolute;left:0;top:0;z-index:100;">Actionsheet</fe-header>
    <div class="fe-content">
      <fe-group>
        <fe-switch title="基本使用" v-model="show1"></fe-switch>
        <fe-switch title="显示取消菜单" v-model="show2"></fe-switch>
        <fe-switch title="显示提示文字" v-model="show3"></fe-switch>
        <fe-switch title="使用数组定义菜单" v-model="show5"></fe-switch>
      </fe-group>
      <fe-group title="点击遮罩区域不自动关闭">
        <fe-switch title="基本使用" v-model="show4"></fe-switch>
      </fe-group>
    <fe-actionsheet v-model="show4" :menus="menus1" :close-on-clicking-mask="false" show-cancel></fe-actionsheet>
    <fe-actionsheet v-model="show1" :menus="menus1" @on-click-menu="click"></fe-actionsheet>
    <fe-actionsheet v-model="show2" :menus="menus2" @on-click-menu="click" show-cancel></fe-actionsheet>
    <fe-actionsheet v-model="show3" :menus="menus3" @on-click-menu="click" @on-click-menu-delete="onDelete" show-cancel></fe-actionsheet>
    <fe-actionsheet v-model="show5" :menus="menus5" show-cancel @on-click-menu="click"></fe-actionsheet>
    </div>
  </div>
</template>
<script>

export default {
  data () {
    return {
      show1: false,
      menus1: {
        menu1: '分享给朋友',
        menu2: '分享到朋友圈'
      },
      show2: false,
      menus2: {
        menu1: '拍照',
        menu2: '从相册选择'
      },
      show3: false,
      show4: false,
      show5: false,
      menus5: [{
        label: '确定咩?<br/><span style="color:#666;font-size:12px;">删除后就无法撤消了哦</span>',
        type: 'info'
      }, {
        label: 'Primary',
        type: 'primary',
        value: 'primary'
      }, {
        label: 'Warn',
        type: 'warn'
      }, {
        label: 'Disabled',
        type: 'disabled'
      }, {
        label: 'Default'
      }],
      showSuccess: false,
      menus3: {
        'title.noop': '确定咩?<br/><span style="color:#666;font-size:12px;">删除后就无法撤消了哦</span>',
        delete: '<span style="color:red">删除</span>'
      }
    }
  },
  methods: {
    click (key) {
      console.log(key)
    },
    onDelete () {
      this.showSuccess = true
    }
  }
}
</script>
