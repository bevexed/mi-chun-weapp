import { ADD_ADDRESS } from '../mutation-types';

export default {
	[ADD_ADDRESS](state: any, { data }: any) {
		state.data = data;
	},
};
