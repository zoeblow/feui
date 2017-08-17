import uuidMixin from './mixin_uuid'

var data = {
      errors: {},
      prisine: true,
      touched: false
}
export default {
  mixins: [uuidMixin],
  props: {
    required: {
      type: Boolean,
      default: false
    }
  },
  created :function() {
    this.handleChangeEvent = false
  },
  computed: {
    dirty :function() {
      return !this.prisine
    },
    invalid :function() {
      return !this.valid
    }
  },
  methods: {
    setTouched :function() {
      this.touched = true
    }
  },
  watch: {
    value :function(newVal) {
      if (this.prisine === true) {
        this.prisine = false
      }
      if (!this.handleChangeEvent) {
        this.$emit('on-change', newVal)
        this.$emit('input', newVal)
      }
    }
  },
  data :function(){
    return data
  }
}

