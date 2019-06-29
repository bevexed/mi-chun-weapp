import { USER_LOGIN } from '../mutation-types';

import { reqGetLogin } from "@/api/user";

export default {
	login({ commit }: any) {
		uni.login({
			success(res: any) {
				reqGetLogin({ code: res.code }).then(
					result => {
						if (result.code === 0) {
							uni.setStorage({
								key: 'token',
								data: result.data.token,
								success() {
									commit(USER_LOGIN, result.data)
								}
							});

						}
					}
				)
			}
		});
	},
};
