<script lang="ts">
	import {reqGetLogin} from "@/api";
	import Vue from 'vue';
	export default Vue.extend({
		mpType: 'app',
		onLaunch() {
			console.log(this.$store.state.User);
			// #ifndef H5
			uni.login({
				success(res) {
					console.log('login', res);
					reqGetLogin({code: '1123'}).then(
						result => {
							console.log('userData', result);
						}
					)
				}
			})
			// #endif

		},
		onShow() {
			console.log('App Show')
		},
		onHide() {
			console.log('App Hide')
		}
	});
</script>

<style lang="scss">
	/*每个页面公共css */
	page {
		background: #f2f2f2;
	}
</style>
