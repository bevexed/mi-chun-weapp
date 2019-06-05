import {PRODUCT_INFO} from '../mutation-types';

import {reqProductInfo} from "@/api/product";

export default {
	async getProductInfo({commit}: any, data?: any) {
		let res = await reqProductInfo(13);
		console.log(res);
		commit(PRODUCT_INFO, res)
	}
};
