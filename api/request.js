import { baseUrl } from '@/config/index.js'

// 此vm参数为页面的实例，可以通过它引用vuex中的变量
module.exports = (vm) => {
	// 初始化请求配置
	uni.$u.http.setConfig((config) => {
		/* config 为默认全局配置*/
		config.baseURL = baseUrl; /* 根域名 */
		config.timeout = 8 * 1000;
		config.custom = {
			loading: true,
			auth:true
		}
		return config
	})

	// 请求拦截
	uni.$u.http.interceptors.request.use((config) => {
		// 演示自定义参数的作用
		if (config.custom.loading) {
			uni.showLoading({
				title: '加载中'
			})
		}
		if(config.custom.auth) {			
			config.header.token = vm.$store.getters.token
		}
		return config
	}, config => {
		return Promise.reject(config)
	})

	// 响应拦截
	uni.$u.http.interceptors.response.use((response) => {
		// 演示自定义参数的作用
		if (response.config.custom.loading) {
			uni.hideLoading()
		}
		/* 对响应成功做点什么 可使用async await 做异步操作*/
		if (response.data.code !== 200) { // 服务端返回的状态码不等于200，则reject()

			uni.showToast({
				icon:'none',
				title:response.data.msg
			})

			return Promise.reject(response) // return Promise.reject 可使promise状态进入catch
		} else {
			return response.data
		}
	}, (response) => {
		/*  对响应错误做点什么 （statusCode !== 200）*/
		uni.showToast({
			icon:'none',
			title:response
		})
		return Promise.reject(response)
	})
}
