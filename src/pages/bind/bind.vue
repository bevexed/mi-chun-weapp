<template>
	<div class="bg">
		<div class="pop">
			<div class="close" @tap="back">x</div>
			<div class="logo">
				<img alt="" src="../../static/logo@2x.png">

			</div>


			<my-button width="400" heiht="80" title='绑定官方合伙人'></my-button>
			<text>绑定官方合伙人期间获得佣金和长期活跃加成</text>

			<input type="text" placeholder="请输入绑定人ID">
			<my-button width="400" heiht="80" title=' 绑定 '></my-button>
		</div>
	</div>
</template>

<script>
	import myButton from '../../components/button/button.vue'

	export default {
		name: "bind",
		components:{
			myButton
		},
		methods:{
			back(){
				uni.navigateBack({
					delta:1
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import "../../uni";

	.bg {
		background: #666666;
		height: 100vh;
		width: 100vw;
		border: upx(1) solid transparent;

		.pop {
			position: relative;
			width: upx(480);
			padding: upx(40);
			background: #fff;
			margin: upx(80) auto;
			text-align: center;
		}

		.logo {
			text-align: center;
			padding: 0 0 upx(34) 0;
		}

		img {
			width: upx(72);
			height: upx(80);
			margin: 0 auto;
		}

		text{
			font-size: upx(20);
			font-weight: 400;
			color: #999;
		}

		input{
			width: upx(390);
			height: upx(80);
			line-height: upx(80);
			text-align: center;
			border: upx(1) solid #000;
			margin: upx(50) auto;
			border-radius: upx(10);
			font-size: upx(28);
		}

		.close{
			position: absolute;
			top: upx(0);
			right: upx(20);
		}
	}
</style>
