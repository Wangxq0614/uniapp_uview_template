<template>
	<view class="index-container">
		<view style="padding: 20px;">
			<u-button type="primary">确定</u-button>
			<u-button type="primary" icon="map">图标按钮</u-button>
			<u-button type="primary" shape="circle">按钮形状</u-button>
			<u-button text="渐变色按钮" color="linear-gradient(to right, rgb(66, 83, 216), rgb(213, 51, 186))"></u-button>
			<u-button type="primary" size="small">大小尺寸</u-button>
		</view>

<custom-upload :list="imgList" :max="3" @change="onUploadChange"></custom-upload>


		<!-- 登录窗口 -->
		<custom-login :show.sync="isShowLogin"></custom-login>
	</view>
</template>

<script>
export default {
	data() {
		return {
			imgList:['https://portrait.gitee.com/uploads/avatars/user/1745/5236669_wangxq0614_1614478961.png!avatar200'],
			isShowLogin: false
		};
	},
	computed: {
		userInfo() {
			return this.$store.getters.userInfo;
		}
	},
	onShow() {
		if (!this.userInfo) {
			this.isShowLogin = true;
		}
	},
	methods: {
		// 监听文件上传
		onUploadChange(e){
			console.log("上传结果:", e);
		}
	}
};
</script>

<style lang="scss" scoped></style>
