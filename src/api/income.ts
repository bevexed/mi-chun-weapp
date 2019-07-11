import {ajax} from "@/api/api";

export interface IncomeOptions {
	startDate?:Date,
	endDate?:Date,
}

export const reqIncome = (data:IncomeOptions) => ajax('/commission/list',{...data,pageSize:10000},'GET');
