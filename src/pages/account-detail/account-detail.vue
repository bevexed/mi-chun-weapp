<template>
	<div class="account-detail">
		<my-list :incomeData="curWithdrawOrderList"></my-list>
	</div>
</template>

<script lang="ts">
	import Vue from 'vue'
	import MyList from "../../components/lists/lists.vue"
	import { mapActions, mapGetters } from "vuex";

	export default Vue.extend({
		components: {
			MyList
		},
	async	onShow(){
		await 	this.getWithdrawOrderList();
	},
		computed: mapGetters('Bank', ['curWithdrawOrderList']),
		methods: mapActions('Bank', ['getWithdrawOrderList'])
	});
</script>
