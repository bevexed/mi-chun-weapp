<template>
	<div class="customer-list-buy">
		<shop-list :shopList="customerOrderList"></shop-list>
	</div>
</template>

<script lang="ts">
	import ShopList from '../../components/good-list/good-list.vue'
	import Vue from 'vue'
	import { mapActions, mapState } from 'vuex';

	export default Vue.extend({
		components:{
			ShopList
		},
		async onLoad(e){
			await this.getCustomerOrderList(e ? e.id : '')
		},
		computed:mapState('Customer',['customerOrderList']),
		methods:mapActions('Customer',['getCustomerOrderList'])
	});
</script>
