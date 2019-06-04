import {user} from '../mutation-types';

export function set({commit}:any, {data}:any) {
	commit(user, {data});
}
