import {
	GET_CUSTOMER, GET_CUSTOMER_ORDER_LIST
} from '../mutation-types';

export default {
	[GET_CUSTOMER](state: any, { result, page }: any) {
		state.customerList = result.map(({connectDate,...items}:any)=>({connectDate : new Date(connectDate).toLocaleDateString(),...items}));
		state.currentPage = page.currentPage;
		state.totalCount = page.totalCount
	},

	[GET_CUSTOMER_ORDER_LIST](state: any, {data}: any) {
		state.customerOrderList = data.map(({date,...items}:any)=>({connectDate : new Date(date).toLocaleDateString(),...items}));
	}
};
