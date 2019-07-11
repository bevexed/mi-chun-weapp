<template>
	<div>
		<header>
			<div>累计收益：28600.00</div>
			<div class="sm">待结算：800.00</div>
		</header>
		<my-list :data="data"></my-list>
	</div>
</template>

<script>
	import Vue from 'vue'
	import MyList from "../../components/lists/lists.vue"
	import { mapActions, mapGetters } from "vuex";

	export default Vue.extend({
		name: "all-come",
		components: {
			MyList
		},
		async onShow() {
			await this.getIncome()

		},
		computed: mapGetters('Income', ['data']),

		methods: mapActions('Income', ['getIncome'])
	})
</script>

<style lang="scss" scoped>
	@import "../../uni";

	header {
		box-sizing: border-box;
		width: upx(710);
		margin: upx(20) auto;
		padding: upx(24);
		background: #000;
		border-radius: upx(10);
		color: #fff;
		text-align: center;
		font-size: $font-size-28;

		.sm {
			font-size: $font-size-20;
			font-weight: lighter;
		}
	}
</style>
