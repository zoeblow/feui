<template>
  <div
    v-show="value"
    class="nuim-img-preview"
    @touchstart="onTouchStart"
    @touchmove="onTouchMove"
    @touchend="onTouchEnd"
    @touchcancel="onTouchEnd"
  >
    <fe-swiper v-model="startPosition" height="100%" loop dots-class="custom-bottom" dots-position="center">
      <swiper-item v-for="(item, index) in images" :key="index">
        <img class="nuim-img-preview__image" :src="item" >
      </swiper-item>
    </fe-swiper>
    <div class="nuim-img-preview-mask"></div>
  </div>
</template>

<script>
import create from '../utils/create'
import Swiper from '../swiper';
import SwiperItem from '../swiper-item';

export default create({
  name: 'fe-imgpreview',
  components: {
    Swiper,
    SwiperItem
  },
  props: {
    value: Boolean
  },
  data() {
    return {
      // images: [],
      // showPop:true,
      // startPosition: 0
    };
  },
  methods: {
    onTouchStart(event) {
      this.touchStartTime = new Date();
      this.touchStartX = event.touches[0].clientX;
      this.touchStartY = event.touches[0].clientY;
      this.deltaX = 0;
      this.deltaY = 0;
    },
    onTouchMove(event) {
      event.preventDefault();
      this.deltaX = event.touches[0].clientX - this.touchStartX;
      this.deltaY = event.touches[0].clientY - this.touchStartY;
    },
    onTouchEnd(event) {
      event.preventDefault();
      // prevent long tap to close component
      const deltaTime = new Date() - this.touchStartTime;
      console.log(deltaTime,Math.abs(this.deltaX), Math.abs(this.deltaY))
      if (deltaTime < 150 && Math.abs(this.deltaX) < 20 && Math.abs(this.deltaY) < 20) {
        this.close();
      }
    }
  }
});
</script>
