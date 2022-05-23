import Vue from "vue";
import Vuex from "vuex";
import app from "./modules/app";
import user from "./modules/user";
import getters from "./getters.js";

import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex);

const store = new Vuex.Store({
	modules: {
		app,
		user
	},
	getters,
	// 使用 vuex 持久化插件
	  plugins: [
	    createPersistedState({
	      storage: {
	        // 在存储的回调中使用 uniapp 的持久化存储的方法
	        getItem: (key) => uni.getStorageSync(key),
	        setItem: (key, value) => uni.setStorageSync(key, value),
	        removeItem: (key) => uni.removeStorageSync(key)
	      },
	      reducer(val) {
	        // 需要持久化的数据 val 为 state 对象
	        return {
	          token: val.user.token,
	          userinfo: val.user.userInfo,
	        }
	      }
	    })
	  ]
});
export default store;
