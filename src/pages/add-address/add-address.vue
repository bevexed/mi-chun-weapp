<template>
	<div class="address">
		<ul class="address-list">
			<li>
				<header>
					<label for="name">
						姓名
					</label>
					<input id="name" v-model="userName" placeholder="收货人姓名" type="text">
				</header>
			</li>

			<li>
				<header>
					<label for="phone">
						电话
					</label>
					<input id="phone" type="number" maxlength="11" v-model="phone" placeholder="收货人手机号">
				</header>
			</li>

<!--			<li>-->
<!--				<picker mode="region" @change="bindPickerChange">-->
<!--					<header>-->
<!--						<label>-->
<!--							地区-->
<!--						</label>-->
<!--						<div class="value">{{ addressList[0] }}/{{ addressList[1] }}/{{ addressList[2] }}</div>-->
<!--					</header>-->
<!--				</picker>-->
<!--			</li>-->

			<li>
				<header>
					<label for="address-detail">
						详细地址
					</label>
				</header>
				<textarea v-model="address" id="address-detail" placeholder="街道门牌、楼层房间号等信息" type="text"></textarea>
			</li>


		</ul>

		<my-button
			@tap="getAddAddress({
					address:addressList.join('') + ' '+ address,
					phone,
					userName
				})"
			:height="100"
			:margin="80"
			title="保存并使用"
			:width="710"></my-button>
	</div>
</template>

<script>
	import Vue from 'vue'
	import { uniIcon } from "@dcloudio/uni-ui"

	import { mapActions } from 'vuex';
	import MyButton from '../../components/button/button.vue'


	export default Vue.extend({
		components: { uniIcon, MyButton },
		data() {
			return {
				address: '',
				userName: '',
				phone: '',
				addressList: ['浙江省', '杭州市', '滨江区']
			}
		},
		methods: {
			...mapActions('Address', ['getAddAddress']),
			bindPickerChange(e) {
				console.log('picker发送选择改变，携带值为', e.target.value);
				this.addressList = e.target.value
			},
		}
	});
</script>

<style lang="scss" scoped>
	@import "../../uni";

	.address {
		.get-address {
			@include bold(28);
			display: flex;
			align-items: center;
			background: #fff;
			padding: upx(32) upx(40);

			span {
				flex: 1;
				margin-left: upx(16);
				position: relative;

				&:after {
					position: absolute;
					top: 0;
					bottom: 0;
					right: upx(0);
					margin: auto;
					width: upx(16);
					height: upx(16);
					transform: rotate(45deg);
					border-width: upx(2) upx(2) 0 0;
					border-color: #999;
					border-style: solid;
					content: '';
				}
			}
		}

		.address-list {
			margin-top: upx(20);
			background: #fff;
			padding: 0 0 0 upx(40);

			li {
				display: flex;
				align-items: center;
				justify-content: space-between;
				@include bbt;
				padding: upx(28) 0;

				&:last-child {
					display: block;
					align-items: flex-start;
					border: none;
					height: upx(150);

				}

				header {
					display: flex;
					align-items: center;
					height: upx(40);
					@include bold(28);
				}


				label {
					width: upx(180);
				}

				.value {
					flex: 1;
				}
			}


			textarea {
				height: 3.5em;
				width: 90%;
				margin-top: upx(20);
				@include bold(28);
				/*margin-top: upx(116);*/
			}
		}

	}
</style>
