<template>
  <div
    v-show="showNoticeBar"
    class="nuim-notice-bar"
    :class="{ 'nuim-notice-bar--withicon': type }"
    :style="barStyle"
    @click="$emit('on-click')"
  >
      <div class="nuim-notice-bar__left-icon" v-if="leftIcon || leftImg">
        <img :src="leftImg" v-if='leftImg'/>
        <fe-icons class="left-icon" :type="leftIcon" v-else />
      </div>
      <div class="nuim-notice-bar__content-wrap" ref="contentWrap">
        <div
          ref="content"
          class="nuim-notice-bar__content"
          :class="animationClass"
          :style="contentStyle"
          @animationend="onAnimationEnd"
          @webkitAnimationEnd="onAnimationEnd"
        >
          <slot>{{ text }}</slot>
        </div>
      </div>
      <fe-icons class="nuim-notice-bar__right-icon" :type="iconName" v-if="iconName" @click.native="onClickIcon" />
  </div>
</template>

<script>
import Icon from "../icons";

export default {
  name: "fe-noticebar",

  components: {
    [Icon.name]: Icon
  },

  props: {
    text: String,
    link: String,
    type: String,
    leftIcon: String,
    leftImg: String,
    color: String,
    background: String,
    delay: {
      type: [String, Number],
      default: 1
    },
    scrollable: {
      type: Boolean,
      default: true
    },
    speed: {
      type: Number,
      default: 50
    }
  },

  data() {
    return {
      wrapWidth: 0,
      firstRound: true,
      duration: 0,
      offsetWidth: 0,
      showNoticeBar: true,
      animationClass: ""
    };
  },

  computed: {
    iconName() {
      return this.type === "beclosed"
        ? "cancel"
        : this.type === "link"
          ? "next"
          : "";
    },
    barStyle() {
      return {
        color: this.color,
        background: this.background
      };
    },
    contentStyle() {
      return {
        paddingLeft: this.firstRound ? 0 : this.wrapWidth + "px",
        animationDelay: (this.firstRound ? this.delay : 0) + "s",
        animationDuration: this.duration + "s"
      };
    }
  },

  mounted() {
    const offsetWidth = this.$refs.content.getBoundingClientRect().width;
    const wrapWidth = this.$refs.contentWrap.getBoundingClientRect().width;
    if (this.scrollable) {
      this.wrapWidth = wrapWidth;
      this.offsetWidth = offsetWidth;
      this.duration = offsetWidth / this.speed;
      this.animationClass = "nuim-notice-bar__play";
    }
  },

  methods: {
    onClickIcon() {
      //console.log(this.type)
      this.showNoticeBar = this.type !== "beclosed";
    },
    onAnimationEnd() {
      this.firstRound = false;
      this.$nextTick(() => {
        this.duration = (this.offsetWidth + this.wrapWidth) / this.speed;
        this.animationClass = "nuim-notice-bar__play--infinite";
      });
    }
  }
};
</script>
