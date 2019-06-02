<template>
	<view>
		<button
			:style="{
			width: width/2 + 'px',
			height: height/2 + 2 + 'px',
			lineHeight: height/2 + 'px',
			background: backgroundColor,
			color: color,
			margin:`${margin/2}px auto`,
		}"
			class="['button',{'border':border}]">{{title}}
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
			},
			backgroundColor: {
				type: String,
				default: '#000',
			},
			color: {
				type: String,
				default: '#fff',
			},
			border: {
				type: Boolean,
				default: true,
			},
			margin: {
				type: Number,
				default: 0
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
		box-shadow: upx(4) upx(4) upx(20) 0 rgba(0, 0, 0, 0.25);
	}

	.border {
		border: upx(1) solid #000;
	}
</style>
