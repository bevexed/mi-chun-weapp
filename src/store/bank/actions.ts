import {
	GET_ACCOUNT_LIST,
	GET_BANK_LIST,
	GET_WITHDRAW_ORDER_INFO,
	GET_WITHDRAW_ORDER_LIST
} from "@/store/mutation-types";
import {
	AddAccountOption, PreOptions,
	reqAccountList, reqAdd,
	reqAddAccount,
	reqBankList, reqPre,
	reqWidthdrawOrderInfo,
	reqWithdrawOrderList
} from "@/api/bank";
import { MSG_BACK, SHOW_MODAL, SHOW_MSG } from "@/utils";

export const addAccount = async ({ commit }: any, data: AddAccountOption) => {
	const { name, account ,bankName} = data;

	if (!account) {
		return SHOW_MSG({title:`请填写账户信息`})
	}
	if (!name) {
		return SHOW_MSG({title:'请填写姓名'})
	}

	SHOW_MODAL({
		title:'设置银行账户',
		content: `
		银行：${bankName}，   
		卡号：${account}，   
		姓名：${name}`,
		success:async ()=>{
			let res = await reqAddAccount(data)
			if (res.code === 0) {
				MSG_BACK({ title: '添加成功' })
			}
		}
	})
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

export const getPre = async({commit}:any,data:PreOptions)=>{
	let res = await reqPre(data);
	if (res.code === 0) {
		SHOW_MODAL({
			title:`到账金额：${res.data.realMoney}`,
			content:`费用明细 手续费：${res.data.commission} 个人所得税：${res.data.tax}`,
			success: async ()=>{
				let result = await reqAdd(data)
				if (result.code === 0) {
					MSG_BACK({icon:"success",title:'请求成功'})
				}else {
					SHOW_MSG({icon:"success",title:'请求失败'})
				}
			}
		})
	}
}

