<template>
  <div class="nuim-loading" :class="['nuim-loading--' + type, 'nuim-loading--' + color]">
    <span class="nuim-loading__spinner" :class="['nuim-loading__spinner--' + type, 'nuim-loading__spinner--' + color]">
      <i v-if="type === 'spinner'" v-for="item in 12" :key='item' />
    </span>
  </div>
</template>

<script>
export default {
  name: 'loading',
  props: {
    type: {
      type: String,
      default: 'spinner'
    },
    color: {
      type: String,
      default: 'black'
    }
  }
};
</script>
