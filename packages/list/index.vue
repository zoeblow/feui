<template>
  <div class="fe-list">
    <slot />
    <div v-if="loading" class="fe-list-loading">
      <slot name="loading">
        <loading class="fe-list-loading-icon" />
        <span v-text="loadingText" class="fe-list-loading-text" />
      </slot>
    </div>
    <div
      v-if="finished && finishedText"
      v-text="finishedText"
      class="fe-list-finished-text"
    />
    <div
      v-if="error && errorText"
      v-text="errorText"
      @click="clickErrorText"
      class="fe-list-error-text"
    />
  </div>
</template>

<script>
import utils from "./scroll";
export default {
  name: "fe-list",
  model: {
    prop: "loading"
  },
  props: {
    error: Boolean,
    loading: Boolean,
    finished: Boolean,
    loadingText: {
      type: String,
      default: "loading"
    },
    errorText: {
      type: String,
      default: "请求失败，点击重新加载"
    },
    finishedText: {
      type: String,
      default: "没有更多了"
    },
    immediateCheck: {
      type: Boolean,
      default: true
    },
    offset: {
      type: Number,
      default: 300
    },
    direction: {
      type: String,
      default: "down"
    }
  },
  mounted() {
    this.scroller = utils.getScrollEventTarget(this.$el);
    this.handler(true);
    if (this.immediateCheck) {
      this.$nextTick(this.check);
    }
  },
  destroyed() {
    this.handler(false);
  },
  activated() {
    this.handler(true);
  },
  deactivated() {
    this.handler(false);
  },
  watch: {
    loading() {
      this.$nextTick(this.check);
    },
    finished() {
      this.$nextTick(this.check);
    }
  },
  methods: {
    check() {
      if (this.loading || this.finished || this.error) {
        return;
      }
      const el = this.$el;
      const { scroller } = this;
      const scrollerHeight = utils.getVisibleHeight(scroller);
      /* istanbul ignore next */
      if (
        !scrollerHeight ||
        utils.getComputedStyle(el).display === "none" ||
        el.offsetParent === null
      ) {
        return;
      }
      const scrollTop = utils.getScrollTop(scroller);
      const targetBottom = scrollTop + scrollerHeight;
      let reachBottom = false;
      /* istanbul ignore next */
      if (el === scroller) {
        reachBottom = scroller.scrollHeight - targetBottom < this.offset;
      } else {
        const elBottom =
          utils.getElementTop(el) -
          utils.getElementTop(scroller) +
          utils.getVisibleHeight(el);
        reachBottom = elBottom - scrollerHeight < this.offset;
      }
      /* istanbul ignore else */
      if (reachBottom) {
        this.$emit("input", true);
        this.$emit("load");
      }
    },
    clickErrorText() {
      this.$emit("update:error", false);
      this.$nextTick(this.check);
    },
    handler(bind) {
      /* istanbul ignore else */
      if (this.binded !== bind) {
        this.binded = bind;
        if (bind) {
          this.scroller.addEventListener("scroll", this.check, false);
        } else {
          this.scroller.removeEventListener("scroll", this.check);
        }
      }
    }
  }
};
</script>