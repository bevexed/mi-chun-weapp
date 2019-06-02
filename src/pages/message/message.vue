<template>
	<div class="message">
		<ul>
			<li
				@tap="fun"
			>
				<img alt="" src="../../static/out-b.png">

				<div class="my-border">
					<section class="detail">
						<header>活动精选</header>
						<footer>满199-100超值券等你使用！全场低至9.9起…</footer>
					</section>

					<section class="right">
						<header>9:33</header>
					</section>
				</div>
			</li>

			<li
				@tap="fun"
			>
				<img alt="" src="../../static/out-b.png">

				<div class="my-border">
					<section class="detail">
						<header>客服助手</header>
						<footer>在线客服资讯时间为09:00-24:00</footer>
					</section>

					<section class="right">
						<header>9:33</header>
					</section>
				</div>
			</li>

			<li
				@tap="fun"
			>
				<img alt="" src="../../static/out-b.png">

				<div class="my-border">
					<section class="detail">
						<header>物流助手</header>
						<footer> 您的订单836138173687已签收，请前往网易…</footer>
					</section>

					<section class="right">
						<header>9:33</header>
					</section>
				</div>
			</li>


		</ul>
	</div>

</template>

<script lang="ts">
	import Vue from 'vue'

	export default Vue.extend({
		name: "message",
		methods: {
			fun() {

			}
		}
	})
</script>


<style lang="scss" scoped>
	@import "../../uni";

	ul {
		background: white;
		overflow: hidden;
		transition: max-height .3s;

		li {
			display: flex;
			align-items: center;
			margin-left: upx(40);
			padding: upx(20) 0 0;


			&:last-child {
				.my-border {
					border: none;
				}
			}


			img {
				width: upx(80);
				height: upx(80);
				margin-right: upx(20);
			}

			.my-border {
				flex: 1;
				display: flex;
				align-items: center;
				@include bbt;
				padding: upx(16) 0;

			}


			.detail {
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				height: upx(80);
				flex: 1;

				&:nth-child(n) {
					margin: upx(8) 0;
				}

				> header {
					@include bold(28)
				}

				div, footer {
					font-size: upx(22);
					color: $uni-text-color-grey;
				}
			}

			.right {
				height: upx(80);
				text-align: center;
				margin-right: upx(20);
				position: relative;

				header {
					font-size: $font-size-24;
					color: $uni-text-color-grey;
				}

			}


		}
	}
</style>
