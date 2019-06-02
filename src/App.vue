<script lang="ts">
	import {reqGetLogin} from "@/api";
	import Vue from 'vue';

	export default Vue.extend({
		mpType: 'app',
		onLaunch() {
			console.log('App Launch')
			reqGetLogin({code: '1123'}).then(
				res => {
					console.log(res);
				}
			)
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
