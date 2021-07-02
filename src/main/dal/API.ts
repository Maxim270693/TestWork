import axios from "axios";

const instance = axios.create({
    baseURL: "https://tager.dev.ozitag.com"
})

export const authAPI = {
    login(data: LoginParamsType) {
        return instance.post<ResponseType>('/api/auth/user', data)
    },
    me(token: string) {
        return instance.get<ResponseMeType>('/api/tager/user/profile', {headers: {'Authorization': `Bearer ${token}` }})
    },
    logOut(token: string) {
        return instance.post<ResponseLogOutType>('/api/tager/user/profile/logout',{}, {headers: {'Authorization': `Bearer ${token}` }})
    }
}

export type ResponseLogOutType = {
    success: boolean
}

export type ResMeType = {
    email: string
    id: number
    name: string
}

type ResponseMeType = {
    data: ResMeType
}

export type LoginParamsType = {
    clientId: number
    email: string
    password: string
}

type DataType = {
    accessToken: string
    expiresAt: string
    refreshToken: string
    scopes: Array<string>
    tokenType: string
}

type ResponseType = {
    data: DataType
}

