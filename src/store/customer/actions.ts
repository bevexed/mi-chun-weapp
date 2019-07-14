import { GET_CUSTOMER, GET_CUSTOMER_ORDER_LIST } from "@/store/mutation-types";
import { reqCustomerList, reqCustomerOlderList } from "@/api/customer";

export const getCustomer = async ({commit,state}:any) => {
	let res = await reqCustomerList({page:state.currentPage + 1});
	if (res.code === 0) {
		commit(GET_CUSTOMER,res.data)
	}
}

export const getCustomerOrderList = async ({commit,state}:any,userId:any) => {
	let res = await reqCustomerOlderList({userId});
	if (res.code === 0) {
		commit(GET_CUSTOMER_ORDER_LIST,res)
	}
}
