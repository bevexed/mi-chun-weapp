<template>
	<div class="customer-list-buy">
		<shop-list></shop-list>
	</div>
</template>

<script lang="ts">
	import ShopList from '../../components/good-list/good-list.vue'
	import Vue from 'vue'

	export default Vue.extend({
		components:{
			ShopList
		},
		onLoad(e){
			console.log(e);
		}
	});
</script>
