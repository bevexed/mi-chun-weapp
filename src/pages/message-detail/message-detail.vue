<template>

	<div class="message-detail">

		<div class="error">
			<div class="board">

				<img alt="" class="error-img" src="../../static/out-no.png">
				<div class="title">title</div>
			</div>

			<div class="reason">
				{{ 'none' }}
			</div>
		</div>

	</div>

</template>

<script lang="ts">
	import Vue from 'vue'
	import { mapActions, mapState } from 'vuex';

	export default Vue.extend({
		name: "message-detail",
	async	onLoad(e:any){
			let {type} = e
			await this.getMessageList(type)
		},
		computed:mapState('Message',['msg']),
		methods:mapActions('Message',['getMessageList'])
	})
</script>

<style lang="scss" scoped>
	@import "../../uni";

	page {
		background: #fff;
	}

	.message-detail {
		padding: upx(40);

		.board {
			text-align: center;
		}

		img.error-img {
			width: upx(100);
			height: upx(100);
			margin-top: upx(60);
			margin-bottom: upx(20);
		}

		.title {
			@include bold(32)
		}

		.reason {
			font-size: $font-size-24;
			color: #999999;
			padding-top: upx(100);
		}

	}
</style>
