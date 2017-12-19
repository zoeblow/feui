<template>
  <div>
    <fe-header slot="header" style="width:100%;position:absolute;left:0;top:0;z-index:100;">searchstatic</fe-header>
    <div class="fe-content">
      <!-- <img src="../assets/demo/filter_bg.jpg" style="width: 100%"> -->
      <br>
      <fe-search @on-submit="onSubmit" :auto-fixed="autoFixed" @on-focus="onFocus" @on-cancel="onCancel"></fe-search>
      <divider>设定默认值</divider>
      <fe-search @on-submit="onSubmit" :auto-fixed="false" v-model="value2" @on-focus="onFocus" @on-cancel="onCancel"></fe-search>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    resultClick (item) {
      window.alert('you click the result item: ' + JSON.stringify(item))
    },
    getResult (val) {
      this.results = val ? getResult(this.value) : []
    },
    onSubmit (val) {
      window.alert('on submit' + val)
    },
    onCancel () {
      console.log('on cancel')
    },
    onFocus () {
      console.log('on focus')
    }
  },
  data () {
    return {
      results: [],
      autoFixed: false,
      value: '',
      value1: 'hello',
      value2: 'feui'
    }
  }
}

function getResult (val) {
  let rs = []
  for (let i = 0; i < 8; i++) {
    rs.push({
      title: `${val} result: ${i + 1} `,
      other: i
    })
  }
  return rs
}
</script>

<style scoped lang='less'>
p {
  padding: 10px 15px;
  font-size: 14px;
  color: #888;
}
</style>
