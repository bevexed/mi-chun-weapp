import {
	ADD_ADDRESS, EXCHANGE_ADDRESS_LIST,
	GET_ADDRESS_LIST
} from '../mutation-types';

import {
	reqAddAddress,
	Address,
	reqAddress,
	UpdateAddressOption,
	reqUpdateAddress,
	reqDelAddress
} from "@/api/address";
import { MSG_BACK, SHOW_MSG } from "@/utils";

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
		MSG_BACK({
			title: '添加地址成功',
		})
	}
};

export const getAddressList = async ({ commit }: any) => {
	let res = await reqAddress();
	if (res.code === 0) {
		commit(GET_ADDRESS_LIST, res)
	}
};


export const updateAddress = async ({}, data: UpdateAddressOption) => {
	let res = await reqUpdateAddress(data);
	if (res.code === 0) {
		MSG_BACK({
			title:'修改地址成功',
		})
	}
};

export const changeAddress = async ({commit}:any,data:number)=>{
	console.log(data);
	commit(EXCHANGE_ADDRESS_LIST,data)
	uni.navigateBack({
		delta:1
	})
};

export const delAddress = async ({commit,dispatch}:any,data:number)=>{
	let res = await reqDelAddress(data);
	if (res.code === 0) {
		MSG_BACK({
			title:'删除地址成功',
		});
	}
}
