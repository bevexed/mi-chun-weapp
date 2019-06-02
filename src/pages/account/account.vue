<template>
	<div class="account">
		<header>
			<img alt="" src="../../static/last-b.png">

			<div class="title">我的账户</div>

			<div class="money">￥320.00</div>
		</header>

		<footer>
			<my-button
				title="提现"
				height="80"
				width="360"
			></my-button>
			<my-button
				title="明细"
				height="80"
				width="360"
				background-color="#fff"
				color="#000"
				margin="40"
			></my-button>
		</footer>
	</div>
</template>

<script lang="ts">
	import Vue from 'vue'
	import MyButton from '@/components/button/button.vue'

	export default Vue.extend({
		components: {
			MyButton
		}
	});
</script>

<style lang="scss" scoped>
	@import "../../uni";

	.account {
		header {
			text-align: center;
			padding: upx(100) 0 upx(250);

			img {
				width: upx(100);
				height: upx(100);
			}

			.title {
				@include bold(32);
				padding: upx(30);
			}

			.money {
				@include bold(60)
			}
		}

	}
</style>


