<template>
	<div class="person-list">
		<ul>
			<li :key="goodIndex" v-for="(good,goodIndex) in [1,2,3,4,5]">
				<img alt="" src="../../static/out-b.png">

				<div class="my-border">
					<section class="detail">
						<header>会飞的吴彦祖</header>
						<div>Y1迷纯雾化器</div>
						<footer>5月1日 13:33</footer>
					</section>

					<div class="amount">x1</div>

					<section class="right">
						<header>+15.60</header>
						<footer>已存入</footer>
					</section>
				</div>


			</li>
		</ul>
	</div>
</template>

<script>
	import Vue from 'vue'

	export default Vue.extend({
		props: {},
	});
</script>

<style lang="scss" scoped>
	ul {
		background: white;
		overflow: hidden;
		transition: max-height .3s;

		li {
			display: flex;
			align-items: center;
			margin-left: upx(40);


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
				width: upx(200);

				&:nth-child(n) {
					margin: upx(4) 0;
				}

				> header {
					@include bold(28)
				}

				div, footer {
					font-size: upx(22);
					color: $uni-text-color-grey;
				}
			}

			.amount {
				@include bold(28);
				padding: 0 upx(150) 0 upx(100);
			}

			.right {
				height: upx(80);
				display: flex;
				flex-direction: column;
				justify-content: space-around;
				text-align: center;

				header {
					@include bold(28)
				}

				footer {
					font-size: $font-size-24;
					color: $uni-text-color-grey;
				}
			}


		}
	}
</style>
