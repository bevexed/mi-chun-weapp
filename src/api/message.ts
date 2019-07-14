import { ajax } from "./api";

export const reqMessagetypeList = () => ajax('/message/typelist', {}, 'POST');

export const reqMessageList = (type:any) => ajax('/message/list', {type}, 'POST');
