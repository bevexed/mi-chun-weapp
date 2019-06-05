import {USER} from '../mutation-types';

export function set({commit}: any, {data}: any) {
	commit(USER, {data});
}
