import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
import router from "./router/index.js";

import feui, { Toast, Dialog, Lazyload, Loading } from "../packages/index.js";
Vue.use(Lazyload, {
  lazyComponent: true,
  error: "https://i.loli.net/2018/01/29/5a6e858413275.png",
  loading: "https://i.loli.net/2018/01/29/5a6e858463317.gif"
});
window.Toast = Toast;
window.Dialog = Dialog;
import "../packages/feui-css/lib/index.css";
import "./assets/iconfont/iconfont.css";
import "./styles/index.css";
Vue.use(feui);

Vue.config.productionTip = false;
Vue.use(VueRouter);

new Vue({
  el: "#app",
  render: h => h(App),
  router
});
