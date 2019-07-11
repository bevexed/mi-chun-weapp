import { GET_INCOME } from "@/store/mutation-types";
import { IncomeOptions, reqIncome } from "@/api/income";

export const getIncome = async ({commit}:any,data:IncomeOptions) => {
	let res = await reqIncome(data);
	if (res.code === 0) {
		commit(GET_INCOME,res)
	}
}
