<template>
	<div class="login">
		<img alt="" class="top" src="../../static/33.png">

		<my-button title="注册会员" :height="100" margin="30" ></my-button>
		<div class="t">
			我已阅读并同意
			<span>活动协议</span>
			及
			<span>用户服务条款</span>
		</div>
	</div>
</template>

<script>
	import Vue from 'vue'
	import MyButton from '../../components/button/button'

	export default Vue.extend({
		name: 'login',
		components:{MyButton}

	})
</script>

<style lang="scss" scoped>
	@import "../../uni";
	.login{
		min-height: 100vh;
		background: white;
	}
	.top{
		width: 100%;
		height: upx(900);
	}
	.t{
		text-align: center;
		font-size:upx(30);
		font-weight:400;
		color:rgba(153,153,153,1);
		span{
			color: #446BEE;
		}
	}
</style>
