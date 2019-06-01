interface Ajax {
	(url: string,
	 data: object,
	 loading?: boolean,
	 method?: 'GET' | 'POST'
	): Promise<any>
}

export const baseUrl = 'http://yapi.51xianzu.com/mock/7';

export const ajax: Ajax = (url, data, loading = false, method = "GET") => {
	return new Promise((resolve, reject) => {
		uni.request({
			url: baseUrl + url,
			data,
			method,
			success(res: any): void {
				resolve(res)
			},
			fail(err: any): void {
				reject(err)
			}
		})
	})
};
