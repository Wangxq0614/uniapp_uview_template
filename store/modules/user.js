const SET_TOKEN = "SET_TOKEN";
const SET_USER_INFO = "SET_USER_INFO";

import { userInfo } from '@/api/modules/user.js'

export default {
	namespaced: true,

	state: () => {
		return {
			token: "",
			userInfo: null,
		};
	},

	mutations: {
		[SET_TOKEN](state, data) {
			state.token = data;
		},
		[SET_USER_INFO](state, data) {
			state.userInfo = data;
		},
	},

	actions: {
		saveToken({ commit }, data) {
			if (data) {
				uni.setStorageSync("token", data);
				commit(SET_TOKEN, data);
			} else {
				commit(SET_TOKEN, uni.getStorageSync("token") || "");
			}
		},
		saveUserInfo({ commit }, data) {
			if (data) {
				uni.setStorageSync("userInfo", data);
				commit(SET_USER_INFO, data);
			} else {
				commit(SET_USER_INFO, uni.getStorageSync("userInfo") || null);
			}
		},
		// 获取用户详情
		getUserInfo({ dispatch }) {
			return new Promise(async (resolve, reject) => {
				try {
					const { data } = await userInfo()
					dispatch('saveUserInfo', data)
					resolve({})
				} catch (e) {
					//TODO handle the exception
					reject({})
				}
			})
		},


		// 点击登录校验
		isLogin({ state }) {
			return new Promise((resolve, reject) => {
				if (state.userInfo) {
					resolve()
				} else {
					reject("未登录")
				}
			})
		},
		
	},
};
