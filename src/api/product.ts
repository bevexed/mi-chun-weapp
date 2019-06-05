import {ajax} from "@/api/api";


export const reqProductInfo = (skuId: number) => ajax('/product/info', {skuId});
