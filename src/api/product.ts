import {ajax} from "@/api/api";


export const reqProductInfo = (skuId: number) => ajax('/product/info', {skuId});

export const reqProductList = ({ page = 1, pageSize = 1000 }) => ajax('/product/list', { page, pageSize }, 'GET');
