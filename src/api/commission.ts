import { ajax } from "@/api/api";

export const reqCommissionList = () => ajax('/commission/list', {}, 'GET');
