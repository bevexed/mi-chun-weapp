<template>
	<div class="withdraw">
		<div class="wrap">
			<ul>
				<picker :range="bankList" :value="bank" @change="selectBank" range-key="name">

					<li>
						<div class="left">银行</div>
						<div>{{ bankList[bank].name || '请选择银行' }}</div>
						<div class="right p"></div>
					</li>
				</picker>
				<li>
					<div class="left">银行卡卡号</div>
					<div class="right"><input placeholder="请输入银行卡卡号" type="number" v-model="account"></div>
				</li>
				<li>
					<div class="left">姓名</div>
					<div class="right"><input placeholder="填入姓名" type="text" v-model="name"></div>
				</li>
			</ul>

		</div>

		<my-button
			@tap="addAccount({
								bankName:bankList[bank].name,
							 bankId:bankList[bank].id,
								name,
								account
							 })"
			margin="80"
			title="完成"
			width="710"></my-button>
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
				bank: 0,
				account: '',
				name: ''
			}
		},
		computed: {
			...mapState('Balance', ['balance']),
			...mapState('Bank', ['bankList'])
		},
		async onShow() {
			//@ts-ignore
			await this.getBalance()
			await this.getBankList();

		},
		methods: {
			...mapActions('Balance', ['getBalance']),
			...mapActions('Bank', ['getBankList', 'addAccount']),

			selectBank(e) {
				this.bank = e.target.value
			},
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
			}

			.left{
				width: upx(150);
				margin-right: upx(20);
			}

			.right{
				flex: 1;
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
