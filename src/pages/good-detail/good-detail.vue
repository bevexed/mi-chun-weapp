<template>
	<div class="good-detail">
		<image mode="widthFix" class="shop-img" src="../../static/dev/1.jpg"></image>
	</div>
</template>

<script lang="ts">
	import Vue from 'vue'

	export default Vue.extend({
		name: "good-detail"
	})
</script>

<style lang="scss" scoped>
	@import "../../uni";

	.good-detail {
		.shop-img {
			width: 100%;
		}
	}
</style>
