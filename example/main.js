import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './app.vue'
import FastClick from 'fastclick'
import routes from './route/index.js'
import Feui from '../src/index.js'

Vue.use(VueRouter)
Vue.use(Feui)

import '../src/styles/index.less';

document.addEventListener('DOMContentLoaded', function () {
  if (FastClick) FastClick.attach(document.body)
}, false)

const router = new VueRouter({
  mode: 'history',
  base: '/',
  routes
})

router.beforeEach((to, from, next) => {

  next()
})

router.afterEach((to, from) => {

  document.title = to.meta.title
})

new Vue({
  el: '#app',

  render: h => h(App),

  router,


  data () {
    return {
      transitionName: 'slide-right'
    }
  },

  computed: {
    // ...mapState({
    //   isLoading: state => state.isLoading
    // })
  },

  watch: {
    '$route' (to, from) {
      this.transitionName = from.name === 'index' ? 'slide-left' : 'slide-right'
    }
  }
})
