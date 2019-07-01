<template>
	<div class="my-order">
		<ul>
			<li class="good" v-for="(order,listIndex) in orderList" :key="listIndex">
				<header v-for="(good,goodIndex) in order.skus" :key="goodIndex">
					<img alt="" :src="order.images[0]">
					<section class="right">
						<div class="detail">

							<div class="title">
								{{ good.title }}
							</div>
							<div class="content">
								{{ good.content }}
							</div>

							<div class="price">
								￥{{ good.checkOutPrice }}
							</div>
						</div>

						<div class="rest">
							<div>x{{ good.count }}</div>
							<div>返利￥{{ good.profitMoney }}</div>
						</div>
					</section>
				</header>

				<section class="form">
					<ul>
						<li>
							订单编号：{{ order.orderNum }}
						</li>
						<li>
							支付编号：{{ order.payDate }}
						</li>
						<li>
							收货人：{{ order.receiveName }}
						</li>
						<li>
							手机号：{{ order.receivePhone }}
						</li>
						<li>
							收货地址：{{ order.receiveAddress }}
						</li>

					</ul>
				</section>

				<!-- 待发货 -->
				<footer class="footer">
					<div class="buttons">
						<my-button
							v-for="(button ,index) in order.completions"
							:key="index"
							:height="50"
							:title="button.title"
							@tap="doComplete(order.completions[index].action)"
							:width="180"></my-button>
					</div>

					<div class="state">
						{{ order.stateText }}
					</div>
				</footer>

			</li>
		</ul>
	</div>
</template>

<script lang="ts">
	import Vue from 'vue'
	import MyButton from '../../components/button/button.vue'
	import { mapActions, mapState } from 'vuex';
	import { ajax } from "@/api/api";

	export default Vue.extend({
		name: "my-order",
		components: {
			MyButton
		},
		async onShow() {
			await this.getOrderList({})
		},
		computed: mapState('Order', ['orderList']),
		methods: {
			...mapActions('Order', ['getOrderList']),

			async doComplete(url: string) {
				let res = await ajax(url, {}, 'GET');
				if (res.code === 0){
					await this.getOrderList({});
					uni.showToast({title:'操作成功'})
				}
			}
		},
		data() {
			return {
				list: [1, 2, 3, 4, 5, 6, 7, 8, 9]
			}
		}
	})
</script>

<style lang="scss" scoped>
	@import "../../uni";

	.my-order {
		.good {
			background: #fff;
			margin: upx(20) 0 0 0;
			padding: upx(30) upx(30) 0;

			&:last-child {
				margin-bottom: upx(40);
			}

			header {
				display: flex;
				align-items: center;
				padding-bottom: upx(40);
				@include bbt;

				.right {
					flex: 1;
					display: flex;
					justify-content: space-between;
					align-items: center;
					height: upx(160);
				}

				.detail {
					height: upx(160);
					display: flex;
					flex-direction: column;
				}

				.title {
					@include bold(24)
				}

				.content {
					flex: 1;
					font-size: $font-size-24;
					color: $uni-text-color;
					margin-top: upx(8);
				}

				.price {
					@include bold(32)
				}

				.rest {
					font-size: $font-size-24;
					text-align: right;

					:first-child {
						color: $uni-text-color;
					}

					:last-child {
						color: #666;
					}
				}
			}

			img {
				width: upx(160);
				height: upx(160);
				background: #d8d8d8;
				margin-right: upx(20);
			}
		}

		.form {
			padding: upx(30) 0;
			font-size: $font-size-24;
			color: #666;
			line-height: 1.8em;
			@include bbt;
		}

		.footer {
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding: upx(20) 0;

			.buttons {
				display: flex;

				:nth-child(n) {
					margin-right: upx(5);
				}
			}

			.state {
				font-size: $font-size-24;
				color: $uni-text-color;
			}
		}
	}
</style>
