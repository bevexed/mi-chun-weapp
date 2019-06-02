<template>

	<div class="message-detail">

		<div class="error">
			<div class="board">

				<img alt="" class="error-img" src="../../static/out-no.png">
				<div class="title">您的提现申请未通过</div>
			</div>

			<div class="reason">
				原因原因原因原因原因原因原因原因原因原因原因原因原因原因原因原因原因原因原因原因原因原因原因原因原因原因原因原因原因原因原因原因原因原因原因原因原因原因原因原因原因原因原因原因原因
			</div>
		</div>

	</div>

</template>

<script lang="ts">
	import Vue from 'vue'

	export default Vue.extend({
		name: "message-detail"
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
