<script lang="ts">
	import Vue from 'vue';
	import {mapActions} from 'vuex'

	export default Vue.extend({
		mpType: 'app',
		onLaunch() {
			console.log(this.$store.state.User);
			this.getProductInfo({data: 1}).then();
			// #ifndef H5
			this.login({data: 1})
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
			...mapActions('Product', ['getProductInfo']),
		},
	});
</script>

<style lang="scss">
	/*每个页面公共css */
	page {
		background: #f2f2f2;
	}
</style>
