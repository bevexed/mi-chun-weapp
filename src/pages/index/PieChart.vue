<template>
	<view class="content">
		<view class="qiun-columns">
			<view class="qiun-charts">
				<canvas
					@touchstart="touchPie"
					canvas-id="canvasPie"
					class="charts"
					id="canvasPie"></canvas>
			</view>
		</view>
	</view>
</template>

<script lang="ts">
	// @ts-nocheck
	import Vue from 'vue';

	const uCharts = require('../../components/u-charts/u-charts');

	let _self: any;
	let canvaPie: any = null;

	export default Vue.extend({
			data() {
				return {
					cWidth: 200,
					cHeight: 200,
					pixelRatio: 1,
					serverData: '',
				}
			},
			mounted() {
				_self = this;
				//@ts-ignore
				this.cWidth = uni.upx2px(300);
				//@ts-ignore
				this.cHeight = uni.upx2px(300);
				this.getServerData();
			},
			methods: {
				getServerData() {
					uni.request({
						url: 'https://www.easy-mock.com/mock/5cc586b64fc5576cba3d647b/uni-wx-charts/chartsdata2',
						data: {},
						success: function (res) {
							//@ts-ignore
							console.log(res.data.data)
							let Pie = {series: []};
							//这里我后台返回的是数组，所以用等于，如果您后台返回的是单条数据，需要push进去
							//@ts-ignore

							Pie.series = res.data.data.Pie.series;
							_self.showPie("canvasPie", Pie);
						},
						fail: () => {
							_self.tips = "网络错误，小程序端请检查合法域名";
						},
					});
				},
				//@ts-ignore

				showPie(canvasId, chartData) {
					canvaPie = new uCharts({
						$this: _self,
						canvasId: canvasId,
						type: 'pie',
						fontSize: 11,
						background: '#FFFFFF',
						pixelRatio: _self.pixelRatio,
						series: chartData.series,
						animation: true,
						width: _self.cWidth * _self.pixelRatio,
						height: _self.cHeight * _self.pixelRatio,
						legend: false,
						dataLabel: false,
						extra: {
							pie: {
								//@ts-ignore
								lableWidth: 15
							}
						},
					});
				},
				touchPie(e: any) {
					canvaPie.showToolTip(e, {
						//@ts-ignore

						format: function (item) {
							return item.name + ':' + item.data
						}
					});
				},
			}
		}
	);
</script>

<style lang="scss" scoped>
	.charts {
		width: upx(300);
	}

</style>
