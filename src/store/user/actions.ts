import {USER_LOGIN} from '../mutation-types';

import {reqGetLogin} from "@/api/user";

export default {
	login({commit}: any) {
		uni.login({
			success(res:any) {
				console.log('login', res);
				reqGetLogin({code: res.code}).then(
					result => {
						if (result.code === 200) {
							commit(USER_LOGIN, result.data)
						}
					}
				)
			}
		});
	},
};
