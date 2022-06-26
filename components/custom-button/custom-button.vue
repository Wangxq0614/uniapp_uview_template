<template>
	<view>
		<view v-if="fixed" :style="{ height: `calc(180rpx + ${bottom})` }"></view>
		<view :class="['custom-button-container', fixed && ' button-fixed']" :style="{ bottom: bottom }">
			<u-button :disabled="disabled" @click="onClick" :customStyle="customStyle" color="linear-gradient( #00BEA5, #01B0B1)" :icon="icon" :text="text"></u-button>
		</view>
		
		<!-- 登录接口 -->
		<custom-login :show.sync="isShowLogin"></custom-login>
	</view>
</template>

<script>
export default {
	name: 'custom-button',
	props: {
		disabled: {
			type: Boolean,
			default: false
		},
		fixed: {
			type: Boolean,
			default: false
		},
		bottom: {
			type: String,
			default: '0'
		},
		icon: {
			type: String,
			default: ''
		},
		text: {
			type: String,
			default: '确认'
		},
		customStyle: {
			type: Object,
			default: () => {
				return {
					width: '100%',
					height: '80rpx',
					borderRadius: '10rpx'
				};
			}
		}
	},
	data() {
		return {
			isShowLogin: false
		};
	},
	methods: {
		onClick() {
			this.$store
				.dispatch('user/isLogin')
				.then(() => {
					this.$emit('click');
				})
				.catch(err => {
					this.isShowLogin = true;
				});
		}
	}
};
</script>

<style lang="scss">
.button-fixed {
	position: fixed;
	left: 0;
	right: 0;
	bottom: 0;
	width: 100%;
	height: 100rpx;
	padding: 20rpx;
	box-sizing: border-box;
}

// #ifdef H5
.button-fixed {
	bottom: 50px !important;
}
// #endif

</style>
