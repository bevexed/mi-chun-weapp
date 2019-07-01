import { GET_ORDER_LIST } from '../mutation-types';
import { reqOrderList } from "@/api/order";

export const getOrderList = async ({ commit }: any) => {
	let res = await reqOrderList({});
	if (res.code === 0) {
		commit(GET_ORDER_LIST,res.data)
	}
}
