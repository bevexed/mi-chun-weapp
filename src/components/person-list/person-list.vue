<template>
	<div class="person-list">
		<ul>
			<li
				:key="personIndex"
				@tap="fun(person.userId)"
				v-for="(person,personIndex) in customerList"
			>
				<img alt="" src="../../static/out-b.png">

				<div class="my-border">
					<section class="detail">
						<header>{{ person.nickName }}</header>
						<footer>关联时间：{{ person.connectDate }}</footer>
					</section>

					<section class="right">
						<header>成交金额</header>
						<header>+{{ person.money }}</header>
					</section>
				</div>


			</li>
		</ul>
	</div>
</template>

<script>
	import Vue from 'vue'

	export default Vue.extend({
		props: {
			customerList: {
				type: Array,
				default: []
			},
		},
		methods:{
			fun(id){
				this.$emit('toDetail',id)
			}
		}
	});
</script>

<style lang="scss" scoped>
	@import "../../uni";

	ul {
		background: white;
		overflow: hidden;
		transition: max-height .3s;

		li {
			display: flex;
			align-items: center;
			margin-left: upx(40);
			padding: upx(20) 0 0;


			&:last-child {
				.my-border {
					border: none;
				}
			}


			img {
				width: upx(80);
				height: upx(80);
				margin-right: upx(20);
			}

			.my-border {
				flex: 1;
				display: flex;
				align-items: center;
				@include bbt;
				padding: upx(16) 0;

			}


			.detail {
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				flex: 1;

				&:nth-child(n) {
					margin: upx(4) 0;
				}

				> header {
					@include bold(28)
				}

				div, footer {
					font-size: upx(22);
					color: $uni-text-color-grey;
				}
			}

			.amount {
				@include bold(28);
				padding: 0 upx(150) 0 upx(100);
			}

			.right {
				height: upx(80);
				display: flex;
				flex-direction: column;
				justify-content: space-around;
				text-align: center;
				margin-right: upx(80);
				position: relative;

				&:after {
					position: absolute;
					top: 0;
					bottom: 0;
					right: upx(-34);
					margin: auto;
					width: upx(16);
					height: upx(16);
					transform: rotate(45deg);
					border-width: upx(2) upx(2) 0 0;
					border-color: #999;
					border-style: solid;
					content: '';

				}


				header {
					@include bold(28)
				}

				footer {
					font-size: $font-size-24;
					color: $uni-text-color-grey;
				}
			}


		}
	}
</style>
