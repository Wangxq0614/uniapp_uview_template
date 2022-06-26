<template>
	<view class="my-container">
		<custom-button text="点击鉴权" @click="onClickLogin"></custom-button>
		
		<custom-button text="点击鉴权(固定底部)" fixed @click="onClickLogin"></custom-button>
		
		<custom-no-data v-if="list.length === 0" mode="list"></custom-no-data>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list:[]
			};
		},
		methods:{
			onClickLogin(){
				console.log("登录鉴权");
			}
		}
	}
</script>

<style lang="scss">

</style>
