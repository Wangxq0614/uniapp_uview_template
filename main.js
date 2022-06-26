import Vue from "vue";
import App from "./App";

import store from "./store";
Vue.config.productionTip = false;


import uView from "uview-ui";
Vue.use(uView);

App.mpType = "app";

const app = new Vue({
  store,
  ...App,
});

// 引入请求封装，将app参数传递到配置中
require("./api/request.js")(app);

app.$mount();
