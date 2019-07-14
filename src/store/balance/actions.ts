import { GET_BALANCE } from "@/store/mutation-types";
import { reqBalance } from "@/api/balance";

export const getBalance = async ({ commit }: any) => {
	let res = await reqBalance();
	if (res.code === 0) {
		commit(GET_BALANCE,res)
	}
}

