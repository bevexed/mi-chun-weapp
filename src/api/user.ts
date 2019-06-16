import { ajax } from "@/api/api";

interface GetLogin {
	code: string,
	redirect_uri?: string
}

export const reqGetLogin = ({ code }: GetLogin) => ajax('/public/user/login', { code });
