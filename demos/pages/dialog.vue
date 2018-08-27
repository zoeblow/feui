<template>
  <div class="page page-with-padding">
    <fe-header slot="header" style="width:100%;position:absolute;left:0;top:0;z-index:100;">Dialog</fe-header>
    <div class="fe-content">
      <div style="margin:10px;">
        <divider>Dialog</divider> 
        <fe-button type="primary" @click.native="showDialog('ios', '窗口标题')">iOS Dialog 有标题</fe-button>
        <fe-button type="primary" @click.native="showDialog('ios')">iOS Dialog 无标题</fe-button>
        <fe-button type="primary" @click.native="showDialog('android', '窗口标题')">Android Dialog 有标题</fe-button>
        <fe-button type="primary" @click.native="showDialog('android')">Android Dialog 无标题</fe-button>
        <divider>Alert</divider> 
        <fe-button type="primary" @click.native="showalert('ios', '真有标题')">iOS Alert 有标题</fe-button>
        <fe-button type="primary" @click.native="showalert()">iOS Alert 无标题</fe-button>
        <fe-button type="primary" @click.native="showalert('android','真有标题')">Android Alert 有标题 </fe-button>
        <fe-button type="primary" @click.native="showalert('android')">Android Alert 无标题</fe-button>
        <br>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    showalert(skin, title) {
      Dialog.alert({
        title: title,
        skin: skin,
        message: "弹窗内容",
        confirmButtonText: "确实"
      }).then(() => {
        console.log("close");
      });
    },
    showDialog(skin, title) {
      console.log(skin, title);
      Dialog.confirm({
        title: title,
        skin: skin,
        message: "弹窗内容"
      })
      .then(() => {
        // on confirm
        console.log("confirm");
      })
      .catch(() => {
        // on cancel
        console.log("cancel");
      });

      // Dialog({
      //   title: title,
      //   message: 'hello world',
      //   skin
      // },this.doSomething)
    }
  }
};
</script>
