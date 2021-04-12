<script>
	export default {
		globalData:{
			APPID:'',
			APPSECRET:'',
			userInfo:null
		},
		onLaunch(){
			uni.getStorage({
			key: 'userInfo',
			success:res=>{
				this.globalData.userInfo = res.data
			 }
			});
		}
	}
</script>

<style lang="scss">
	@import "uview-ui/index.scss";
</style>