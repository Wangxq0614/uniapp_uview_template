<script>
	export default {
		globalData: {
			userInfo: null,
		},
		onLaunch() {
			this.$store.dispatch('user/saveUserInfo', {
				a: 123
			})
		},
		onShow() {

		},
	};
</script>

<style lang="scss">
	/* 注意要写在第一行，同时给style标签加入lang="scss"属性 */
	@import "uview-ui/index.scss";
</style>
