<template>
	<div class="submit-order">
		<header @tap="toSelectAddress" class="add" v-for="(address,addressIndex) in addressList" v-if="addressIndex === current"
						:key="addressIndex">
			<img alt="" src="../../static/address.png">
			<div class="right">
				<div class="name">{{ address.userName }} <span class="phone">{{ address.phone }}</span></div>
				<div class="address">{{ address.address }}</div>
			</div>
		</header>


		<footer>
			<div class="good-detail">
				<img alt="" src="../../static/dev/1.jpg">
				<div class="center">
					<div class="good-name">{{ productInfo.productName }}</div>
					<div class="good-type">{{ info }}</div>
					<div class="good-price">￥{{ price }}</div>
				</div>

				<div class="num">
					X{{ counts }}
				</div>
			</div>

			<ul>
				<li>
					<div>返利</div>
					<div class="gray">特殊商品无消费返利</div>
				</li>
				<li>
					<div>合计</div>
					<div class="red">￥{{  price * (counts - 0) }}</div>
				</li>
				<li class="input">
					<div>备注</div>
					<div class="gray"><input placeholder="请输入备注" type="text"></div>
				</li>
			</ul>
		</footer>

		<aside>
			<div class="title">实付款：</div>
			<div class="red">￥{{ price * (counts - 0) }}</div>
			<my-button :height="70" :width="200" @tap="createOrder" title="付款"></my-button>
		</aside>


		<section :class="['pop-warp',  {'pop-warp-open':popShow}]" @tap.stop="popShow = false">
			<section :class="['pop',  {'pop-open':popShow}]" @tap.stop>
				<header class="title">
					<h1>选择支付方式</h1>
				</header>

				<ul>
					<li>
						<img alt="" src="../../static/last.png">
						<div>余额支付</div>
					</li>
					<li>
						<img alt="" src="../../static/cute.png">
						<div>微信钱包</div>
					</li>
				</ul>

				<my-button :margin="60" :title="'支付￥'+payMoney"></my-button>


			</section>
		</section>

	</div>
</template>

<script lang="ts">
	import Vue from 'vue'
	import myButton from '../../components/button/button.vue'
	import { mapState, mapActions, mapGetters } from 'vuex';
	import { reqCreateOrder } from "@/api/order";

	export default Vue.extend({
		name: "submit-order",
		components: {
			myButton
		},
		data() {
			return {
				popShow: false,

				skus: '',
				counts: '',

				price:'',

				info:'',


				payMoney: ''
			}
		},
		async onLoad(e: { count: string, sku: string,attr:string }) {
			const { count, sku , attr} = e;
			this.counts = count;
			this.skus = sku;
			await this.getAddressList()



			this.price = this.productInfo.skus.filter((item:any)=> item.skuId === Number(sku))[0].couponPrice
			this.info = this.productInfo.attribes[0].items[attr[0]].attributeTitle + this.productInfo.attribes[1].items[attr[2]].attributeTitle
			this.price = this.productInfo.skus.filter((item:any)=> item.skuId === Number(sku))[0].couponPrice
		},
		computed: {
			...mapState('Product', ['productInfo']),
			...mapState('Address', ['addressList','current']),
			...mapGetters('Address',['addressId'])
		},
		methods: {
			...mapActions('Address', ['getAddressList']),
			toSelectAddress() {
				uni.navigateTo({
					url: '/pages/select-address/select-address'
				})
			},

			async createOrder() {
				const { skus, counts, addressId, popShow } = this;
				let res = await reqCreateOrder({ skus, counts, addressId })

				if (res.code === 0) {
					this.popShow = true
					this.payMoney = res.data.totalPrice
				}
			}
		},


	})
</script>

<style lang="scss" scoped>
	@import "../../uni";

	.submit-order {
		.add {
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

			.title {
				@include bold(24);
				color: #333;
			}

			.red {
				@include bold(36);
				color: #ff0000;
				margin-right: upx(20);
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
				box-sizing: border-box;
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

			header.title {
				padding: upx(40) 0;
				height: 100%;
				margin: 0;
				@include bold(32);
				display: flex;
				justify-content: center;
				@include bbt;

				h1 {
					text-align: center;
				}
			}

			ul {
				padding: 0 upx(40);
				margin-bottom: upx(300);
				@include bbt;

				:last-child {
					border: none !important;
				}

				li {
					display: flex;
					align-items: center;
					padding: upx(40) 0;
					@include bold(28);
					@include bbt;


					img {
						width: upx(40);
						height: upx(40);
						margin-right: upx(20);
					}

					div {
						flex: 1;
					}
				}
			}
		}
	}
</style>
