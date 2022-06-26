<template>
	<view class="no-data">
		<u-empty :mode="mode" />
	</view>
</template>

<script>
	export default {
		name:"custom-no-data",
		props:{
			mode:{
				type:String,
				default:'data'
			}
		},
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss" scoped>
.no-data {
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
}
</style>