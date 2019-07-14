import { GET_MESSAGE_LIST, GET_MESSAGE_TYPE_LIST } from "@/store/mutation-types";
import { reqMessageList, reqMessagetypeList } from "@/api/message";

export const getMessageTypeList = async ({ commit }: any) => {
	let res = await reqMessagetypeList()
	if (res.code === 0) {
		commit(GET_MESSAGE_TYPE_LIST, res)
	}
}

export const getMessageList = async ({ commit }: any, type: any) => {
	let res = await reqMessageList(type);
	if (res.doe === 0) {
		commit(GET_MESSAGE_LIST, res)
	}
}
