interface Ajax {
	(url: string,
	 data: object,
	 loading?: boolean,
	 method?: 'GET' | 'POST'
	): Promise<any>
}

export const baseUrl = 'https://phrevape.com/api';

let header = {
	'Content-Type': 'application/x-www-form-urlencoded',
	'token': ''
};

uni.getStorage({
	key: 'token',
	success(res) {
		console.log(res);
	},
	fail() {
		header = { ...header, 'token': '97828eb614ca4419a5dd4d332ffb1e3e' };
	}
})

export const ajax: Ajax = (url, data, loading = false, method = "GET") => {
	return new Promise((resolve, reject) => {
		uni.request({
			url: baseUrl + url,
			data,
			header,
			method,
			success(res: any): void {
				resolve(res.data);
				console.log('ajax-success', res.data);
			},
			fail(err: any): void {
				reject(err);
				console.log('ajax-error', err);
			}
		})
	})
};
