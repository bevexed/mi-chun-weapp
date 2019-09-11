<template>
	<div class="wrap">
		<div class="login">
			<img alt="" class="top" mode="widthFix" src="../../static/33.png">

			<my-button :getUserInfo="getUserInfo"
								 :height="100"
								 :width="550"
								 margin="30"
								 open-type="getUserInfo"
								 title="注册会员"></my-button>
			<div class="t">
				我已阅读并同意
				<span>活动协议</span>
				及
				<span>用户服务条款</span>
			</div>
		</div>
	</div>
</template>

<script>
  import Vue from 'vue'
  import MyButton from '../../components/button/button'

	let that;
  export default Vue.extend({
    name: 'login',
    components: { MyButton },
		onShow(){
			that = this;
    },
    methods: {
      getUserInfo(e) {
        console.log(this);
        const { detail } = e;
        if (detail.errMsg === "getUserInfo:ok") {
          return this.$store.commit('User/login',true)
        }
      },
    }

  })
</script>

<style lang="scss" scoped>
	@import "../../uni";

	.wrap {
		width: 100vw;
		height: 100vh;
		background: rgba(0, 0, 0, .3);
		border: 1px solid transparent;
	}

	.login {
		width: 80vw;
		margin: 10vh auto;
		background: white;
		padding-bottom: upx(10);
	}

	.top {
		width: 100%;
	}

	.t {
		text-align: center;
		font-size: upx(26);
		font-weight: 400;
		color: rgba(153, 153, 153, 1);

		span {
			color: #446BEE;
		}
	}
</style>
