<template>
	<div class="message">
		<ul>
			<li
				@tap="toMessageDetail(item.type)"
				v-for="(item,index) in msgList"
			>
				<img alt="" src="../../static/out-b.png">

				<div class="my-border">
					<section class="detail">
						<header>{{ item.title }}</header>
						<footer>{{ item.lastMessage.content }}</footer>
					</section>

					<section class="right">
						<header>{{ item.lastMessage.addDate }}</header>
					</section>
				</div>
			</li>
		</ul>
	</div>

</template>

<script lang="ts">
	import Vue from 'vue'
	import { mapActions, mapState } from 'vuex';

	export default Vue.extend({
		name: "message",
		async onShow() {
			// @ts-ignore
			await this.getMessageTypeList()
		},
		computed: mapState('Message', ['msgList']),
		methods: {
			// @ts-ignore
			...mapActions('Message', ['getMessageTypeList']),
			toMessageDetail(type:any) {
				uni.navigateTo({
					url: "/pages/message-detail/message-detail?type=" + type,
				})
			}
		}
	})
</script>


<style lang="scss" scoped>
	@import "../../uni";

	ul {
		background: white;
		overflow: hidden;
		transition: max-height .3s;

		li {
			display: flex;
			align-items: center;
			margin-left: upx(40);
			padding: upx(20) 0 0;


			&:last-child {
				.my-border {
					border: none;
				}
			}


			img {
				width: upx(80);
				height: upx(80);
				margin-right: upx(20);
			}

			.my-border {
				flex: 1;
				display: flex;
				align-items: center;
				@include bbt;
				padding: upx(16) 0;

			}


			.detail {
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				height: upx(80);
				flex: 1;

				&:nth-child(n) {
					margin: upx(8) 0;
				}

				> header {
					@include bold(28)
				}

				div, footer {
					font-size: upx(22);
					color: $uni-text-color-grey;
				}
			}

			.right {
				height: upx(80);
				text-align: center;
				margin-right: upx(20);
				position: relative;

				header {
					font-size: $font-size-24;
					color: $uni-text-color-grey;
				}

			}


		}
	}
</style>
