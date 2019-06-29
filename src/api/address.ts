import { ajax } from './api'

export interface Address {
	address: string,
	userName: string,
	phone: string
}

export const reqAddAddress = (data: Address) => ajax('/address/add', data, 'POST');

export const reqAddress = () => ajax('/address/list', {}, 'GET');

export interface UpdateAddressOption extends Address {
	addressId: string
}

export const reqUpdateAddress = (data: UpdateAddressOption) => ajax('/address/update', data, 'POST');
