<template>
	<div class="withdraw">
		<div class="wrap">
			<ul>
				<li>
					<div class="left">可提现金额</div>
					<div class="right"><input :placeholder="'￥'+ balance" disabled type="text"></div>
				</li>
				<li>
					<div class="left">本次提现</div>
					<div class="right"><input placeholder="银行卡单笔最高提现5万" type="text"></div>
				</li>
			</ul>

		</div>

		<div class="wrap">
			<ul>
				<li @tap="selectBank">
						<div class="left">提现账户</div>
						<div class="right p">
							{{ accountList[bank].name }}
							<input @tap="toBank" disabled placeholder="去设置" type="text" v-if="bankList.length === 0">
						</div>
					</li>

			</ul>
		</div>

		<my-button title="提现" margin="80" width="710"></my-button>
	</div>
</template>

<script>
	import Vue from 'vue'
	import MyButton from "@/components/button/button.vue"
	import { mapActions, mapState } from "vuex";

	export default Vue.extend({
		components: {
			MyButton
		},
		data() {
			return {
				bank: 0
			}
		},
		computed: {
			...mapState('Balance', ['balance']),
			...mapState('Bank', ['bankList','accountList']),
		},
		async onShow() {
			//@ts-ignore
			await this.getBalance();
			await this.getAccountList();

			if (this.bankList.length) {
				this.bankList.push({
					name: '添加银行卡',
					id: -1
				})
			}

		},
		methods: {
			...mapActions('Balance', ['getBalance']),
			...mapActions('Bank',['getAccountList']),

			selectBank(){
				uni.showActionSheet({
					itemList: this.accountList.map(item => item.name),
					success: res => {
						console.log('选中了第' + (res.tapIndex + 1) + '个按钮');
						if (this.bankList[res.tapIndex].id === -1) {
						 return 	this.toBank()
						}
						this.bank = res.tapIndex

					},
					fail: function (res) {
						console.log(res.errMsg);
					}
				});
			},

			toBank(){
				uni.navigateTo({
					url:'/pages/bank/bank'
				})
			}
		},
	});
</script>

<style lang="scss">
	@import "../../uni";

	.uni-badge-success {
		font-size: $font-size-28 !important;
		color: #999 !important;
		background: transparent !important;
		width: upx(400) !important;
		text-align: right !important;
	}

	ul {
		padding: 0 0 0 upx(40);
		background: white;

		li {
			display: flex;
			justify-content: space-between;
			align-items: center;

			padding: upx(30) upx(40) upx(30) 0;
			font-size: upx(28);
			font-weight: 400;

			border-bottom: upx(1) solid #f2f2f2;

			input {
				text-align: right;
			}

			.p{
				position: relative;
				&:after {
					position: absolute;
					top: 0;
					bottom: 0;
					right: upx(-24);
					margin: auto;
					width: upx(12);
					height: upx(12);
					transform: rotate(45deg);
					border-width: upx(2) upx(2) 0 0;
					border-color: #999;
					border-style: solid;
					content: '';
				}
			}
		}
	}

	.wrap {
		margin-top: upx(20);
	}
</style>
