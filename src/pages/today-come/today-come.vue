<template>
	<div>
		<my-list></my-list>
	</div>
</template>

<script>
	import Vue from 'vue'
	import MyList from "../../components/lists/lists.vue"

	export default Vue.extend({
		name: "today-come",
		components: {
			MyList
		}
	})
</script>
