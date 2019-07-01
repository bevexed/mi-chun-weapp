import {
	GET_ORDER_LIST
} from '../mutation-types';

export default {
	[GET_ORDER_LIST](state: any, { result }: any) {
		state.orderList = result
	}
};
