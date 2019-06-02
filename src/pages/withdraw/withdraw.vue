<template>
	<div class="withdraw">
		<div class="wrap">
			<uni-list>
				<uni-list-item :show-arrow="false" badge-text="0.00" show-badge="true" title="标题文字"></uni-list-item>
				<uni-list-item :show-arrow="false" badge-text="银行卡单笔最高提现5万" show-badge="true" title="可提现金额"></uni-list-item>
			</uni-list>
		</div>

		<div class="wrap">
			<uni-list>
				<uni-list-item badge-text="去设置" show-badge="true" title="账户提现"></uni-list-item>
			</uni-list>
		</div>

		<my-button title="提现" margin="80" width="710"></my-button>
	</div>
</template>

<script>
	import Vue from 'vue'
	import MyButton from "@/components/button/button.vue"
	import {uniList, uniListItem} from "@dcloudio/uni-ui"

	export default Vue.extend({
		components: {uniList, uniListItem, MyButton}
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

	.wrap {
		margin-top: upx(20);
	}
</style>
