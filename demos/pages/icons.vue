<template>
  <div class="page">
    <fe-header slot="header" style="width:100%;position:absolute;left:0;top:0;z-index:100;">Icons</fe-header>
    <div class="fe-content">
        <flexbox :gutter="0" wrap="wrap" class="icon-list-big">
          <flexbox-item :span="1/3" v-for="type in iconTypes" :key="type">
            <div class='feuicon-demo'>
              <fe-icons class="demo-icon-large" :type="type" :large="true"></fe-icons>
              <span class="label" v-text="type"></span>
            </div>
          </flexbox-item>
        </flexbox>
      <div class="icon-list-small">
        <fe-icons :type="type" v-for="type in iconTypes" :key="type"></fe-icons>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        iconTypes: [
          'infocircle',
          'icon',
          'success',
          'icon-info',
          'safesuccess',
          'fail',
          'scan',
          'search',
          'qrcode',
          'loading',
          'success-no-circle2',
          'success-circle',
          'map',
          'iconall143',
          'cancel',
          'Back',
          'icons',
          'step',
          'star',
          'seting',
          'prev',
          'next',
          'left',
          'right',
          'top',
          'bottom',
          'delect',
          'warn',
          'clear',
          'circle',
          'success-no-circle',
          'waiting',
          'upload-demo',
          'feui',
          'fy'
        ]
      }
    },
  }
</script>

<style scoped lang="less">
  .icon-list-big {
    margin: 0 auto;
    padding: 0;
    margin-bottom: 40px;

    .feuicon-demo {
      padding: 0;
      margin: 1.2rem 0;
      text-align: center;

      .demo-icon-large {
        display: block;
        font-size: 32px;
        margin: 15px 0;
        color: rgba(69,90,100,.8);
      }

      .label {
        font-size: 14px;
        display: block;
      }
    }
  }

  .icon-list-small {
    display: block;
    overflow: hidden;
    margin: 0 auto 20px;
  }
</style>
