import { ajax } from "@/api/api";
import account from "@/pages/account/account.vue";

export interface AddAccountOption {
	bankName?: string,
	bankId: number,
	account: number,
	name: string
}

export const reqAddAccount = (data:AddAccountOption) =>ajax('/withdraw/account/add',data,'POST');

export const reqBankList = () => ajax('/bank/list', {}, 'POST');

export const reqAccountList = ()=> ajax('/withdraw/account/list',{},'GET');

export const reqWithdrawOrderList = () => ajax('/withdraw/order/list',{},'GET');

export const reqWidthdrawOrderInfo = (id: any) => ajax('/withdraw/order/info', { id }, 'GET');

export interface PreOptions {
	accountId:string,
	money:string
}
export const reqPre = (data:PreOptions) => ajax('/withdraw/order/pre',data,'GET')

export const reqAdd = (data:PreOptions) =>ajax('/withdraw/order/add',data,'GET')
