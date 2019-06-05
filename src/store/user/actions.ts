import {USER_LOGIN} from '../mutation-types';

import {reqGetLogin} from "@/api";

export default {
	[USER_LOGIN](commit: any, data: any) {
		uni.login({
			success(res) {
				console.log('login', res);
				reqGetLogin({code: '1123'}).then(
					result => {
						console.log('userData', result);
						if (result.code === 200) {
							commit(USER_LOGIN, result.data)
						}
					}
				)
			}
		});
	},

	aaa(){
		console.log('aaa');
	}
};
