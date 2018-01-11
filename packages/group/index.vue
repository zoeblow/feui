<template>
  <div>
    <div
    class="weui-cells__title"
    v-if="title"
    :style="cleanStyle({
      color: titleColor
    })"
    v-html="title"></div>
    <slot name="title"></slot>
    <div
    class="weui-cells"
    :class="{
      'nuim-no-group-title': !title
    }"
    :style="cleanStyle({
      marginTop: typeof gutter === 'number' ? (gutter + 'px') : gutter
    })">
      <slot name="after-title"></slot>
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import cleanStyle from '../utils/clean-style'
  export default {
    name: 'fe-group',
    methods: {
      cleanStyle
    },
    props: {
      title: String,
      titleColor: String,
      labelWidth: String,
      labelAlign: String,
      labelMarginRight: String,
      gutter: [String, Number]
    }
  }
</script>