import {
	USER_LOGIN
} from '../mutation-types';

export default {
	[USER_LOGIN](state: any,  data : any) {
		console.log(1,data);
		state.userData = data;
	},
	login(state: any,  data : any) {
		state.login = data;
	},
};
