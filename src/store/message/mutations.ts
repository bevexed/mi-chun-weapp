import {
	GET_MESSAGE_LIST,
	GET_MESSAGE_TYPE_LIST
} from '../mutation-types';

export default {
	[GET_MESSAGE_TYPE_LIST](state: any, { data }: any) {
		state.msgList = data
	},
	[GET_MESSAGE_LIST](state: any, { data }: any) {
		state.msg = data
	}
};
