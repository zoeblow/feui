import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
import router from "./router/index.js";


import feui,{ Toast, Dialog} from "../packages/index.js";
// console.log(TabbarItem);
window.Toast = Toast;
window.Dialog = Dialog;
import "../packages/feui-css/lib/index.css";
import "./assets/iconfont/iconfont.css";
import "./styles/index.css"
Vue.use(feui);

Vue.config.productionTip = false;
Vue.use(VueRouter);

new Vue({
  el: "#app",
  render: h => h(App),
  router
});