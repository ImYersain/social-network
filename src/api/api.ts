import axios from 'axios';
import { UserType } from '../types/types';


export const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY':'62e00a35-a71b-4a1c-b57a-e377af0a9ee0'
      }
})


export enum ResultCodesEnum {
    success = 0,
    error = 1,
}
export enum ResultCodeForCaptcha {
    captchaIsRequired = 10
}

export type GetItemsType = {
    items: Array<UserType>,
    totalCount: number,
    error: string | null
}
export type ResponseType<D = {}, RC = ResultCodesEnum> = {
    data: D,
    resultCode: RC,
    messages: Array<string>
}





