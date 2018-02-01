<template>
  <div class="page">
    <fe-header slot="header" style="width:100%;position:absolute;left:0;top:0;z-index:100;">404</fe-header>
    <div class="fe-content">
      <h1 class="error-code">404</h1>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped lang="less">
.error-code {
  display: block;
  color: #666;
  font-size: 4rem;
  font-weight: 200;
  text-align: center;
}
</style>
