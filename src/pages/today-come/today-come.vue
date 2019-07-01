<template>
	<div>
		<my-list></my-list>
	</div>
</template>

<script>
	import Vue from 'vue'
	import MyList from "../../components/lists/lists.vue"
	import { reqCommissionList } from "../../api/commission";

	export default Vue.extend({
		name: "today-come",
		components: {
			MyList
		},
		onShow(){
			this.getCommissionList()
		},
		methods:{
			async getCommissionList(){
				let res = await reqCommissionList()
			}
		}
	})
</script>
