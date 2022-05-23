const SET_TOKEN = "SET_TOKEN";
const SET_USER_INFO = "SET_USER_INFO";


export default {
	namespaced: true,

	state: () => {
		return {
			token: "",
			userInfo: {},
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
			commit(SET_TOKEN, data);
		},
		saveUserInfo({ commit }, data) {
			commit(SET_USER_INFO, data);
		},

	},
};
