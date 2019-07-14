<template>
	<div>
		<div  v-for="(product,index) in productList">
			<img @tap="TO('/pages/good-detail/good-detail?skuId=' + product.skuId)" :src="product.images" :key="index" alt=""/>

		</div>
	</div>
</template>

<script lang="ts">
	import Vue from 'vue'
	import { mapActions, mapState } from 'vuex';
	import {TO} from "@/utils";

	export default Vue.extend({
		name: "shop",
		data() {
			return {}
		},
		async onShow() {
			// @ts-ignore
			await this.getProductList({});
		},
		computed:mapState('Product',['productList']),
		methods: {
			...mapActions('Product', ['getProductList']),
			TO,
		}
	})
</script>

<style lang="scss" scoped>
	div {
		text-align: center;
	}

	img {
		width: upx(710);
		height: upx(720);
		border: upx(1) solid #3f536e;
		margin: upx(20) 0 0;
	}
</style>
