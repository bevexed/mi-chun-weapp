import { ADD_ADDRESS, GET_ADDRESS_LIST } from '../mutation-types';

export default {
	[ADD_ADDRESS](state: any, { data }: any) {
		state.data = data;
	},

	[GET_ADDRESS_LIST](state: any, { data }: any) {
		state.addressList = data
	}

};
