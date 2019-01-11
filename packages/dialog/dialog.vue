<template>
  <div v-show="this.value">
    <div class="weui-mask"></div>
    <div class="weui-dialog" :class="[className,{'weui-skin_android': skin === 'android'}]">
      <div class="weui-dialog__hd" v-if="title">
        <strong class="weui-dialog__title" v-html="title"></strong>
      </div>
      <div class="weui-dialog__bd">
        <slot>
          <div v-if="message" v-html="message"></div>
        </slot>
      </div>
      <div class="weui-dialog__ft">
        <a
          class="weui-dialog__btn weui-dialog__btn_default"
          v-if="showCancelButton"
          @click="handleAction('cancel')"
          v-text="cancelButtonText"
        ></a>
        <a
          class="weui-dialog__btn weui-dialog__btn_primary"
          :class="[{'loading': loading.confirm}]"
          v-if="showConfirmButton"
          @click="handleAction('confirm')"
          v-text="confirmButtonText"
        ></a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "fe-dialog",
  props: {
    skin: String,
    title: String,
    message: String,
    className: [String, Object, Array],
    beforeClose: Function,
    messageAlign: String,
    confirmButtonText: String,
    cancelButtonText: String,
    showConfirmButton: {
      type: Boolean,
      default: true
    },
    showCancelButton: Boolean,
    overlay: {
      type: Boolean,
      default: true
    },
    closeOnClickOverlay: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      value: false,
      loading: {
        confirm: false,
        cancel: false
      }
    };
  },

  methods: {
    handleAction(action) {
      if (this.beforeClose) {
        this.loading[action] = true;
        this.beforeClose(action, state => {
          if (state !== false) {
            this.onClose(action);
          }
          this.loading[action] = false;
        });
      } else {
        this.onClose(action);
      }
    },
    onClose(action) {
      this.$emit("input", false);
      this.$emit(action);
      this.callback && this.callback(action);
    }
  }
};
</script>
