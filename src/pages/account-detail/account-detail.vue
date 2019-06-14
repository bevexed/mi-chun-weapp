<template>
	<div class="account-detail">
		<my-list></my-list>
	</div>
</template>

<script lang="ts">
	import Vue from 'vue'
	import MyList from "../../components/lists/lists.vue"

	export default Vue.extend({
		components: {
			MyList
		}
	});
</script>
