<template>
	<view class="custom-upload-container">
		<u-upload :previewFullImage="true" :fileList="fileList" @afterRead="afterRead" @delete="deletePic" multiple :maxCount="max">
			<view class="custom-upload">
				<u-icon name="plus" size="24" color="#979494"></u-icon>
				<text>点击上传</text>
			</view>
		</u-upload>
	</view>
</template>

<script>
import { baseUrl } from '@/config/index.js';
export default {
	name: 'custom-upload',
	props: {
		max: {
			type: Number,
			default: 9
		},
		list: {
			type: Array,
			default: () => []
		}
	},
	data() {
		return {
			fileList: [],
			uploadList: []
		};
	},
	watch: {
		list: {
			handler(newVal) {
				console.log(newVal);
				if (newVal[0]) {
					this.fileList = newVal.map(item => {
						return {
							url: item
						};
					});
				}
			},
			immediate: true
		}
	},
	methods: {
		// 删除图片
		deletePic(event) {
			this.fileList.splice(event.index, 1);
			this.uploadList.splice(event.index, 1);
			this.$emit('change', this.uploadList);
		},
		// 新增图片
		async afterRead(event) {
			// 当设置 mutiple 为 true 时, file 为数组格式，否则为对象格式
			let lists = [].concat(event.file);
			let fileListLen = this.fileList.length;
			lists.map(item => {
				this.fileList.push({
					...item,
					status: 'uploading',
					message: '上传中'
				});
			});
			for (let i = 0; i < lists.length; i++) {
				const result = await this.uploadFilePromise(lists[i].url);
				let item = this.fileList[fileListLen];
				this.fileList.splice(
					fileListLen,
					1,
					Object.assign(item, {
						status: 'success',
						message: '',
						url: result
					})
				);
				fileListLen++;
			}
		},
		uploadFilePromise(url) {
			uni.uploadFile({
				url: baseUrl + '/api/upload/uploadFile', // 仅为示例，非真实的接口地址
				filePath: url,
				name: 'file',
				success: res => {
					const { data } = JSON.parse(res.data);
					this.uploadList.push(data);
					this.$emit('change', this.uploadList);
				}
			});
		}
	}
};
</script>

<style lang="scss" scoped>
.custom-upload {
	width: 202rpx;
	height: 162rpx;
	box-sizing: border-box;
	border-radius: 10rpx;
	color: #979494;
	font-size: 26rpx;
	border: 2rpx solid #979494;
	background-color: #fff;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
}
</style>
