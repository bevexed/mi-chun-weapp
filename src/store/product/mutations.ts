import { GET_PRODUCT_LIST, PRODUCT_INFO } from '../mutation-types';

export default {
	[GET_PRODUCT_LIST](state: any, { result }: any) {
		console.log(result);
		state.productList = result
	},
	[PRODUCT_INFO](state: any, {data}: any) {
		state.productInfo = data;
	},
};
