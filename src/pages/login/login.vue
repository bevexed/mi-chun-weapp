<template>
	<div class="login">
		<img alt="" class="top" src="../../static/33.png">

		<my-button title="注册会员" :height="100" margin="60" ></my-button>
		<div class="t">我已阅读并同意</div>
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
		font-size:upx(20);
		font-weight:400;
		color:rgba(153,153,153,1);
	}
</style>
