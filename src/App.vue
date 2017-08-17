<template>
  <div>
    <h1>Hello, {{ message }}</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: 'cooking'
    };
  }
};
</script>

<style lang="css" scoped>
  h1 {
    color: #03a9f4;
  }
</style>
