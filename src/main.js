import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// import Plugins
import "./plugins/ant.design";
import "./plugins/axios";
import "./plugins/progress-bar";

// import bootstrap
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
