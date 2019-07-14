import {
	GET_ACCOUNT_LIST,
	GET_BANK_LIST, GET_WITHDRAW_ORDER_LIST
} from '../mutation-types';

export default {
	[GET_BANK_LIST](state: any, { data }: any) {
		state.bankList = data
	},
	[GET_ACCOUNT_LIST](state: any, { data }: any) {
		state.accountList = data
	},
	[GET_WITHDRAW_ORDER_LIST](state: any, { data }: any) {
		state.withdrawOrderList = data.result
	}
};
