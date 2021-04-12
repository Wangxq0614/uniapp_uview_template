const install = (Vue, vm) => {
	Vue.prototype.$u.http.setConfig({
		baseUrl: "https://",
		header: {
			"content-type": "application/x-www-form-urlencoded",
		},
		loadingText: "努力加载中~",
		loadingTime: 800,
	});
	// 请求拦截部分，如配置，每次请求前都会执行
	Vue.prototype.$u.http.interceptor.request = (config) => {
		// 从本地存储中获取token
		const token = uni.getStorageSync('token');
		config.header.token = token;
	};
	// 响应拦截，如配置，每次请求结束都会执行本方法
	Vue.prototype.$u.http.interceptor.response = (res) => {
		if (res.code == 200) {
			return res;
		} else if (res.code == 201) {
			// 假设201为token失效，这里跳转登录
			vm.$u.toast('验证失败，请重新登录!');
			setTimeout(() => {
				vm.$u.route('/pages/login/login')
			}, 1500)
			return false;
		} else {
			// 如果返回false，则会调用Promise的reject回调，
			// 并将进入this.$u.post(url).then().catch(res=>{})的catch回调中，res为服务端的返回值
			return false;
		}
	}
};

export default {
	install,
};