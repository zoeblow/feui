<template>
  <div>
    <fe-header slot="header" style="width:100%;position:absolute;left:0;top:0;z-index:100;">search</fe-header>
    <div class="fe-content">
      <fe-search
      @result-click="resultClick"
      @on-change="getResult"
      :results="results"
      v-model="value"
      position="absolute"
      auto-scroll-to-top top="46px"
      @on-focus="onFocus"
      @on-cancel="onCancel"
      @on-submit="onSubmit"
      ref="search"></fe-search>
      <div style="padding:15px;">
        <fe-button @click.native="setFocus" type="primary">set focus</fe-button>
      </div>
      <fe-group>
        <fe-cell title="static position demo" is-link link="/searchstatic"></fe-cell>
      </fe-group>
    </div>
  </div>
</template>

<script>


export default {

  methods: {
    setFocus () {
      this.$refs.search.setFocus()
    },
    resultClick (item) {
      window.alert('you click the result item: ' + JSON.stringify(item))
    },
    getResult (val) {
      this.results = val ? getResult(this.value) : []
    },
    onSubmit () {
      // this.$vux.toast.show({
      //   type: 'text',
      //   position: 'top',
      //   text: 'on submit'
      // })
    },
    onFocus () {
      console.log('on focus')
    },
    onCancel () {
      console.log('on cancel')
    }
  },
  data () {
    return {
      results: [],
      value: 'test'
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
