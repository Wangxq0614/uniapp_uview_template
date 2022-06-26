<template>
	<view class="custom-login-container">
		<u-popup :show="show" closeable @close="onClose">
			<view class="custom-login">
				<view class="custom-login-btn" @click="submitLogin">
					<u-button open-type="getPhoneNumber" color="linear-gradient(to right, #01AAB6, #00BEA5)" icon="weixin-fill" iconColor="#fff" text="微信一键登录" @getphonenumber="onClickGetPhonenNmber"></u-button>
				</view>
			</view>
		</u-popup>
	</view>
</template>

<script>
import { login, phone } from '@/api/modules/user.js';
export default {
	name: 'custom-login',
	props: {
		show: {
			type: Boolean,
			default: false
		}
	},
	data() {
		return {};
	},
	methods: {
		onClose() {
			this.$emit('update:show', false);
		},

		// 登录
		submitLogin() {
			uni.login({
				provider: 'weixin',
				success: async res => {
					try {
						const { msg } = await login({
							jsCode: res.code
						});
						this.$store.dispatch('user/saveToken', msg);
					} catch (e) {
						//TODO handle the exception
						this.$emit('update:show', false);
					}
				}
			});
		},
		// 获取手机号
		async onClickGetPhonenNmber(e) {
			const { encryptedData, iv, errMsg } = e.detail;
			if (errMsg === 'getPhoneNumber:ok') {
				try {
					await phone({
						encryptedData,
						iv
					});
					this.$store.dispatch('user/getUserInfo').then(res => {
						this.$store.dispatch('shop/getShopInfo');
						this.$emit('update:show', false);
					});
				} catch (e) {
					console.error(e);
					//TODO handle the exception
				}
			}
		}
	}
};
</script>

<style lang="scss" scoped>
.custom-login {
	padding: 60rpx 100rpx;
	box-sizing: border-box;

	.custom-login-btn {
		height: 80rpx;
		color: #fff;
		margin-top: 40rpx;
		border-radius: 10rpx;
		// background: var(--bg-color);
		display: flex;
		align-items: center;
		justify-content: center;
	}
}
</style>
