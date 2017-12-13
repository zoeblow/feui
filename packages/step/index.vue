<template>
  <div class="nuim-step nuim-hairline" :class="[`nuim-step--${$parent.direction}`, { [`nuim-step--${status}`]: status }]">
    <div class="nuim-step__circle-container">
      <i class="nuim-step__circle" v-if="status !== 'process'" />
      <i class="nuim-icon weui-icon weui-icon-success" :style="{ color: $parent.activeColor }" v-else />
    </div>
    <div class="nuim-step__title" :style="titleStyle">
      <slot></slot>
    </div>
    <div class="nuim-step__line" ></div>
  </div>
</template>

<script>
export default {
  name: 'fe-step',

  beforeCreate() {
    this.$parent.steps.push(this);
  },

  computed: {
    status() {
      const index = this.$parent.steps.indexOf(this);
      const active = this.$parent.active;

      if (index < active) {
        return 'finish';
      } else if (index === active) {
        return 'process';
      }
    },

    titleStyle() {
      return this.status === 'process' ? {
        color: this.$parent.activeColor
      } : {};
    }
  }
};
</script>
