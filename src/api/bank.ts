import { ajax } from "@/api/api";

export interface AddAccountOption {
	bankId: number,
	account: number,
	name: string
}

export const reqAddAccount = (data:AddAccountOption) =>ajax('/withdraw/account/add',data,'POST');

export const reqBankList = () => ajax('/bank/list', {}, 'POST');

export const reqAccountList = ()=> ajax('/withdraw/account/list',{},'GET');


export const reqWithdrawOrderList = () => ajax('/withdraw/order/list',{},'GET');

