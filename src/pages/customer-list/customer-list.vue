<template>
	<div class="customer-list">
		<div class="title">总人数：5人</div>
		<person-list :fun="toCustomerListBuy"></person-list>
	</div>
</template>

<script>
	import Vue from 'vue'
	import PersonList from '../../components/person-list/person-list.vue'

	export default Vue.extend({
		components: {
			PersonList
		},
		methods: {
			toCustomerListBuy() {
				wx.navigateTo({
					url: '/pages/customer-list-buy/customer-list-buy?id=1'
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
