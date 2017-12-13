<template>
  <span v-text="text" :class="['nuim-badge', {'nuim-badge-single': typeof text !== 'undefined' && text.toString().length === 1}]"></span>
</template>

<script>
export default {
  name:'fe-badge',
  props: {
    text: [String, Number]
  }
}
</script>
