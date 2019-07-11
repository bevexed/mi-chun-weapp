import {
	GET_INCOME
} from '../mutation-types';

export default {
	[GET_INCOME](state: any, { data }: any) {
		state.comeList = data.result
	}
};
