import {
	USER_LOGIN
} from '../mutation-types';

export default {
	[USER_LOGIN](state: any, { data }: any) {
		state.userData = data;
	},
};
