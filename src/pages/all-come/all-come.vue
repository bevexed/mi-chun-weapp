<template>
	<div>
		<header>
			<div>累计收益：{{ all }}</div>
<!--			<div class="sm">待结算：800.00</div>-->
		</header>
		<my-list :incomeData="data"></my-list>
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
		data(){
			return{
				all:0
			}
		},
		async onShow() {
			await this.getIncome()

		},

		async onLoad(e){
			this.all = e.all
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
