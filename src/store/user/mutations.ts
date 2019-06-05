import {USER} from '../mutation-types';

export default {
	[USER](state: any, {data}: any) {
		state.data = data;
	},
};
