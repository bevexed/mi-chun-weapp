<script lang="ts">
	import Vue from 'vue';
	import { mapActions } from 'vuex'

	export default Vue.extend({
		mpType: 'app',
	async	onLaunch() {
			// #ifndef H5
		await this.login({ data: 1 })
			// #endif
		},
		onShow() {
			console.log('App Show')
		},
		onHide() {
			console.log('App Hide')
		},
		methods: {
			...mapActions('User', ['login']),
		},
	});
</script>

<style lang="scss">
	/*每个页面公共css */
	page {
		background: #f2f2f2;
	}
</style>
