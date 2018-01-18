<template>
  <span>{{startVal}}</span>
</template>

<script>
import Countup from 'countup.js'

export default {
  name:'fe-countup',
  mounted () {
    this.$nextTick(() => {
      this._countup = new Countup(this.$el, this.startVal, this.endVal, this.decimals, this.duration, this.options,this.callback)
      if (this.start) {
        let that = this
        that._countup.start(function() {
          that.callback(that._countup);
        })
      }
    })
  },
  props: {
    start: {
      type: Boolean,
      default: true
    },
    reset: {
      type: Boolean,
      default: false
    },
    startVal: {
      type: Number,
      default: 0
    },
    endVal: {
      type: Number,
      required: true
    },
    decimals: {
      type: Number,
      default: 0
    },
    duration: {
      type: Number,
      default: 2
    },
    options: {
      type: Object,
      default () {
        return {}
      }
    },
    callback: {
      type: Function,
      default () {}
    }
  },
  watch: {
    start (val) {
      let that = this
      if (val) {
        that._countup.start(function() {
          that.callback && that.callback();
        })
      }
    },
    endVal (val) {
      this._countup.update(val)
    },
    reset (){
      this._countup.reset();
    }
  }
}
</script>
