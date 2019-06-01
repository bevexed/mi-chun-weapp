declare module "*.vue" {
	import Vue from 'vue'
	// @ts-ignore
    export default Vue
}

declare module '@dcloudio/uni-ui' {
	let uniNoticeBar: any;
}
