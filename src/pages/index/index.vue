<template>
	<view class="content">
		<section class="board">
			<header>
				<div class="title">累计收益（元）</div>
				<div class="title-money">1280.00</div>
				<div class="title">待结算：360.00</div>
			</header>

			<footer>
				<section class="left">
					<div class="title">今日收益（元）</div>
					<div>480.00</div>
					<div class="bottom-title">昨日收益：780.00</div>
				</section>

				<section class="left">
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
						background-color="#ffffff"
						color="#666"
						scrollable="true"
						show-icon="true"
						single="true"
						speed="100"
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

		</footer>
	</view>
</template>

<script lang="ts">
	// @ts-nocheck
	import Vue from 'vue';
	import PieChart from './PieChart.vue'

	import {uniNoticeBar} from "@dcloudio/uni-ui"

	export default Vue.extend({
			data() {
				return {}
			},
			components: {
				'pie-chart': PieChart,
				uniNoticeBar,
			},
			onLoad() {

			},
			methods: {}
		}
	);
</script>

<style lang="scss" scoped>
	@import "../../uni";
	.content {
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

			header{
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

			footer{
				padding-top: upx(18);
				font-size: $font-size-20;
			}

		}

	}


</style>
