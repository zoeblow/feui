<template>
  <div class="page">
    <fe-header slot="header" style="width:100%;position:absolute;left:0;top:0;z-index:100;">Swiper</fe-header>
    <div class="fe-content">
      <fe-swiper :list="demo01_list" v-model="demo02_index" show-desc-mask @on-index-change="demo01_onIndexChange"></fe-swiper>
      <br>
      <divider>根据宽度计算高度</divider> 
      <fe-swiper :list="demo02_list" style="width:85%;margin:0 auto;" :aspect-ratio="300/800" dots-position="center"></fe-swiper>
      <br>
      <divider>自动轮播</divider> 
      <fe-swiper :list="demo03_list" auto style="width:80%;margin:0 auto;" height="180px" dots-class="custom-bottom" dots-position="center"></fe-swiper>
      <br>
      <divider>swiper-item 自定义高度</divider> 
      <fe-swiper auto height="100px">
        <swiper-item class="black"><h2 class="title fadeInUp animated">原力与你同在</h2></swiper-item>
        <swiper-item class="black"><h2 class="title fadeInUp animated">尽在游戏中</h2></swiper-item>
        <swiper-item class="black"><h2 class="title fadeInUp animated">欢迎来到下一关</h2></swiper-item>
        <swiper-item class="black"><h2 class="title fadeInUp animated">玩乐未来</h2></swiper-item>
        <swiper-item class="black"><h2 class="title fadeInUp animated">伟大，值得等待</h2></swiper-item>
        <swiper-item class="black"><h2 class="title fadeInUp animated">你玩什么游戏</h2></swiper-item>
      </fe-swiper>
      <br>
      <divider>切换列表</divider> 
      <fe-swiper :list="demo05_list" auto height="180px" @on-index-change="demo05_onIndexChange"></fe-swiper>
      <p> current index: {{demo05_index}}</p>
      <fe-button @click.native="demo05_onLoad(1)" type="primary" style="margin: 10px 0;">Load list1</fe-button>
      <fe-button @click.native="demo05_onLoad(2)" type="primary" style="margin: 10px 0;">Load list2</fe-button>
      <br>
      <divider>文字滚动</divider> 
      <fe-swiper auto height="30px" direction="vertical" :interval=2000 class="text-scroll" :show-dots="false">
        <swiper-item><p><a href='http://ifuyuan.wang'>向着网络强国新时代昂首迈进</a></p></swiper-item>
        <swiper-item><p><a href='http://ifuyuan.wang'>国际政要点赞“中国梦”  领航新征程</a></p></swiper-item>
        <swiper-item><p><a href='http://ifuyuan.wang'>一个万亿级公司诞生：33万名员工、创四个世界之最</a></p></swiper-item>
        <swiper-item><p><a href='http://ifuyuan.wang'>奇葩！出狱不到十天再被抓 只因看守所有吃有喝</a></p></swiper-item>
        <swiper-item><p><a href='http://ifuyuan.wang'>传A站已被关停：没钱交电费被拉闸</a></p></swiper-item>
        <swiper-item><p><a href='http://ifuyuan.wang'>比尔盖茨凭什么能当中国工程院院士？</a></p></swiper-item>
      </fe-swiper>
      <br>
      <divider>循环模式</divider>
      <fe-swiper loop auto :list="demo07_list" :index="demo07_index" @on-index-change="demo07_onIndexChange"></fe-swiper>
      <p>current index: {{demo07_index}}</p>
      <br>
      <br>
    </div>
  </div>
</template>

<script>
const baseList = [
  {
    url: "javascript:",
    img: 'https://i.loli.net/2018/01/29/5a6e85c5114f5.jpg',
    title: "陪你去看花"
  },
  {
    url: "javascript:",
    img: 'https://i.loli.net/2018/01/29/5a6e85c5aeb85.jpg',
    title: "陪你去看云"
  },
  {
    url: "javascript:",
    img: 'https://i.loli.net/2018/01/29/5a6e85c49167b.jpg',
    title: "陪你去看山",
    fallbackImg: 'https://i.loli.net/2018/01/29/5a6e85c4d972d.jpg'
  }
];

const imgList = [
  "http://placehold.it/800x300/4a90e2/fff.png",
  "http://placehold.it/800x300/41b883/fff.png",
  "http://placehold.it/800x300/7276f9/fff.png"
];

const urlList = baseList.map((item, index) => ({
  url: "http://ifuyuan.wang",
  img: item.img,
  fallbackImg: item.fallbackImg,
  title: `(可点击)${item.title}`
}));

const demoList = imgList.map((one, index) => ({
  url: "javascript:",
  img: one
}));

const only2ClickList = baseList.slice(0, 2).map(item => {
  item.url = "http://ifuyuan.wang";
  return item;
});

export default {
  created() {
    //初始化
    this.demo05_onLoad(1);
  },
  methods: {
    onSwiperItemIndexChange(index) {
      console.log("demo item change", index);
    },
    demo01_onIndexChange(index) {
      this.demo01_index = index;
    },
    demo05_onIndexChange(index) {
      this.demo05_index = index;
    },
    demo05_onLoad(id) {
      this.demo05_list = id === 1 ? baseList : demoList;
    },
    demo06_onIndexChange(index) {
      this.demo06_index = index;
    },
    demo07_onIndexChange(index) {
      this.demo07_index = index;
    }
  },
  data() {
    return {
      demo01_list: baseList,
      demo02_list: demoList,
      demo03_list: demoList,
      demo04_list: imgList,
      demo05_list: [],
      demo06_list: urlList,
      demo07_list: only2ClickList,
      demo01_index: 0,
      demo02_index: 0,
      demo05_index: 0,
      demo06_index: 0,
      demo07_index: 0,
      swiperItemIndex: 1
    };
  }
};
</script>
<style scoped>
.copyright {
  font-size: 12px;
  color: #ccc;
  text-align: center;
}
.text-scroll {
  border: 1px solid #ddd;
  border-left: none;
  border-right: none;
}
.text-scroll p {
  font-size: 12px;
  text-align: center;
  line-height: 30px;
}
.black {
  background-color: #000;
}
.title {
  line-height: 100px;
  text-align: center;
  color: #fff;
}
.animated {
  animation-duration: 1s;
  animation-fill-mode: both;
}
.nuim-indicator.custom-bottom {
  bottom: 30px;
}
@-webkit-keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
  100% {
    opacity: 1;
    transform: none;
  }
}
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
  100% {
    opacity: 1;
    transform: none;
  }
}
.fadeInUp {
  animation-name: fadeInUp;
}
.swiper-demo-img img {
  width: 100%;
}
.nuim-swiper-item a {
  color: #333;
}
</style>
