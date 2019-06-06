<template>
	<div class="submit-order">
		<header class="">
			<img alt="" src="../../static/address.png">
			<div class="right">
				<div class="name">吴彦祖 <span class="phone">13111114444</span></div>
				<div class="address">浙江省杭州市滨江区网商路399号网易二期</div>
			</div>
		</header>


		<footer>
			<div class="good-detail">
				<img alt="" src="../../static/dev/1.jpg">
				<div class="center">
					<div class="good-name">Y1迷纯雾化器</div>
					<div class="good-type">金色-标准款</div>
					<div class="good-price">￥49.00</div>
				</div>

				<div class="num">
					X1
				</div>
			</div>

			<ul>
				<li>
					<div>返利</div>
					<div class="gray">特殊商品无消费返利</div>
				</li>
				<li>
					<div>合计</div>
					<div class="red">￥39.00</div>
				</li>
				<li class="input">
					<div>备注</div>
					<div class="gray"><input placeholder="请输入备注" type="text"></div>
				</li>
			</ul>
		</footer>

		<aside>
			<div class="title">实付款：</div>
			<div class="red">￥39.00</div>
			<my-button :width="200" :height="70" title="付款"></my-button>
		</aside>
	</div>
</template>

<script lang="ts">
	import Vue from 'vue'
	import myButton from '../../components/button/button.vue'

	export default Vue.extend({
		name: "submit-order",
		components: {
			myButton
		}
	})
</script>

<style lang="scss" scoped>
	@import "../../uni";

	.submit-order {
		header {
			display: flex;
			align-items: center;
			box-sizing: border-box;
			width: upx(710);
			background: #fff;
			padding: upx(40) upx(20);
			margin: upx(20);
			border-radius: upx(10);

			img {
				width: upx(60);
				height: upx(60);
				margin-right: upx(20);
			}

			.name {
				@include bold(28);

				span {
					margin-left: upx(10);
					font-size: $font-size-24;
					color: $uni-text-color-grey;
				}
			}

			.address {
				@include bold(24);
			}
		}

		footer {
			box-sizing: border-box;
			padding: upx(40) upx(20);
			width: upx(710);
			background: #fff;
			margin: 0 auto;
			border-radius: upx(10);

			.good-detail {
				display: flex;
				align-items: center;
				padding-bottom: upx(40);
				@include bbt;

				.center {
					height: upx(180);
					flex: 1;
					display: flex;
					flex-direction: column;
				}
			}

			img {
				width: upx(200);
				height: upx(200);
				margin-right: upx(20);
			}

			.good-name {
				@include bold(28)
			}

			.good-type {
				flex: 1;
				font-size: $font-size-24;
				margin-top: upx(10);
			}

			.good-price {
				@include bold(34);
				color: #ff0000;
			}

			.num {
				font-size: $font-size-28;
				color: $uni-text-color-grey;
			}

			ul {
				li {
					padding: upx(30) upx(40);
					display: flex;
					justify-content: space-between;
					@include bbt;

					:first-child {
						@include bold(24)
					}

				}

				.input {
					justify-content: flex-start;
					align-items: center;

					.gray {
						margin-left: upx(20);
					}
				}
			}

			.gray {
				color: $uni-text-color-grey;
				font-size: $font-size-24;
			}

			.red {
				@include bold(24);
				color: #ff0000;
			}


		}

		aside {
			box-sizing: border-box;
			padding: upx(28) upx(20);
			display: flex;
			justify-content: flex-end;
			align-items: center;
			width: 100vw;
			height: upx(166);
			position: fixed;
			bottom: 0;
			background: #fff;

			.title{
				@include bold(24);
				color: #333;
			}

			.red {
				@include bold(36);
				color: #ff0000;
				margin-right: upx(20);
			}


		}
	}
</style>
