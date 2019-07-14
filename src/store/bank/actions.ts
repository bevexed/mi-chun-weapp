import { GET_BANK_LIST } from "@/store/mutation-types";
import { reqBankList } from "@/api/bank";

export const getBankList = async ({ commit }: any) => {
	let res = await reqBankList();
	if (res.code === 0) {
		commit(GET_BANK_LIST,res)
	}
}

