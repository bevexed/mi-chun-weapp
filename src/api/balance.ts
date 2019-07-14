import {ajax} from "@/api/api";

export const reqBalance = () => ajax('/balance/info',{},'POST');
