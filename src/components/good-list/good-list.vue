<template>
	<div class="person-list">
		<ul>
			<li :key="goodIndex" v-for="(good,goodIndex) in shopList">
				<img alt="" :src="good.avatar">

				<div class="my-border">
					<section class="detail">
						<header>{{ good.skuName }}</header>
						<div>{{ good.skuAttributed }}</div>
						<footer>{{ good.date }}</footer>
					</section>

					<div class="amount">x{{ good.skuCount }}</div>

					<section class="right">
						<header>{{ good.incomeSymbol }} {{ good.money }}</header>
						<footer>已{{ good.incomeType == 1 ? '入账' : '退账' }}</footer>
					</section>
				</div>


			</li>
		</ul>
	</div>
</template>

<script>
	import Vue from 'vue'

	export default Vue.extend({
		props: {
			shopList: {
				type: Array,
				default: []
			}
		},
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
