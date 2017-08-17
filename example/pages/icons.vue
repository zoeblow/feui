<template>
  <div class="page page-with-padding">
    <fe-header slot="header" style="width:100%;position:absolute;left:0;top:0;z-index:100;">Icon</fe-header>
    <div class="fe-content">
      <ul class="icon-list-big">
        <li v-for="type in iconTypes" :key="type">
          <fe-icon class="demo-icon-large" :type="type" :large="true"></fe-icon>
          <label class="label" v-text="type"></label>
        </li>
      </ul>

      <div class="icon-list-small">
        <fe-icon :type="type" v-for="type in iconTypes" :key="type"></fe-icon>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        iconTypes: [
          'success',
          'info',
          'warn',
          'waiting',
          'success-no-circle',
          'circle',
          'info-circle',
          'download',
          'cancel',
          'search'
        ]
      }
    }
  }
</script>

<style scoped lang="less">
  .icon-list-big {
    width: 80%;
    margin: 0 auto;
    padding: 0;
    margin-bottom: 40px;

    li {
      display: flex;
      padding: 0;
      margin: 1.2rem 0;

      .demo-icon-large {
        display: block;
        margin-right: 1rem;
        font-size: 4rem;
      }

      .label {
        font-size: 1.1rem;
        display: block;
        float: left;
      }
    }
  }

  .icon-list-small {
    display: block;
    overflow: hidden;
    width: 80%;
    margin: 0 auto 20px;
  }
</style>
