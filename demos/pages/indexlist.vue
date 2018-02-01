<template>
    <div class="page index">
        <fe-header slot="header" style="width:100%;position:absolute;left:0;top:0;z-index:100;">列表</fe-header>
        <div class="content">
            <fe-list v-model="oData" :isSort="true"></fe-list>
        </div>
    </div>
</template>
<script>
export default {
  name: "indexlist",
  data() {
    return {
      title: window.location.hash.replace("#/", ""),
      oData: [
        {
          name: "#",
          list: [
            {
              text: "12547896"
            },
            {
              text: "451384"
            }
          ]
        },
        {
          name: "F",
          list: [
            {
              text: "海贼王"
            },
            {
              text: "汇通"
            },
            {
              text: "hotmail"
            }
          ]
        },
        {
          name: "A",
          list: [
            {
              text: "爱奇艺",
              link: "/cell"
            },
            {
              text: "阿里云"
            },
            {
              text: "阿里巴巴"
            },
            {
              text: "安居客"
            }
          ]
        },
        {
          name: "D",
          list: [
            {
              text: "大麦网"
            },
            {
              text: "斗鱼"
            },
            {
              text: "电影天堂"
            },
            {
              text: "当当网"
            }
          ]
        },
        {
          name: "B",
          list: [
            {
              text: "Bilibili"
            },
            {
              text: "比克"
            },
            {
              text: "百度"
            },
            {
              text: "beyond"
            }
          ]
        },
        {
          name: "E",
          list: [
            {
              text: "Eason"
            },
            {
              text: "衣之家"
            },
            {
              text: "Excel"
            },
            {
              text: "EMS"
            }
          ]
        }
      ]
    };
  },
  methods: {}
};
</script>

<style scoped lang="less">
.content {
  padding-top: 46px;
  height: 100%;
  box-sizing: border-box;
}
.page {
  height: 100%;
}
</style>
