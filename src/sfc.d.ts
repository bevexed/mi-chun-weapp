declare module "*.vue" {
	import Vue from 'vue'
	// @ts-ignore
    export default Vue
}

declare module '@dcloudio/uni-ui' {
	let uniNoticeBar: any;
	let uniList: any;
	let uniListItem: any;
}
