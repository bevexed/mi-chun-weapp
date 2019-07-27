import { ajax } from "@/api/api";

interface GetLogin {
	code: string,
	redirect_uri?: string
}

export const reqGetLogin = ({ code }: GetLogin) => ajax('/public/user/login', { code });

export const reqBind = (userId:any) => ajax('/fund/bind',{userId},'GET')

export const reqUnBind = ()=>ajax('/fund/unbind',{},'GET')
