import {
	GET_BALANCE
} from '../mutation-types';

export default {
	[GET_BALANCE](state: any, { data }: any) {
		state.balance = data.balance
	},
};
