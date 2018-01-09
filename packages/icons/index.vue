<template>
  <i :class="[className, isMsg ? 'feui-icon_msg' : '']"></i>
</template>

<script>
  export default {
    name: 'fe-icons',
    props: {
      type: String,
      isMsg: Boolean
    },
    computed: {
      className () { // compatible with old type param
        return `feui feui-icon-${this.type.replace(/_/g, '-')}`
      }
    }
  }
</script>
