import { USER_LOGIN } from '../mutation-types';

import { reqGetLogin } from "@/api/user";

export const login = async ({ commit }: any) => {
	uni.login({
		async success(res: any) {
			let result = await reqGetLogin({ code: res.code });
			if (result.code === 0) {
				uni.setStorage({
					key: 'token',
					data: result.data.token,
					async success() {
						commit(USER_LOGIN, result.data)
					}
				});
			}
		}
	});
}
