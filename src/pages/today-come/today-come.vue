<template>
	<div>
		<my-list :data="today"></my-list>
	</div>
</template>

<script>
	import Vue from 'vue'
	import MyList from "../../components/lists/lists.vue"
	import { reqCommissionList } from "../../api/commission";
	import { mapActions, mapGetters } from "vuex";

	export default Vue.extend({
		name: "today-come",
		components: {
			MyList
		},
		async onShow() {
			await this.getIncome()
		},
		computed:mapGetters('Income',['today']),

		methods: mapActions('Income',['getIncome']),

	})
</script>
