<template>
  <div class="nuim-indexed-container">
    <div class="nuim-indexed-list" ref="indexedList">
      <div v-for="(item,index) in list" :ref="'group'+item.name">
        <p class="nuim-table-view-divider nuim-1px-tb">{{item.name}}</p>
        <div class="nuim-indexed-list-item nuim-1px-b" 
        :class="{'nuim-toLink':k.link}"
        @click="onClick(k)" v-for="(k,v) in item.list">{{ k.text }}</div>
      </div>
    </div>
    <div class="nuim-indexed-az" ref="indexAz">
      <a v-for="(item,index) in _AZ" @click="clickBar(item)">{{item}}</a>
    </div>
    <transition name="fade">
      <div class="nuim-totas" v-show="active">{{text}}</div>
    </transition>
  </div>
</template>

<script>
  import { go } from '../utils/router'
  export default {
    name:'fe-list',
    props: {
      value: Array,
      isSort: { //是否需要排序(升序) 默认不需要
        type: Boolean,
        default: false
      },
      defClick: { 
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        text: '',
        active: false,
        list: []
      }
    },
    mounted() {
      this.caleLayout(); //适应右侧列表宽高
      var unique = {};
      this.list = this.value;
      this.list.forEach((gpa) => {
        gpa.name = gpa.name.toUpperCase();
        unique[JSON.stringify(gpa)] = gpa;
      });
      this.list = Object.keys(unique).map(function(u) {
        return JSON.parse(u)
      });
      if (this.isSort) {
        this.list.sort((a, b) => a.name.localeCompare(b.name));
        if (this.list[0].name == '#') {
          var num = this.list[0];
          this.list.push(num);
          this.list.shift();
        }
      }
      window.addEventListener('resize', this.caleLayout);
    },
    beforeDestroy() {
      window.removeEventListener('resize', this.caleLayout);
    },
    computed: {
      _AZ() {
        let up = [];
        for (var i = 0; i < 26; i++) {
          up.push(String.fromCharCode(65 + i))
        }
        up.push('#')
        return up
      }
    },
    methods: {
      caleLayout() {
        let az = this.$refs.indexAz,
          azHeight = az.offsetHeight,
          azAheight = azHeight / 27;
        az.querySelectorAll('a').forEach((item) => {
          item.style.height = azAheight + 'px';
          item.style.lineHeight = azAheight + 'px';
        })
      },
      clickBar(item) {
        let oDiv = this.$refs['group' + item];
        if (oDiv) {
          this.text = item;
          this.active = true;
          let indexedList = this.$refs.indexedList;
          indexedList.scrollTop = oDiv[0].offsetTop;
          setTimeout(active => {
            this.active = false
          }, 500);
        }
      },
      onClick (item) {
        if(this.defClick){
          this.$emit('on-clickOrRoute',item);
          return;
        }
        go(item.link, this.$router)
      }
    }
  }
</script>
