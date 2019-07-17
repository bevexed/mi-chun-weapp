interface Toast {
	title: string,
	icon?: "none" | "success"
}

export const SHOW_MSG = ({ title, icon = "none" }: Toast) => {
	uni.showToast({
		title,
		icon,
		mask: true
	})
};

interface MsgToOption extends Toast {
	url?: string,
	during?: number
}

export const MSG_TO = ({ title, url, icon = "success", during = 2000 }: MsgToOption) => {
	uni.showToast({
		title,
		icon,
		mask: true,
		success() {
			setTimeout(() => {
				uni.navigateTo({
					url
				})
			}, during)
		}
	})
};

export const MSG_BACK = ({ title, icon = "success", during = 2000 }: MsgToOption) => {
	uni.showToast({
		title,
		icon,
		mask: true,
		success() {
			setTimeout(() => {
				uni.navigateBack({
					delta: 1
				})
			}, during)
		}
	})
};

export const MSG_RELAUNCH = ({ title, url, icon = "success", during = 2000 }: MsgToOption) => {
	uni.showToast({
		title,
		icon,
		mask: true,
		success() {
			setTimeout(() => {
				uni.reLaunch({
					url
				})
			}, during)
		}
	})
};

export const TO = (url: string) => uni.navigateTo({ url });

interface ShowModalOptions {
	title:string,
	content:string,
	success:Function,
	cancelText?:string,
	cancelColor?:string,
	confirmText?:string,
	confirmColor?:string,
}

export const SHOW_MODAL = ({title,content,cancelText = '取消',cancelColor='#000000',confirmText='确认',confirmColor = '#000',success}:ShowModalOptions) =>{
	uni.showModal({
		title,
		content,
		confirmText,
		confirmColor,
		cancelText,
		cancelColor,
		success(res){
			if(res.confirm){
				success()
			}else if(res.cancel){
				console.log('取消');
			}
		}
	})
};
