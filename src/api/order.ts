import { ajax } from "@/api/api";

export const reqOrderList = ({ page = 1, pageSize = 10 }) => ajax('/order/list', { page, pageSize }, 'GET');
