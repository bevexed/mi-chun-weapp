import { ajax } from "@/api/api";

export const reqCustomerList = ({ page = 1, pageSize = 100 }) => ajax('/customer/list', { page, pageSize }, 'POST');


export const reqCustomerOlderList = ({userId}:any) => ajax('/customer/orders',{userId},'POST')
