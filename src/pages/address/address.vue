<template>
	<div class="address">
		<div class="get-address">
			<uni-icon color="#02D314" size="26" type="weixin"></uni-icon>
			<span>获取微信收货地址</span>
		</div>

		<ul class="address-list">
			<li v-for="(v,i) in addressList" :key="i">
				<section class="left">
					<header>
						{{ v.userName }} {{ v.phone }}
					</header>
					<footer>
						收货地址：{{ v.address }}
					</footer>
				</section>

				<img @tap="toEdit(v.id)" alt="" class="editor" src="../../static/editor.jpg">
			</li>

		</ul>

		<my-button @tap="toAddAddress" :height="100" :margin="80" title="新增收货地址" :width="710"></my-button>
	</div>
</template>

<script>
	import Vue from 'vue'
	import { uniIcon } from "@dcloudio/uni-ui"
	import MyButton from '../../components/button/button.vue'
	import { mapActions, mapState } from "vuex";

	export default Vue.extend({
		components: { uniIcon, MyButton },
		data() {
			return {}
		},
		onShow() {
			this.getAddressList();
		},
		computed: mapState('Address', ['addressList']),
		methods: {
			...mapActions('Address', ['getAddressList']),
			toAddAddress() {
				uni.navigateTo({
					url: "/pages/add-address/add-address"
				})
			},
			toEdit(id) {
				uni.navigateTo({
					url: "/pages/edit-address/edit-address?id=" + id
				})
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
				padding: upx(38) 0;

				&:last-child {
					border: none;
				}

				header {
					height: upx(50);
					@include bold(28);
				}

				footer {
					font-size: $font-size-24;
					color: $uni-text-color-grey;
				}
			}

			.editor {
				width: upx(38);
				height: upx(42);
				margin-right: upx(40);
			}
		}

	}
</style>
