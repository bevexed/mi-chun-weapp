import { GET_PRODUCT_LIST, PRODUCT_INFO } from '../mutation-types';

import { reqProductInfo, reqProductList } from "@/api/product";

export const getProductList = async ({ commit }: any, data?: any) => {
	let res = await reqProductList({});
	if (res.code === 0) {
		commit(GET_PRODUCT_LIST, res.data)
	}
};

export const getProductInfo = async ({ commit }: any, data?: any) => {
		let res = await reqProductInfo(data);
		if (res.code ===0) {
			commit(PRODUCT_INFO, res)
		}
};
