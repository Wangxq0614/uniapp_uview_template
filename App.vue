<script>
export default {
	onLaunch() {
		this.$store.dispatch('user/saveToken');
		this.$store.dispatch('user/saveUserInfo');
	},
	onShow() {
		if (this.$store.getters.userInfo) {
			this.$store.dispatch('user/getUserInfo');
		}
	}
};
</script>

<style lang="scss">
/* 注意要写在第一行，同时给style标签加入lang="scss"属性 */
@import 'uview-ui/index.scss';

page {
	width: 100%;
	height: 100%;
	background-color: #EFF2F7;
	
	--theme-color:#43DDBE;
	--bg-color:linear-gradient(to right, #01AAB6, #00BEA5);
}

/* 隐藏滚动条 */
::-webkit-scrollbar {
	display: none;
	width: 0 !important;
	height: 0 !important;
	-webkit-appearance: none;
	background: transparent;
	color: transparent;
}
</style>
