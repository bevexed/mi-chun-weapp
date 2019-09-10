<template>
	<div class="my">
		<section class="header">
			<img alt="" :src="avatarUrl"/>
			<section>
				<div>{{ nickName }}</div>
				<div>ID：{{ userData.userId }}</div>
			</section>
		</section>

		<section class="footer">
			<header>
				<ul>
					<li @click="toAccount">
						<div class="icon">
							<div></div>
						</div>
						<div class="right">
							<span class="label">账户</span>
							<span class="value"></span>
						</div>
					</li>

					<li @click="toMyOrder">
						<div class="icon">
							<div></div>
						</div>
						<div class="right">
							<span class="label">我的订单</span>
							<span class="value"></span>
						</div>
					</li>

					<li @tap="toCustomerList">
						<div class="icon">
							<div></div>
						</div>
						<div class="right">
							<span class="label">客户列表</span>
							<span class="value"></span>
						</div>
					</li>

				</ul>

			</header>

			<footer>
				<ul>
					<li @tap="toAddress">
						<div class="icon">
							<div></div>
						</div>
						<div class="right">
							<span class="label">地址管理</span>
							<span class="value"></span>
						</div>
					</li>

					<li @tap="toMessage">
						<div class="icon">
							<div></div>
						</div>
						<div class="right">
							<span class="label">消息通知</span>
							<span class="value"></span>
						</div>
					</li>

				</ul>
			</footer>
		</section>
	</div>
</template>

<script lang="ts">
	import Vue from 'vue'
  import { mapActions, mapState } from 'vuex';

	export default Vue.extend({
		name: "my",
		data(){
		  return{
		    nickName:'',
        avatarUrl:''
			}
		},
    computed:mapState('User',['userData']),
		onLoad(){
      console.log(this.userData);
      wx.getUserInfo({
				//@ts-ignore
        success: res => {
          // 可以将 res 发送给后台解码出 unionId
          console.log(res.userInfo);
          const {nickName,avatarUrl} = res.userInfo;
          this.nickName =nickName;
					this.avatarUrl = avatarUrl;
          // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
          // 所以此处加入 callback 以防止这种情况
          if (this.userInfoReadyCallback) {
            this.userInfoReadyCallback(res)
          }
        }
      })
    },
    methods: {
			toAccount() {
				uni.navigateTo({
					url: '/pages/account/account'
				})
			},

			toMyOrder() {
				uni.navigateTo({
					url: '/pages/my-order/my-order'
				})
			},

			toCustomerList() {
				uni.navigateTo({
					url: '/pages/customer-list/customer-list'
				})
			},

			toAddress() {
				uni.navigateTo({
					url: '/pages/address/address'
				})
			},

			toMessage() {
				uni.navigateTo({
					url: '/pages/message/message'
				})
			}
		}
	})
</script>

<style lang="scss" scoped>
	@import "../../uni";

	.my {
		.header {
			display: flex;
			align-items: center;
			background: $theme-background-color;
			padding: upx(58) upx(20) upx(158);

			img {
				width: upx(124);
				height: upx(124);
				margin-right: upx(28);
			}

			section {
				color: #fff;
				font-size: $font-size-28;

				div {
					margin-bottom: upx(10);
				}
			}
		}

		.footer {
			z-index: 999;
			position: relative;
			top: upx(-100);
			width: upx(710);
			margin: 0 auto;

			header, footer {
				background: #fff;
				padding: upx(30) upx(20);
				border-radius: $theme-border-radius;
				box-shadow: upx(4) upx(4) upx(20) 0 rgba(0, 0, 0, 0.25);
				margin-bottom: upx(20);
			}

			li {
				display: flex;
				align-items: flex-start;
				margin-bottom: upx(30);

				&:last-child {
					margin: 0;

					.right {
						padding: 0;
						border: none;
					}
				}

				.right {
					display: flex;
					justify-content: space-between;
					align-items: center;
					margin-left: upx(30);
					flex: 1;
					padding-bottom: upx(30);
					@include bbt;

				}

				.label {
					@include bold(28);
					color: $uni-text-color;
				}

				.value {
					position: relative;
					font-size: $font-size-28;
					color: $uni-text-color-grey;
					margin-right: upx(40);

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

		.icon {
			width: upx(34);
			height: upx(34);
			border-radius: 50%;
			border: 2px solid #333;
			position: relative;

			div {
				position: absolute;
				top: 0;
				left: 0;
				bottom: 0;
				right: 0;
				margin: auto;
				width: upx(10);
				height: upx(10);
				transform: rotate(45deg);
				border: 2px solid #333;
			}
		}
	}
</style>
