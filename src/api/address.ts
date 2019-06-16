import { ajax } from './api'

export interface Address {
	address: string,
	userName: string,
	phone: string
}

export const reqAddAddress = (data: Address) => ajax('/address/add', data, true, 'POST');
