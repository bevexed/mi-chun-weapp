/**
 * 首页
 * */

import {ajax} from "@/api/api";

export const reqInfo =()=> ajax('/fund/info',{},true,'GET');
