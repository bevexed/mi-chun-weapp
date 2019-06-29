import {
	ADD_ADDRESS
} from '../mutation-types';

import { reqAddAddress, Address, reqAddress } from "@/api/address";
import { MSG_TO, SHOW_MSG } from "@/utils";

export const getAddAddress = async ({ commit }: any, data: Address) => {
	let p = /^1\d{10}$/;
	if (!p.test(data.phone)) {
		return SHOW_MSG({
			title: '手机号格式不正确'
		});

	}
	let res = await reqAddAddress(data);
	if (res.code === 0) {
		commit(ADD_ADDRESS, { data });
		MSG_TO({
			title: '添加地址成功',
			url: '/pages/address/address'
		})
	}
};

export const getAddressList = async ({ commit }: any) => {
	let res = await reqAddress();
};
