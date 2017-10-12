<template>
  <div class="nuim-header">
    <div class="nuim-header-left">
      <slot name="overwrite-left">
        <transition :name="transition">
          <a class="nuim-header-back" @click.preventDefault v-show="_leftOptions.showBack" @click="onClickBack">{{ typeof _leftOptions.backText === 'undefined' ? '返回' : _leftOptions.backText}}</a>
        </transition>
        <transition :name="transition">
          <div class="left-arrow" @click="onClickBack" v-show="_leftOptions.showBack"></div>
        </transition>
      </slot>
      <slot name="left"></slot>
    </div>
    <h1 class="nuim-header-title" @click="$emit('on-click-title')">
      <slot>
        <transition :name="transition">
          <span v-show="title">{{title}}</span>
        </transition>
      </slot>
    </h1>
    <div class="nuim-header-right">
      <a class="nuim-header-more" @click.preventDefault @click="$emit('on-click-more')" v-if="rightOptions.showMore"></a>
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
  import objectAssign from 'object-assign'
  export default {
    name: 'fe-header',
    props: {
      leftOptions: Object,
      title: String,
      transition: String,
      rightOptions: {
        type: Object,
        default () {
          return {
            showMore: false
          }
        }
      }
    },
    computed: {
      _leftOptions () {
        return objectAssign({
          showBack: true,
          preventGoBack: false
        }, this.leftOptions || {})
      }
    },
    methods: {
      onClickBack () {
        if (this._leftOptions.preventGoBack) {
          this.$emit('on-click-back')
        } else {
          this.$router ? this.$router.back() : window.history.back()
        }
      }
    }
  }
</script>

<style lang="less">
@import '../../styles/variable.less';

.nuim-header {
  position: relative;
  padding: 3px 0;
  box-sizing: border-box;
  background-color: @header-background-color;
}
.nuim-header .nuim-header-title,.nuim-header h1 {
  margin: 0 88px;
  line-height: 40px;
  text-align: center;
  height: 40px;
  font-size: 18px;
  font-weight: 400;
  width: auto;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: @header-title-color;
}
.nuim-header .nuim-header-title > span {
  display: inline-block;
}
.nuim-header .nuim-header-left,.nuim-header .nuim-header-right {
  position: absolute;
  top: 14px;
  display: block;
  font-size: 14px;
  line-height: 21px;
  color: @header-text-color;
}
.nuim-header .nuim-header-left a,.nuim-header .nuim-header-left button,.nuim-header .nuim-header-right a,.nuim-header .nuim-header-right button {
  float: left;
  margin-right: 8px;
  color: @header-text-color;
}
.nuim-header .nuim-header-left a:active,.nuim-header .nuim-header-left button:active,.nuim-header .nuim-header-right a:active,.nuim-header .nuim-header-right button:active {
  opacity: .5
}
.nuim-header .nuim-header-left {
  left: 18px
}
.nuim-header .nuim-header-left .nuim-header-back {
  padding-left: 16px
}
.nuim-header .nuim-header-left .left-arrow {
  position: absolute;
  width: 30px;
  height: 30px;
  top: -5px;
  left: -5px;

  &:before {
    content: "";
    position: absolute;
    width: 12px;
    height: 12px;
    border: 1px solid @header-arrow-color;
    border-width: 1px 0 0 1px;
    transform: rotate(315deg);
    top: 8px;
    left: 7px;
  }
}
.nuim-header .nuim-header-right {
  right: 15px
}
.nuim-header .nuim-header-right a,.nuim-header .nuim-header-right button {
  margin-left: 8px;
  margin-right: 0
}
.nuim-header .nuim-header-right .nuim-header-more:after {
  content: "\2022\0020\2022\0020\2022\0020";
  font-size: 16px;
}
.nuim-header-fade-in-right-enter-active {
  animation: fadeinR .5s;
}
.nuim-header-fade-in-left-enter-active {
  animation: fadeinL .5s;
}
@keyframes fadeinR {
  0% {
    opacity: 0;
    transform: translateX(150px);
  }
  100% {
    opacity:1;
    transform:translateX(0);
  }
}
@keyframes fadeinL{
  0% {
    opacity: 0;
    transform: translateX(-150px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}
.fe-content{
  padding-top:50px; 
}
</style>
