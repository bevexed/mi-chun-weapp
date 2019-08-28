<template>
	<section class="wrap">
		<header>
			<img src="../../static/share.png" alt="">
			<span>arron</span> <span>分享跟您</span> <span>Y1迷纯液化喷雾</span>
		</header>


		<img class="shop-img" src="" alt="">

		<section class="good">
			<div class="title">
				Y1迷唇野花喷雾
			</div>

			<div class="price">
				￥489.00 <span> 首单返利20 %</span>
			</div>

		</section>

		<section class="list">
			<div class="title">
				套装内容
			</div>
			<div class="detail">
				<span>液化器×１</span>
				<span>液化器×１</span>
				<span>液化器×１</span>
			</div>
		</section>

		<footer>
			声明：本产品为活动返利产品，非质量问题不予更换
		</footer>

		<my-button title="立即购买" :height="100" :margin="42"></my-button>

		<aside>
			注：购买后分享者将与您绑定，绑定后您推广商品有额外佣金奖励加成。您已绑定，则无法享受分享优惠和当前分享者绑定关系，如需绑定分享者，先解绑后再进分享者链接购买推广商品进行绑定
		</aside>
	</section>


</template>

<script>
	import { mapActions, mapState } from "vuex";
	import MyButton from '../../components/button/button'
	import Vue from "vue";

	export default Vue.extend({
		name: "share",
		components:{MyButton}

	})
</script>

<style lang="scss" scoped>
	@import "../../uni";

	page {
		background: white;
	}

	.wrap{
		padding: 0 upx(40);
	}

	header{
		display: flex;
		align-items: center;
		width:upx(670);
		height:upx(100);
		background:rgba(255,255,255,1);
		box-shadow:4px 4px upx(20) 0 rgba(0,0,0,0.25);
		margin: upx(30) auto;
		font-size:upx(28);
		font-family:PingFangSC-Semibold,serif;
		font-weight:600;
		color:rgba(0,0,0,1);

		span{
			margin-left: 1em;
		}

		img{
			width: upx(64);
			height: upx(64);
			margin-left: upx(20);
		}
	}

	.shop-img{
		display: block;
		margin: upx(20) auto;
		width: upx(670);
		height: upx(670);
		background: #eaeaea;
	}

	.good{
		padding: upx(10) 0 upx(20);
		border-bottom: upx(2) solid #ececec;
		.title{
			margin: upx(10) 0;
			font-size:upx(32);
			font-family:PingFangSC-Semibold,serif;
			font-weight:600;
		}

		.price{
			font-size:upx(32);
			font-family:PingFangSC-Semibold,serif;
			font-weight:600;
			color:rgba(255,0,0,1);

			span{
				font-size:upx(20);
				font-family:PingFangSC-Semibold,serif;
				font-weight:600;
				color:rgba(153,153,153,1);
				margin-left: 1em;
			}
		}
	}

	.list{
		padding: upx(20) 0;
		.title{
			margin: upx(10) 0;
			font-size: upx(24);
			font-family:PingFangSC-Semibold,serif;
			font-weight:600;
		}

		.detail{
			font-size:upx(24);
			font-family:PingFangSC-Regular,serif;
			font-weight:400;
			color:rgba(0,0,0,1);
			span{
				margin-right: 1em;
			}
		}
	}

	footer{
		font-size:upx(20);
		font-family:PingFangSC-Regular,serif;
		font-weight:400;
		color:rgba(241,10,10,1);
	}

	aside{
		font-size:upx(20);
		font-weight:400;
		color:rgba(153,153,153,1);
		padding-bottom: upx(80);
	}

</style>
