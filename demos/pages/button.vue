<template>
  <div class="page">
    <fe-header slot="header" style="width:100%;position:absolute;left:0;top:0;z-index:100;" @on-click-back='clickBack' :left-options="{preventGoBack: true}" >button</fe-header>
    <div class="fe-content">
        <div style="margin:10px;">
          <divider>iOS Gradients</divider>
          <div class="buttons-big">
            <fe-button :gradients="['#1D62F0', '#19D5FD']">iOS Gradients</fe-button>
          </div>
          <divider>默认</divider>
          <fe-button>submit</fe-button>
          <fe-button type="primary">primary</fe-button>
          <fe-button type="warn">Delete</fe-button>

          <divider>link</divider>
          <fe-button type="primary" link="/demo">Go to demo list</fe-button>
          <fe-button type="default" link="BACK">Back</fe-button>

          <divider>action type</divider>
          <fe-button type="primary" action-type="button">submit</fe-button>
          <fe-button type="warn" action-type="reset">reset</fe-button>

          <divider>loading</divider>
          <fe-button type="default" show-loading>submit</fe-button>
          <fe-button type="primary" show-loading>submit</fe-button>
          <fe-button type="warn" show-loading>submit</fe-button>

          <divider>小按钮</divider>
          <fe-button mini>submit</fe-button>
          <fe-button mini type="primary">primary</fe-button>
          <fe-button mini type="warn">Delete</fe-button>
          <br>
          <fe-button mini plain>submit</fe-button>
          <fe-button mini plain type="primary">primary</fe-button>

          <divider>plain</divider>
          <fe-button plain>submit</fe-button>
          <fe-button plain type="primary">primary</fe-button>

          <divider>自定义样式</divider>
          <fe-button plain type="primary" style="border-radius:99px;">primary</fe-button>
          <fe-button plain type="primary" class="custom-primary-red">primary</fe-button>

          <divider>不可用状态</divider>
          <fe-button disabled>disable submit</fe-button>
          <fe-button type="primary" disabled>disable primary</fe-button>
          <fe-button type="warn" disabled>disable Delete</fe-button>

          <fe-button mini disabled>disable mini submit</fe-button>
          <fe-button mini type="primary" disabled>disable mini primary</fe-button>
          <fe-button mini type="warn" disabled>disable mini Delete</fe-button>

          <fe-button plain disabled>disable plain</fe-button>
          <fe-button plain type="primary" disabled>disable plain primary</fe-button>

          <divider>use :text and :disabled</divider>
          <fe-button :text="submit001" :disabled="disable001" @click.native="processButton001" type="primary"></fe-button>
          <divider>和flexbox一起使用1</divider>
          <flexbox :gutter="0"> 
            <flexbox-item :span="2" style='text-align: center;'>
              <img src="https://m.axnsc.com/Contents/images/Shopping-2.png" alt="" style='width:20px'>
              <p style='font-size: 10px;margin-top: -5px;color: #808185;'>购物车</p>
            </flexbox-item>
            <flexbox-item>
              <fe-button type="primary" style="border-radius:0;background:#FE8604;">加入购物车</fe-button>
            </flexbox-item>
            <flexbox-item>
              <fe-button type="warn" style="border-radius:0;background:#FF3C25;">立即购买</fe-button>
            </flexbox-item>
          </flexbox>
          <divider>和flexbox一起使用2</divider>
          <flexbox>
            <flexbox-item>
              <fe-button type="primary">primary</fe-button>
            </flexbox-item>
            <flexbox-item>
              <fe-button type="warn">Delete</fe-button>
            </flexbox-item>
          </flexbox>
          <divider>和flexbox一起使用3</divider>
          <flexbox>
            <flexbox-item>
              <fe-button type="default">default</fe-button>
            </flexbox-item>
            <flexbox-item>
              <fe-button type="primary">primary</fe-button>
            </flexbox-item>
            <flexbox-item>
              <fe-button type="warn">Delete</fe-button>
            </flexbox-item>
          </flexbox>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      submit001: 'click me',
      disable001: false
    }
  },
  methods:{
    clickBack () {
      this.$router.push({path:'/'});
    },
    change (value) {
      console.log('change:', value)
    },
    processButton001 () {
      this.submit001 = 'processing'
      this.disable001 = true
    }
  }
}
</script>
<style scoped lang="less">
  .buttons-big {
    display: block;
    margin: 10px auto;
  }
  .buttons-plain {
    display: block;
    width: 60%;
    margin: 10px auto;
  }

  .buttons-mini {
    display: block;
    width: 60%;
    margin: 10px auto;
  }
</style>