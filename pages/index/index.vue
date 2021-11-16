<template>
	<view class="home">
		<view style="padding: 20px;">
				<u-button type="primary">确定</u-button>
				<u-button type="primary" icon="map">图标按钮</u-button>
				<u-button type="primary" shape="circle">按钮形状</u-button>
				<u-button text="渐变色按钮" color="linear-gradient(to right, rgb(66, 83, 216), rgb(213, 51, 186))"></u-button>
				<u-button type="primary" size="small">大小尺寸</u-button>
			</view>
		<u-list >
			<u-list-item v-for="(item, index) in list" :key="index">
				<u-cell :title="item.text"></u-cell>
			</u-list-item>
		</u-list>
	</view>
</template>

<script>
	import { getList } from '@/config/api';
	export default {
		data() {
			return {
				list: []
			};
		},
		onLoad() {
			this.getList()
		},
		methods: {
			async getList() {
				const { result } = await getList({
					page: 1,
					count: 1,
					type: 'video'
				})
				this.list = result
				console.log(result);
			},		
			
		},
	};
</script>

<style lang="scss" scoped>
</style>
