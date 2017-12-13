export default function () {
  return {
    options: {
      type: Array,
      required: true
    },
    value: [String, Number],
    fillMode: {
      type: Boolean,
      default: false
    },
    fillPlaceholder: {
      type: String,
      default: '其他'
    },
    fillLabel: {
      type: String,
      default: '其他'
    },
    disabled: Boolean,
    selectedLabelStyle: Object
  }
}