import { SHOW_MSG } from "@/utils";



interface Ajax {
	(url: string,
	 data: object,
	 method?: 'GET' | 'POST',
	 loading?: boolean,
	): Promise<any>
}

export const baseUrl = 'https://phrevape.com/api';


const header = () => {
	let header = {
		'Content-Type': 'application/x-www-form-urlencoded',
		'token': ''
	};

	return new Promise(resolve => {
		uni.getStorage({
			key: 'token',
			success(res) {
				header = { ...header, 'token': res.data };
				resolve(header)
			},
			fail() {
				resolve(header)
			}
		});
	})
};

export const ajax: Ajax = async (url, data, method = "GET", loading = true) => {
	let headerDate = await header();

	if (loading) {
		uni.showLoading({
			title: 'loading。。。',
			mask: true,
		})
	}

	return new Promise((resolve, reject) => {
		uni.request({
			url: baseUrl + url,
			data,
			header: headerDate,
			method,
			success(res: any): void {
				if (res.data.code === 2) {
					return SHOW_MSG({ title: res.data.message })
				}

				if (res.data.code !== 0) {
					return SHOW_MSG({ title: res.data.message })
				}

				resolve(res.data);
				console.log('ajax-success', res.data);

				uni.hideLoading()
			},
			fail(err: any): void {
				reject(err);
				console.log('ajax-error', err);
			},
			complete(res: any) {

			}
		})
	})
};
