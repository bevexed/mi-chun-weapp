export function curWithdrawOrderList(state: any) {
	let list = state.withdrawOrderList.map(({ addDate, ...items }: any) => ({
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

