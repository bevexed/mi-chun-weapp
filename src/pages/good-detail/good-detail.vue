<template>
	<div class="good-detail">
		<image class="shop-img" mode="widthFix" src="../../static/dev/1.jpg" v-for="(img,imgIndex) in sku.images" :key="imgIndex"></image>

		<footer>
			<div class="custom"><button open-type="contact">客服</button></div>
			<div class="buy" @tap="popShow = true">立即购买</div>
		</footer>

		<section :class="['pop-warp',  {'pop-warp-open':popShow}]" @tap.stop="popShow = false">
			<section :class="['pop',  {'pop-open':popShow}]"  @tap.stop>
				<header>
					<img alt="" mode="widthFix" src="../../static/dev/1.jpg">
					<div>
						<div class="name">{{ sku.title }}</div>
						<div class="price">￥{{ sku.couponPrice }} <span>￥{{ sku.price }}</span></div>
					</div>
				</header>

				<section class="color" v-for="(attr,attrIndex) in productInfo.attribes" :key="attrIndex">
					<div class="title"> {{ attr.attributeTitle }}</div>

					<div class="tabs">
						<div
							:class="['tab',{'tab-active':index === cur[attrIndex]}]"
							:key="index"
							@tap="handelChange(index,attrIndex)"
							v-for="(tab,index) in attr.items"
						>
							{{tab.attributeTitle}}
						</div>
					</div>
				</section>


				<section class="num">
					<div class="title">购买数量</div>
					<div class="red">限购{{ sku.stockCount }}件</div>
					<uni-number-box :max="sku.stockCount" :min="1" @change="handleNum"></uni-number-box>
				</section>

				<section class="buy-now" @tap="toSubmitOrder">
					立即购买
				</section>

			</section>
		</section>
	</div>
</template>

<script lang="ts">
	import Vue from 'vue'

	import {uniNumberBox} from '@dcloudio/uni-ui'
	import { mapActions, mapState } from 'vuex';

	export default Vue.extend({
		name: "good-detail",
		components: {
			uniNumberBox
		},
		async onLoad(e: any) {
			const { skuId } = e;
			console.log(skuId);
			this.skuId = skuId;
			await this.getProductInfo(skuId)
		 	this.sku = this.productInfo.skus.filter((item:any)=> item.skuId === Number(skuId))[0]
		},
		data() {
			return {
				skuId: '',

				sku:{},

				tabList: ['金色', '黑色', '天空灰'],

				typeList: ['标准款', '高级'],

				cur: [0, 0],

				popShow: false,

				count:0,
			}
		},
		computed: {
			...mapState('Product', ['productInfo']),
		},
		methods: {
			...mapActions('Product', ['getProductInfo']),
			handelChange(index: number, attr: number) {
				this.cur.splice(attr, 1, index);
				console.log(this.cur);
			},

			handleNum(e: number) {
				this.count = e
			},


			toSubmitOrder(){
				this.popShow = false;

				uni.navigateTo({
					url:'/pages/submit-order/submit-order?sku='+this.skuId + '&count=' + this.count + '&attr=' + this.cur
				})
			}
		}
	})
</script>

<style lang="scss" scoped>
	@import "../../uni";

	.good-detail {
		.shop-img {
			width: 100%;
		}

		footer {
			$height: upx(98);

			position: fixed;
			bottom: 0;

			width: 100%;
			height: $height;

			display: flex;

			background: #fff;

			text-align: center;
			line-height: $height;
			font-size: $font-size-28;

			.custom {
				width: upx(300);
			}

			.buy {
				width: upx(450);
				background: #000;
				color: #fff;
			}
		}

		.pop-warp {
			z-index: 9;
			position: absolute;
			top: 0;

			width: 100vw;
			height: 100vh;

			background: rgba(0, 0, 0, .3);

			max-height: 0;
			transition: all .6s ease;

			&-open {
				overflow: visible;
				max-height: upx(10000);
			}

			.pop {
				position: fixed;
				bottom: 0;

				width: 100vw;

				border-radius: upx(16) upx(16) 0 0;

				background: #fff;

				max-height: 0;
				overflow: hidden;

				transition: all .5s ease;

				&-open {
					overflow: visible;
					max-height: upx(10000);
				}
			}

			header {
				display: flex;
				margin: upx(40);
				padding-bottom: upx(38);
				@include bbt;

				img {
					width: upx(200);

					border: upx(2) solid #999;

					margin-top: upx(-115);
					margin-right: upx(28);
				}

				.name {
					@include bold(28)
				}

				.price {
					@include bold(32);
					color: #FF0000;

					span {
						margin-left: upx(8);

						color: #9b9b9b;
						font-size: $font-size-20;
						text-decoration: line-through;
					}
				}

			}

			.color,
			.type,
			.num {
				margin: upx(30) upx(40);
				padding-bottom: upx(28);
				@include bbt;

				.title {
					font-size: $font-size-24;
					color: $uni-text-color-grey;
				}

				.tabs {
					display: flex;
				}

				.tab {
					margin: upx(20) upx(20) 0 0;
					padding: upx(14) upx(46);
					background: #f2f2f2;

					color: $uni-text-color;
					font-size: upx(24);

					border-radius: upx(10);

					&-active {
						color: #fff;
						background: #000;
					}
				}
			}

			.num {
				display: flex;
				align-items: center;
				margin-bottom: upx(300);

				.red {
					text-align: right;
					flex: 1;
					margin-right: upx(10);
					@include bold(24);
					color: #ff0000;
				}
			}

			.buy-now {
				height: upx(98);
				text-align: center;
				line-height: upx(98);
				font-size: upx(28);
				background: #000;
				color: #fff;
				margin-bottom: upx(40);
			}
		}

		button{
			border: none !important;
			outline: none !important;
			height: upx(100);
		}
	}
</style>
