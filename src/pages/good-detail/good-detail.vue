<template>
	<div class="good-detail">
		<image class="shop-img" mode="widthFix" src="../../static/dev/1.jpg"></image>

		<footer>
			<div class="custom">客服</div>
			<div class="buy">立即购买</div>
		</footer>
	</div>
</template>

<script lang="ts">
	import Vue from 'vue'

	export default Vue.extend({
		name: "good-detail"
	})
</script>

<style lang="scss" scoped>
	@import "../../uni";

	.good-detail {
		.shop-img {
			width: 100%;
		}

		footer {
			$height: upx(98);

			position: fixed;
			bottom: 0;

			width: 100%;
			height: $height;

			display: flex;

			background: #fff;

			text-align: center;
			line-height: $height;
			font-size: $font-size-28;

			.custom {
				width: upx(300);
			}

			.buy{
				width: upx(450);
				background: #000;
				color: #fff;
			}
		}
	}
</style>
