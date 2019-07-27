<template>
	<view class="content">
		<section class="board">
			<header @tap="toAllCome(info.profit)">
				<div class="title">累计收益（元）</div>
				<div class="title-money">{{ info.profit}}</div>
<!--				<div class="title">待结算：360.00</div>-->
			</header>

			<footer>
				<section @tap="toTodayCome" class="left">
					<div class="title">今日收益（元）</div>
					<div>{{ info.profitToday }}</div>
					<div class="bottom-title">昨日收益：{{ info.profitYesterday }}</div>
				</section>

				<section @tap="toCustomerListType" class="left">
					<div class="title">累计客户（人）</div>
					<div>{{ info.customerCount }}</div>
					<div class="bottom-title">今日新增:{{ info.customerCountToday }}</div>
				</section>
			</footer>

		</section>

		<footer class="footer">


			<section class="card">
				<div class="chart-title">{{ activity.title }}</div>
				<section class="notice">
					<uni-notice-bar
						:scrollable="true"
						:show-icon="true"
						:single="true"
						:speed="50"
						background-color="#ffffff"
						color="#666"
						:text="activity.tips">
					</uni-notice-bar>
				</section>

				<section :style="{background:`linear-gradient(90deg, #333 ${activity.progress * 100}%, #fff 0);`}"
								 class="progress">
					{{ activity.progressText }}
				</section>

				<section class="my-chart">

					<section class="pie">
						<pie-chart
							v-if="activity.consumeProgress"
							:a="activity.consumeProgress"
							:b="activity.hardWareProgress">
						</pie-chart>
					</section>

					<section class="table">
						<header>
							<section class="list">
								<div class="left first"></div>
								<div class="content">{{ activity.consumeProgressText }}</div>
							</section>
							<section class="list">
								<div class="left second"></div>
								<div class="content">{{ activity.hardWareProgressText }}</div>
							</section>
						</header>

						<footer>
							{{ activity.remark }}
						</footer>
					</section>
				</section>
			</section>


			<section class="pattern">
				<header class="no-way" v-if="info.partnerDidBind === 0">
					<my-button :height="56" :margin="20" :width="180" title="去绑定" @tap="toBind"></my-button>
					<div>可选择绑定管理员获得无惩罚的佣金加成</div>
				</header>

					<!--todo:绑定，解绑弹窗-->
				<header v-if="info.partnerDidBind === 1">
					<div class="left">
						<div>
							<span class="label">	合伙人：</span>
							<span class="value">杭州吴彦祖</span>
							<span class="id">ID：{{ info.partnerUserId }}</span>
						</div>
						<div class="label">
							活跃倒计时：<span class="value" style="font-size:16rpx">{{ info.activityCountDownDay }} </span> 天
						</div>

<!--						<div class="note">-->
<!--							（注：合伙人40天内未消费40元以上商品-->
<!--							或未有其他用户绑定，用户加成额度减半）-->
<!--						</div>-->
					</div>


					<div class="right">
						<my-button :height="56" :width="160" title="解绑" @tap="relieve"></my-button>
						<div>
<!--							活跃倒计时：<span>0 </span> 天-->
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
						<div>{{ info.hardwareCommissionRatioFlexed }}%</div>
						<div>+</div>
						<div>{{ info.hardwareCommissionRatioRelatived }}%</div>
						<div>=</div>
						<div>{{ info.hardwareCommissionRatioFlexed + info.hardwareCommissionRatioRelatived }}%</div>
					</div>

					<div class="tr">
						<div class="row-title">雾化弹</div>
						<div>{{ info.consumeCommissionRatioFlexed }}%</div>
						<div>+</div>
						<div>{{ info.consumeCommissionRatioRelatived }}%</div>
						<div>=</div>
						<div>{{ info.consumeCommissionRatioFlexed + info.consumeCommissionRatioRelatived }}%</div>
					</div>

				</section>


				<section class="detail">
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
						<div>{{ info.hardwareFanliRatioFlexed }}%</div>
						<div>+</div>
						<div>{{ info.hardwareFanliRatioRelatived }}%</div>
						<div>=</div>
						<div>{{ info.hardwareFanliRatioFlexed + info.hardwareFanliRatioRelatived }}%</div>
					</div>

					<div class="tr">
						<div class="row-title">雾化弹</div>
						<div>{{ info.consumeFanliRatioFlexed }}%</div>
						<div>+</div>
						<div>{{ info.consumeFanliRatioRelatived }}%</div>
						<div>=</div>
						<div>{{ info.consumeFanliRatioFlexed + info.consumeFanliRatioRelatived}}%</div>
					</div>
				</section>

				<img src="../../static/index/index_1.jpg" alt="" mode="widthFix">
			</section>

		</footer>

		<img class="index_2" src="../../static/index/index_2.jpg" alt="" mode="widthFix">

		<div style="padding:40px 0"></div>
		<div class="fix">
			<my-button
				title="分享推广商品"
			></my-button>
		</div>


	</view>
</template>

<script lang="ts">
	import Vue from 'vue';
	import PieChart from './PieChart.vue'
	import { reqInfo } from "@/api/home";

	import MyButton from '@/components/button/button.vue'
	import uniNoticeBar from "../../components/uni-notice-bar/uni-notice-bar.vue"
	import { SHOW_MODAL, SHOW_MSG } from "@/utils";
	import { reqUnBind } from "@/api/user";

	export default Vue.extend({
			components: {
				PieChart,
				uniNoticeBar,
				MyButton
			},
			onShow() {
				this.getInfo();
			},
			data() {
				return {
					info: {},
					activity:{}
				}
			},
			methods: {
				async getInfo() {
					let res = await reqInfo();
					if (res.code === 0) {
						this.info = res.data;
						this.activity = res.data.activity
					}
				},

				toAllCome(all:any) {
					uni.navigateTo({
						url: '/pages/all-come/all-come?all='+all
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
				},
				toBind(){
					uni.navigateTo({
						url:'/pages/bind/bind'
					})
				},
				relieve(){
					SHOW_MODAL({
						content:'确认解绑吗？',
						title:'',
						success:async()=>{
							let res = await reqUnBind()
							if (res.code === 0) {
								SHOW_MSG({
									title:'解除成功'
								})
								setTimeout(()=>{
									this.getInfo()
								},2000)
							}
						}
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
					display: flex;
					align-items: center;
					/*height: upx(200);*/
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

		.index_2{
			width: 100vw;
		}

		.fix{
			position: fixed;
			bottom: upx(40);
			left: 0;
			right: 0;
			margin: auto;
		}
	}


</style>
