<template>
	<div class="customer-list">
		<ul>
			<li
				:class="{'active':index===current}"
				:key="index"
				@tap="changeTab(index)"
				v-for="(item,index) in type"
			>
				{{item}}
			</li>
		</ul>

		<div class="title">总人数：5人</div>
		<person-list :fun="toCustomerListBuy"></person-list>
	</div>
</template>

<script>
	import Vue from 'vue'
	import PersonList from '../../components/person-list/person-list.vue'

	export default Vue.extend({
		components: {
			PersonList
		},
		data() {
			return {
				type: ['今日', '近七日', '全部'],
				current: 0
			}
		},
		methods: {
			toCustomerListBuy() {
				wx.navigateTo({
					url: '/pages/customer-list-buy/customer-list-buy?id=1'
				})
			},
			changeTab(index) {
				this.current = index
			}
		}
	});
</script>

<style lang="scss" scoped>
	@import "../../uni";

	.title {
		margin: upx(30) upx(40);
		@include bold(28)
	}

	ul {
		display: flex;
		height: upx(100);
		line-height: upx(100);
		text-align: center;
		font-size: $font-size-28;

		li {
			width: 33%;

			&.active {
				background: #000;
				color: white;
			}
		}
	}

</style>
