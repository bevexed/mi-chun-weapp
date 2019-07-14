export function data(state: any) {
	let list = state.comeList.map(({ addDate, ...items }: any) => ({
		year: new Date(addDate).getFullYear(),
		month: new Date(addDate).getMonth(),
		day: new Date(addDate).getDate(),
		...items
	}));

	let year = list.map(({ year }: any) => year);

	let data = [];
	for (let i = 0; i < 12; i++) {
		let arr = list.filter(({ month }: any) => month === i);

		if (arr.length) {
			data.push({
				time: 2019 + '年' + (i + 1) + '月',
				income: arr.reduce((pre: any, cur: any) => parseFloat(pre) + parseFloat(cur.money), 0).toFixed(2),
				list: arr
			})
		}
	}

	return data
}

export const today = (state: any) => {
	let list = state.comeList.map(({ addDate, ...items }: any) => ({
		year: new Date(addDate).getFullYear(),
		month: new Date(addDate).getMonth(),
		day: new Date(addDate).getDate(),
		...items
	}));

	let year = list.map(({ year }: any) => year);


	let data = [];
	let arr = list.filter(({ day }: any) => day === new Date().getDate());

	data.push({
		time: '今日收益',
		income: arr.reduce((pre: any, cur: any) => parseFloat(pre) + parseFloat(cur.money), 0).toFixed(2),
		list: arr
	})

	let arr2 = list.filter(({ day }: any) => day === new Date().getDate() - 1);

	data.push({
		time: '昨日收益',
		income: arr2.reduce((pre: any, cur: any) => parseFloat(pre) + parseFloat(cur.money), 0).toFixed(2),
		list: arr2
	})

	return data
}
