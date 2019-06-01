<template>
	<view class="content">
		<PieChart/>
	</view>
</template>

<script lang="ts">
	// @ts-nocheck
	import Vue from 'vue';
	import PieChart from './PieChart.vue'

	export default Vue.extend({
			data() {
				return {}
			},
			components: {
				PieChart
			},
			onLoad() {

			},
			methods: {}
		}
	);
</script>

<style lang="scss">
	.content {

	}


</style>
