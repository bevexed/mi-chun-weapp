import { ADD_ADDRESS, EXCHANGE_ADDRESS_LIST, GET_ADDRESS_LIST } from '../mutation-types';

export default {
	[ADD_ADDRESS](state: any, { data }: any) {
		state.data = data;
	},

	[GET_ADDRESS_LIST](state: any, { data }: any) {
		state.addressList = data
	}
,
	[EXCHANGE_ADDRESS_LIST](state:any,data:number){
		state.current = data
	}
};
