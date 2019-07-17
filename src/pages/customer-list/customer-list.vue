<template>
	<div class="customer-list">
		<div class="title">总人数：{{ totalCount }}人</div>
		<person-list :customerList="customerList" @toDetail="toCustomerListBuy"></person-list>
	</div>
</template>

<script>
	import Vue from 'vue'
	import PersonList from '../../components/person-list/person-list.vue'
	import { mapActions, mapState } from "vuex";

	export default Vue.extend({
		components: {
			PersonList
		},
		computed: mapState('Customer', ['customerList', 'totalCount']),
		async onShow() {
			await this.getCustomer()
		},
		methods: {
			...mapActions('Customer', ['getCustomer']),
			toCustomerListBuy(id) {
				console.log(id);
				wx.navigateTo({
					url: '/pages/customer-list-buy/customer-list-buy?id=' + id
				})
			}
		}
	});
</script>

<style lang="scss" scoped>
	@import "../../uni";

	.title {
		margin: upx(30) upx(40);
		@include bold(28)
	}

</style>
