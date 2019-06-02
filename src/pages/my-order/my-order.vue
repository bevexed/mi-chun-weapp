<template>
	<div class="my-order">
		<ul>
			<li class="good" v-for="(i,index) in list" :key="index">
				<header>
					<img alt="" src="">
					<section class="right">
						<div class="detail">

							<div class="title">
								Y1迷纯雾化弹
							</div>
							<div class="content">
								一星-薄荷味-N5%
							</div>

							<div class="price">
								￥300.00
							</div>
						</div>

						<div class="rest">
							<div>x10</div>
							<div>返利￥7.35</div>
						</div>
					</section>
				</header>

				<section class="form">
					<ul>
						<li>
							订单编号：1278638716237851
						</li>
						<li>
							支付编号：1278638716237851
						</li>
						<li>
							收货人：张三
						</li>
						<li>
							手机号：13888888888
						</li>
						<li>
							收货地址：浙江省杭州市西湖区天目山路xx号xx大厦
						</li>

					</ul>
				</section>

				<!-- 待发货 -->
				<footer class="footer" v-if="i  === 1">
					<div class="buttons">
						<my-button height="50" title="取消订单" width="180"></my-button>
					</div>

					<div class="state">
						待发货
					</div>
				</footer>

				<!-- 订单完成 -->
				<footer class="footer"  v-if="i  === 2">
					<div class="buttons">
						<my-button height="50" title="申请售后" width="180"></my-button>
					</div>

					<div class="state">
						订单完成
					</div>
				</footer>

				<!-- 订单完成 -->
				<footer class="footer"  v-if="i  === 3">
					<div class="buttons">
					</div>

					<div class="state">
						订单完成
					</div>
				</footer>

				<!-- 售后未通过 -->
				<footer class="footer"  v-if="i  === 4">
					<div class="buttons">
						<my-button height="50" title="申请售后" width="180"></my-button>
					</div>

					<div class="state">
						售后未通过
					</div>
				</footer>

				<!-- 待付款 -->
				<footer class="footer"  v-if="i  === 5">
					<div class="buttons">
						<my-button height="50" title="去支付" width="180"></my-button>
						<my-button background-color="#fff" color="#000" height="50" title="取消订单" width="180"></my-button>
					</div>

					<div class="state">
						待付款
					</div>
				</footer>

				<!-- 已发货 -->
				<footer class="footer"  v-if="i  === 6">
					<div class="buttons">
						<my-button height="50" title="确认收货" width="180"></my-button>
						<my-button background-color="#fff" color="#000" height="50" title="查看物流" width="180"></my-button>
					</div>

					<div class="state">
						已发货
					</div>
				</footer>

				<!-- 售后中 -->
				<footer class="footer"  v-if="i  === 7">
					<div class="buttons">
						<my-button height="50" title="取消售后" width="180"></my-button>
					</div>

					<div class="state">
						售后中
					</div>
				</footer>

				<!-- 退款成功 -->
				<footer class="footer"  v-if="i  === 8">
					<div class="buttons">
					</div>

					<div class="state">
						退款成功
					</div>
				</footer>

				<!-- 交易关闭 -->
				<footer class="footer" v-if="i === 9">
					<div class="buttons">
					</div>

					<div class="state">
						交易关闭
					</div>
				</footer>

			</li>
		</ul>
	</div>
</template>

<script lang="ts">
	import Vue from 'vue'
	import MyButton from '../../components/button/button.vue'

	export default Vue.extend({
		name: "my-order",
		components: {
			MyButton
		},
		data(){
			return{
				list:[1,2,3,4,5,6,7,8,9]
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
			&:last-child{
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
