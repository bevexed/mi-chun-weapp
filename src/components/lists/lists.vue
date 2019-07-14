<template>
	<div class="coll">
		<section :key="index" v-for="(item,index) in incomeData">
			<header @tap="changeOpenState(index)" class="header">
				<div :class="['month',index === currentOpen?'open':'close']">
					{{item.time}}
				</div>
				<div class="money"> 收入 {{item.income}}</div>
			</header>

			<ul :style="{
			maxHeight:currentOpen===index?150 * item.list.length +'px':0,
			}">
				<li :key="goodIndex"
						v-for="(good,goodIndex) in item.list">
					<img alt="" src="../../static/out-b.png">

					<div class="my-border">
						<section class="detail">
							<header>{{ good.skuName }}</header>
							<div>{{ good.typeText }}</div>
							<footer>{{ good.month }}月{{ good.day }}日</footer>
						</section>

						<div class="amount">x1</div>

						<section class="right">
							<header>+{{ good.money }}</header>
							<footer>{{ good.stateText }}</footer>
						</section>
					</div>


				</li>
			</ul>
		</section>

	</div>
</template>

<script>
	import Vue from 'vue'

	export default Vue.extend({
		name: "lists",
		props: {
			'incomeData': {
				type:Array,
				default:[]
			}
		},
		data() {
			return {
				currentOpen: 0
			}
		},
		methods: {
			changeOpenState(index) {
				if (this.currentOpen === index) {
					this.currentOpen = -1;
				} else {
					this.currentOpen = index
				}
			}
		}

	})
</script>


<style lang="scss" scoped>
	@import "../../uni";

	.coll {
		.header {
			padding: upx(18) upx(40);

			.month {
				@include bold(28);
				width: 25%;
				position: relative;


				&.close:after {
					position: absolute;
					top: upx(4);
					right: upx(10);
					bottom: 0;
					margin: auto;
					transform: rotate(45deg);
					content: '';
					width: upx(12);
					height: upx(12);
					border: upx(2) solid #000;
					border-width: upx(4) 0 0 upx(4);
					transition: all .3s;
				}

				&.open:after {
					@extend .close;
					top: upx(-4);
					transform: rotate(-135deg);
				}
			}

			.money {
				font-size: $font-size-24;
				color: $uni-text-color-grey;
			}
		}

		ul {
			background: white;
			/*padding: upx(20) 0;*/
			max-height: 0;
			overflow: hidden;
			transition: max-height .3s;

			li {
				display: flex;
				align-items: center;
				margin-left: upx(40);


				&:last-child {
					.my-border {
						border: none;
					}
				}


				img {
					width: upx(80);
					height: upx(80);
					margin-right: upx(20);
				}

				.my-border {
					flex: 1;
					display: flex;
					align-items: center;
					@include bbt;
					padding: upx(16) 0;

				}


				.detail {
					display: flex;
					flex-direction: column;
					width: upx(200);

					&:nth-child(n) {
						margin: upx(4) 0;
					}

					> header {
						@include bold(28)
					}

					div, footer {
						font-size: upx(22);
						color: $uni-text-color-grey;
					}
				}

				.amount {
					@include bold(28);
					padding: 0 upx(150) 0 upx(100);
				}

				.right {
					height: upx(80);
					display: flex;
					flex-direction: column;
					justify-content: space-around;
					text-align: center;

					header {
						@include bold(28)
					}

					footer {
						font-size: $font-size-24;
						color: $uni-text-color-grey;
					}
				}


			}
		}
	}
</style>
