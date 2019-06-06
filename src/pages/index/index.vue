<template>
	<view class="content">
		<section class="board">
			<header @tap="toAllCome">
				<div class="title">累计收益（元）</div>
				<div class="title-money">1280.00</div>
				<div class="title">待结算：360.00</div>
			</header>

			<footer>
				<section @tap="toTodayCome" class="left">
					<div class="title">今日收益（元）</div>
					<div>480.00</div>
					<div class="bottom-title">昨日收益：780.00</div>
				</section>

				<section @tap="toCustomerListType" class="left">
					<div class="title">累计客户（人）</div>
					<div>48</div>
					<div class="bottom-title">今日新增:30</div>
				</section>
			</footer>

		</section>

		<footer class="footer">


			<section class="card">
				<div class="chart-title">十亿消费佣金池</div>
				<section class="notice">
					<uni-notice-bar
						:scrollable="true"
						:show-icon="true"
						:single="true"
						:speed="100"
						background-color="#ffffff"
						color="#666"
						text="10亿资金池消费佣金活动由主办方【迷纯雾化器】提供一款纯正的减害">
					</uni-notice-bar>
				</section>

				<section :style="{background:`linear-gradient(90deg, #333 12%, #fff 0);`}"
								 class="progress">
					总进度：230W/0.023%
				</section>

				<section class="my-chart">

					<section class="pie">
						<pie-chart/>
					</section>

					<section class="table">
						<header>
							<section class="list">
								<div class="left first"></div>
								<div class="content">Y1迷纯雾化器 57% = 130W</div>
							</section>
							<section class="list">
								<div class="left second"></div>
								<div class="content">Y1迷纯雾化器 57% = 130W</div>
							</section>
						</header>

						<footer>
							消费佣金池只包含雾化器、雾化弹的份额
						</footer>
					</section>
				</section>
			</section>


			<section class="pattern">
				<header class="no-way" v-if="true">
					<my-button :height="56" :margin="20" :width="180" title="去绑定"></my-button>
					<div>可选择绑定管理员获得无惩罚的佣金加成</div>
				</header>


				<header v-else>
					<div class="left">
						<div>
							<span class="label">	合伙人：</span>
							<span class="value">杭州吴彦祖</span>
							<span class="id">ID：12321321312</span>
						</div>

						<div class="note">
							（注：合伙人40天内未消费40元以上商品
							或未有其他用户绑定，用户加成额度减半）
						</div>
					</div>


					<div class="right">
						<my-button :height="56" :width="160" title="解绑"></my-button>
						<div>
							活跃倒计时：<span>0 </span> 天
						</div>
					</div>

				</header>

				<section class="detail bbt">
					<!--<div class="title">佣金额度</div>-->

					<div class="tr tr-title">
						<div>
							<div class="table-title">
								佣金额度
							</div>
						</div>
						<div>初始额度</div>
						<div></div>
						<div>绑定加成额度</div>
						<div></div>
						<div>最终额度</div>
					</div>

					<div class="tr">
						<div class="row-title">雾化器</div>
						<div>25%</div>
						<div>+</div>
						<div>7.5%</div>
						<div>=</div>
						<div>32.5</div>
					</div>

					<div class="tr">
						<div class="row-title">雾化弹</div>
						<div>25%</div>
						<div>+</div>
						<div>7.5%</div>
						<div>=</div>
						<div>32.5</div>
					</div>

				</section>


				<section class="detail">
					<!--					<div class="title">消费返利额度 </div>-->

					<div class="tr tr-title">
						<div>
							<div class="table-title">消费者返利额度</div>
						</div>
						<div>初始额度</div>
						<div></div>
						<div>绑定加成额度</div>
						<div></div>
						<div>最终额度</div>
					</div>

					<div class="tr">
						<div class="row-title"> 雾化器</div>
						<div>25%</div>
						<div>+</div>
						<div>15%</div>
						<div>=</div>
						<div>40%</div>
					</div>

					<div class="tr">
						<div class="row-title">雾化弹</div>
						<div>7%</div>
						<div>+</div>
						<div>8%</div>
						<div>=</div>
						<div>15%</div>
					</div>
				</section>
			</section>

		</footer>

		<div class="margin-40">
			<my-button
				title="分享推广商品"
			></my-button>
		</div>


	</view>
</template>

<script lang="ts">
	// @ts-nocheck
	import Vue from 'vue';
	import PieChart from './PieChart.vue'

	import MyButton from '@/components/button/button.vue'
	import {uniNoticeBar} from "@dcloudio/uni-ui"

	export default Vue.extend({
			components: {
				PieChart,
				uniNoticeBar,
				MyButton
			},
			onLoad() {

			},
			data() {
				return {}
			},
			methods: {
				toAllCome() {
					uni.navigateTo({
						url: '/pages/all-come/all-come'
					})
				},
				toTodayCome() {
					uni.navigateTo({
						url: '/pages/today-come/today-come'
					})
				},
				toCustomerListType() {
					uni.navigateTo({
						url: '/pages/customer-list-type/customer-list-type'
					})
				}
			}
		}
	);
</script>

<style lang="scss" scoped>
	@import "../../uni";

	.content {
		width: upx(750);
		overflow-x: hidden;

		.board {
			background: $theme-background-color;
			color: #fff;
			padding: upx(50) 0 upx(80);

			footer {
				margin-top: upx(30);
				display: flex;

				> section {
					width: 50%;
					display: flex;
					flex-direction: column;
					align-items: center;
					position: relative;

					&:first-child:after {
						position: absolute;
						right: 0;
						top: 0;
						bottom: 0;
						margin: auto;
						content: '';
						height: upx(88);
						width: upx(2);
						background: rgba(255, 255, 255, .7);
					}
				}
			}
		}

		.title {
			font-size: $font-size-24;
			text-align: center;
			opacity: .75;
		}

		.title-money {
			font-size: $font-size-68;
			text-align: center;
		}

		.bottom-title {
			font-size: $font-size-24;
			text-align: center;
		}

		.footer {
			position: relative;
			top: upx(-40);
		}


		.card {
			box-sizing: border-box;
			width: upx(710);
			height: upx(506);
			margin: 0 auto;
			padding: upx(20);
			text-align: center;
			background: rgba(255, 255, 255, 1);
			box-shadow: upx(4) upx(4) upx(20) 0 rgba(0, 0, 0, 0.25);
			border-radius: $theme-border-radius;
		}

		.chart-title {
			@include bold(32)
		}

		.notice {
			@include space(12);
			height: upx(60);
			border-bottom: upx(1) solid #f2f2f2;
		}

		.progress {
			@include space(16);

			width: upx(670);
			height: upx(50);
			line-height: upx(50);
			font-size: upx(20);
			border-radius: upx(25);
			border: #333 solid 1px;
		}

		.my-chart {
			position: relative;
		}

		.pie {
			width: 40%;
			position: relative;
			left: upx(-40);
			top: upx(-20);
		}

		.table {
			@include bold(24);

			z-index: 999;
			position: absolute;
			right: upx(-80);
			top: upx(30);
			width: upx(440);
			background: #fff;
			padding: upx(20);
			text-align: left;
			box-shadow: upx(4) upx(4) upx(20) 0 rgba(0, 0, 0, 0.25);

			header {
				border-bottom: 1px solid #eeeeee;
			}

			.left {
				width: upx(40);
				height: upx(20);
				border-radius: upx(8);

				&.first {
					background: #ddd;
				}

				&.second {
					background: #666;
				}
			}

			.list {
				display: flex;
				align-items: center;
				margin-bottom: upx(18);

				.content {
					width: upx(330);
					margin-left: upx(20);
				}
			}

			footer {
				padding-top: upx(18);
				font-size: $font-size-20;
			}

		}


		.pattern {
			@extend .card;
			margin-top: upx(40);
			height: auto;
			text-align: left;

			header {
				height: upx(160);
				display: flex;
				justify-content: space-between;
				@include bbt;

				.left {
					width: upx(380);


					.label {
						@include bold(20)
					}

					.value {
						@include bold(24)
					}

					.id {
						margin-left: upx(4);
						font-size: $font-size-20;
					}

					.note {
						font-size: $font-size-20;
						color: #666;
					}
				}


				.right {
					height: upx(200);
					width: upx(170);
					@include bold(20);
					margin-right: upx(20);

					div {
						display: flex;
						align-items: center;
						justify-content: flex-end;
						margin-top: upx(18);

						span {
							@include bold(32);
							margin-right: upx(2);
							flex: 1;
						}
					}
				}
			}

			.detail {
				/*height: upx(230);*/
				padding: upx(20) 0;

				&.bbt {
					@include bbt;
				}

				.table-title {
					@include bold(32);
					display: inline;
					color: #fff !important;
					background: #000;
					border-radius: upx(10);
					padding: upx(6) upx(10);
					text-align: center;
				}


				.tr {
					display: flex;
					font-size: $font-size-20;
					font-family: PingFangSC-Regular, serif;
					font-weight: 400;
					color: rgba(102, 102, 102, 1);

					> div {
						margin-bottom: upx(16);
					}

					.row-title {
						text-indent: .5em;
					}

					&-title {
						@include bold(20);
						font-weight: 400;
						color: #333;
					}

					:nth-child(1) {
						@include bold(20);
						width: upx(180);
						text-align: left;
					}

					:nth-child(2) {
						width: upx(120);
						text-align: center;
					}

					:nth-child(3) {
						width: upx(40);
						text-align: center;
					}

					:nth-child(4) {
						width: upx(150);
						text-align: center;
					}

					:nth-child(5) {
						width: upx(88);
						text-align: center;
					}

					:nth-child(6) {
						width: upx(100);
						text-align: center;
					}
				}
			}
		}


		header.no-way {
			margin-top: upx(-20);
			display: flex;
			flex-direction: column;
			justify-content: center;
			text-align: center;
			font-size: upx(20);
		}

	}


</style>
