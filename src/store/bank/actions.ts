import {
	GET_ACCOUNT_LIST,
	GET_BANK_LIST,
	GET_WITHDRAW_ORDER_INFO,
	GET_WITHDRAW_ORDER_LIST
} from "@/store/mutation-types";
import {
	AddAccountOption,
	reqAccountList,
	reqAddAccount,
	reqBankList,
	reqWidthdrawOrderInfo,
	reqWithdrawOrderList
} from "@/api/bank";
import { MSG_BACK } from "@/utils";

export const addAccount = async ({ commit }: any, data: AddAccountOption) => {
	const { name, account } = data;
	let res = await reqAddAccount(data)
	if (res.code === 0) {
		MSG_BACK({ title: '添加成功' })
	}
}

export const getBankList = async ({ commit }: any) => {
	let res = await reqBankList();
	if (res.code === 0) {
		commit(GET_BANK_LIST,res)
	}
}

export const getAccountList = async ({ commit }: any) => {
	let res = await reqAccountList();
	if (res.code === 0) {
		commit(GET_ACCOUNT_LIST, res)
	}
}

export const getWithdrawOrderList = async ({ commit }: any) => {
	let res = await reqWithdrawOrderList();
	if (res.code === 0) {
		commit(GET_WITHDRAW_ORDER_LIST,res)
	}
}

export const getWithdrawOrderInfo = async ({ commit }: any, id: any) => {
	let res = await reqWidthdrawOrderInfo(id)
	if (res.code === 0) {
		commit(GET_WITHDRAW_ORDER_INFO,res)
	}
}

