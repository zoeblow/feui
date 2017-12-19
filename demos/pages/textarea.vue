<template>
    <div class="page input">
      <fe-header slot="header" style="width:100%;position:absolute;left:0;top:0;z-index:100;">Textarea</fe-header>
      <div class="fe-content">
        <fe-group>
          <fe-textarea :max="20" :placeholder="placeholder" @on-focus="onEvent('focus')" @on-blur="onEvent('blur')"></fe-textarea>
        </fe-group>
        <fe-group title="和input一起使用">
          <fe-input :placeholder="title"></fe-input>
          <fe-textarea :max="200" name="description" :placeholder="placeholder"></fe-textarea>
        </fe-group>
        <fe-group title="不显示计数器">
          <fe-textarea :max="200" name="detail" :placeholder="placeholder" :show-counter="false"></fe-textarea>
        </fe-group>
        <fe-group title="自动高度">
          <fe-textarea :placeholder="placeholder" :show-counter="false" :rows="1" autosize></fe-textarea>
          <fe-textarea :title="title" :placeholder="placeholder" :show-counter="false" :rows="1" autosize></fe-textarea>
        </fe-group>
        <fe-group title="设置高度为200像素">
          <fe-textarea :title="title" :max="200" :placeholder="placeholder" :show-counter="false" :height="200" :rows="8" :cols="30"></fe-textarea>
        </fe-group>
      </div>  
    </div>
</template>
<script>
export default {
  data () {
    return {
      placeholder:'占位符',
      title:'标题'
    }
  },
  methods:{
    onEvent (event) {
      console.log('on', event)
    }
  }
}
</script>

<style scoped lang="less">

</style>