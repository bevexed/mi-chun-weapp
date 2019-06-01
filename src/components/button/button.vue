<template>
	<view>
		<button
			:style="{
			width:width/2+'px',
			height:height/2+'px',
			lineHeight:height/2+'px'
		}" class="button">{{title}}
		</button>
	</view>
</template>

<script lang="ts">
	import Vue from 'vue'

	export default Vue.extend({
		name: "button",
		props: {
			title: {
				type: String,
				default: 'default'
			},
			height: {
				type: Number,
				default: 80,
			},
			width: {
				type: Number,
				default: 670,
			}
		}
	})
</script>

<style lang="scss" scoped>
	.button {
		background: #000;
		color: #fff;
		font-size: upx(24);
		font-family: PingFangSC-Regular, serif;
		font-weight: 400;
	}
</style>
