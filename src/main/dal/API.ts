import axios from "axios";

const instance = axios.create({
    baseURL: "https://tager.dev.ozitag.com"
})

export const authAPI = {
    login(data: LoginParamsType) {
        return instance.post<ResponseType>('/api/auth/user', data)
    }
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


