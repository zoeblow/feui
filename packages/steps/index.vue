<template>
  <div class="nuim-steps" :class="`nuim-steps--${direction}`">
    <div class="nuim-steps__status" v-if="title || description">
      <div class="nuim-steps__icon" v-if="icon || $slots.icon">
        <slot name="icon">
          <fe-icon :type="icon" :class="iconClass" ></fe-icon>
        </slot>
      </div>
      <div class="nuim-steps__message">
        <div class="nuim-steps__title" v-text="title" />
        <div class="nuim-steps__desc" v-text="description" />
      </div>
      <slot name="message-extra" />
    </div>
    <div class="nuim-steps__items" :class="{ 'nuim-steps__items--alone': !title && !description }">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import Icon from '../icon';

export default {
  name: 'fe-steps',

  components: {
    [Icon.name]: Icon
  },

  props: {
    icon: String,
    title: String,
    active: Number,
    iconClass: String,
    description: String,
    direction: {
      type: String,
      default: 'horizontal'
    },
    activeColor: {
      type: String,
      default: '#4a90e2'
    }
  },

  data() {
    return {
      steps: []
    };
  }
};
</script>
