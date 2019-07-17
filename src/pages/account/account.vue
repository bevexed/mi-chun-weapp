<template>
	<div class="account">
		<header>
			<img alt="" src="../../static/last-b.png">

			<div class="title">我的账户</div>
			<div class="money">￥{{ balance }}</div>

			<ul>
				<li>
					<div>
						待结算:
					</div>
					<div>
						100.00
					</div>
				</li>
				<li>
					<div>
						消费返利:
					</div>
					<div>
						100.00
					</div>
				</li>
				<li>
					<div>
						可提现金额:
					</div>
					<div>
						100.00
					</div>
				</li>
			</ul>

		</header>

		<footer>
			<my-button
				@tap="toWithdraw"
				height="80"
				title="提现"
				width="360"
			></my-button>
			<my-button
				:border="false"
				@tap="toAccountDetail"
				background-color="#fff"
				color="#000"
				height="80"
				margin="40"
				title="明细"
				width="360"
			></my-button>
		</footer>
	</div>
</template>

<script lang="ts">
	import Vue from 'vue'
	import MyButton from '@/components/button/button.vue'
	import { reqBalance } from "@/api/balance";
	import { mapActions, mapState } from 'vuex';

	export default Vue.extend({
		components: {
			MyButton
		},
		computed:mapState('Balance',['balance']),
		async onShow() {
			//@ts-ignore
			await this.getBalance()
		},
		methods: {
			...mapActions('Balance',['getBalance']),
			toWithdraw(){
				uni.navigateTo({
					url:'/pages/withdraw/withdraw'
				})
			},
			toAccountDetail(){
				uni.navigateTo({
					url:'/pages/account-detail/account-detail'
				})
			}
		}
	});
</script>

<style lang="scss" scoped>
	@import "../../uni";

	.account {
		header {
			text-align: center;
			padding: upx(100) 0 upx(250);

			img {
				width: upx(100);
				height: upx(100);
			}

			.title {
				@include bold(32);
				padding: upx(30);
			}

			.money {
				@include bold(60)
			}
		}


		ul{
			margin: upx(50) auto;
			width: 80%;
			display: flex;
			justify-content: space-around;
			align-items: center;
			font-size: upx(24);
			font-weight: 600;
			li{
				width: 33%;
				text-align: center;
			}
		}
	}
</style>


