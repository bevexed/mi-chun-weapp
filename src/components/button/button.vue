<template>
	<view>
		<button
			@getuserinfo="getUserInfo"
			:class="['button',{'border':border}]"
			:open-type="openType"
			:style="{
			width: width/2 + 'px',
			height: height/2  + 'px',
			lineHeight: height/2 + 'px',
			background: backgroundColor,
			color: color,
			margin:`${margin/2}px auto`,
		}">{{title}}
		</button>
	</view>
</template>

<script lang="ts">
  import Vue from 'vue'

  export default Vue.extend({
    name: "my-button",
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
      },
      openType: {
        type: String,
        default: ''
      },
      getUserInfo:{
        type:Function,
				default:(e:any)=>{}
			}
    },
  })
</script>

<style lang="scss" scoped>
	.button {
		padding: 0;
		text-align: center;
		background: #000;
		color: #fff;
		font-size: upx(28);
		font-family: PingFangSC-Regular, serif;
		font-weight: 400;
		letter-spacing: .05em;
		box-shadow: upx(4) upx(4) upx(20) 0 rgba(0, 0, 0, 0.25);
	}

	.border {
		border: upx(1) solid #000;
	}
</style>
