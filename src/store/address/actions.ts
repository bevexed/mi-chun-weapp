import {
	ADD_ADDRESS
} from '../mutation-types';

import { reqAddAddress, Address } from "@/api/address";

export default {
	async getAddAddress({ commit }: any, data: Address) {
		let p = /^1\d{10}$/;
		if (!p.test(data.phone)) {
			uni.showToast({
				title:'手机号格式不正确'
			});
			return
		}
		let res = await reqAddAddress(data);
		if (res.code === 0) {
			commit(ADD_ADDRESS, { data });
			uni.navigateTo({
				url: '/pages/address/address'
			})
		} else {
			uni.showToast({
				title: res.message,
				mask: true,
				icon: "none"
			})
		}
	}
	,
}
