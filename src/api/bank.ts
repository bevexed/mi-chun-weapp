import { ajax } from "@/api/api";

export const reqBankList = () => ajax('/bank/list', {}, 'POST');
