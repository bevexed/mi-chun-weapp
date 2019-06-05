<template>
	<div>
		<image @tap="toGoodDetail" src="../../static/dev/1.jpg"></image>
		<image src="../../static/dev/1.jpg"></image>
	</div>
</template>

<script lang="ts">
	import Vue from 'vue'

	export default Vue.extend({
		name: "shop",
		data() {
			return {}
		},
		onLoad() {
			console.log('shop');
		},
		methods: {
			toGoodDetail() {
				uni.navigateTo({
					url:'/pages/good-detail/good-detail'
				})
			}
		}
	})
</script>

<style lang="scss" scoped>
	div {
		text-align: center;
	}

	image {
		width: upx(710);
		height: upx(720);
		margin: upx(20) 0 0;
	}
</style>
