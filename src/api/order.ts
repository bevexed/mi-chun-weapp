import { ajax } from "@/api/api";

export const reqOrderList = ({ page = 1, pageSize = 10 }) => ajax('/order/list', { page, pageSize }, 'GET');

interface createOrderOptions {
	skus: string, counts: string, addressId: string, recommendUserId?: number
}
export const reqCreateOrder = (data:createOrderOptions) => ajax('/order/create', data, 'POST');

export const reqWechatPay = (orderNum:any)=> ajax('/order/pay/wechat',{orderNum},'POST');

export const reqPayBalance = (orderNum:any)=> ajax('/order/pay/balance',{orderNum},'POST');
