import {PRODUCT_INFO} from '../mutation-types';

export default {
	[PRODUCT_INFO](state: any, {data}: any) {
		state.data = data;
	},
};
