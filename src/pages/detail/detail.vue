<template>
	<div class="detail">
		<div class="board">
			<img alt="" src="">
			<div class="body">
				<text class="title">{{ withdrawOrderInfo.accountText }}</text>
				<text class="num">X10</text>
			</div>
			<div class="footer" v-if="withdrawOrderInfo.money">
				{{ withdrawOrderInfo.money }}
			</div>
		</div>

		<div class="content">
			<ul>
				<li>
					<div class="label">
						当前状态
					</div>
					<div class="value">
						{{withdrawOrderInfo.stateText }}
					</div>
				</li>
				<li>
					<div class="label">
						提现金额
					</div>
					<div class="value">
						{{withdrawOrderInfo.stateText }}
					</div>
				</li>

				<li>
					<div class="label">
						所得税
					</div>
					<div class="value">
						{{withdrawOrderInfo.tax }}
					</div>
				</li>

				<li>
					<div class="label">
						手续费
					</div>
					<div class="value">
						{{withdrawOrderInfo.stateText }}
					</div>
				</li>

				<li>
					<div class="label">
						申请时间
					</div>
					<div class="value">
						{{withdrawOrderInfo.stateText }}
					</div>
				</li>

				<li>
					<div class="label">
						到账时间
					</div>
					<div class="value">
						{{withdrawOrderInfo.stateText }}
					</div>
				</li>

				<li>
					<div class="label">
						提现银行
					</div>
					<div class="value">
						{{withdrawOrderInfo.stateText }}
					</div>
				</li>

				<li>
					<div class="label">
						提现单号
					</div>
					<div class="value">
						{{withdrawOrderInfo.tradeNum }}
					</div>
				</li>


			</ul>
		</div>

	</div>
</template>

<script>
	import { mapActions, mapState } from "vuex";
	import Vue from "vue";

	export default Vue.extend({
		name: "detail",
		async onLoad(e) {
			await this.getWithdrawOrderInfo(e.id)
		},
		computed: mapState('Bank', ['withdrawOrderInfo']),
		methods: mapActions('Bank', ['getWithdrawOrderInfo'])
	})
</script>

<style lang="scss" scoped>
	@import "../../uni";

	page {
		background: white;
	}

	.detail {
		.board {
			text-align: center;
			width: upx(670);
			padding: upx(48) 0;
			margin: upx(40) auto;
			border-bottom: upx(1) solid #d6d6d6;

			img {
				width: upx(100);
				height: upx(100);
				border-radius: 50%;
				overflow: hidden;
				background: #666666;
			}

			.body {
				margin: upx(10);

				.title, .num {
					font-size: upx(32);
					font-weight: 400;
					color: #666666;
				}

				.num {
					margin-left: 1em;
				}


			}

			.footer {
				font-size: upx(48);
				font-weight: 600;
				margin: upx(20);
			}
		}

		.content {
			width: upx(670);
			margin: upx(54) auto;

			ul {
				li {
					display: flex;
					padding: upx(15) upx(40);
					align-items: center;

					.label {
						width: upx(100);
						font-size: upx(24);
						color: #999999;
						font-weight: 600;
						margin-right: upx(60);
					}

					.value {
						font-size: upx(24);
						color: #333;
						font-weight: 600;
					}
				}
			}
		}
	}
</style>
