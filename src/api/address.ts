import { ajax } from './api'

export interface Address {
	address: string,
	userName: string,
	phone: string
}

export const reqAddAddress = (data: Address) => ajax('/address/add', data, 'POST');

export const reqAddress = () => ajax('/address/list', {}, 'GET');
