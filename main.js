import Vue from "vue";
import App from "./App";
import store from './store'

Vue.config.productionTip = false;

App.mpType = "app";

// 引入uView
import uView from 'uview-ui'
Vue.use(uView)

const app = new Vue({
  ...App,
	store
});

// 引入请求封装，将app参数传递到配置中
require('@/config/request.js')(app)

app.$mount();
