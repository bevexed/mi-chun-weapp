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
