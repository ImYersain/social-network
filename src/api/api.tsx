import axios from 'axios';
import { ProfileType } from '../types/types';


const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY':'62e00a35-a71b-4a1c-b57a-e377af0a9ee0'
      }
})


export const usersAPI = {

    getUsers(currentPage: number, pageSize: number){
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
          .then(response => {
              return response.data
          })
    },
    unfollow(userId: number){
        return instance.delete(`follow/${userId}`)
            .then(response => {
                return response.data
            })
    },
    follow(userId: number){
        return instance.post(`follow/${userId}`)
            .then(response => {
                return response.data
            })
    },
    getProfile(userId: number){
        // console.warn('Obsolete method. Please use ProfileAPI object');
        return profileAPI.getProfile(userId);
    }
}

export const profileAPI = {

    getProfile(userId: number){
        return instance.get(`profile/${userId}`)
            .then(response => {
                return response.data
            })
    },
    getStatus(userId: number){
        return instance.get(`profile/status/${userId}`)
        .then(response => {
            return response.data
        })
    },
    updateStatus(status: string){
        return instance.put(`profile/status`, { status: status });
    },
    savePhoto(file: any){
        const formData = new FormData();
        formData.append('image', file);
        return instance.put(`profile/photo`, formData, { headers: {
            'Content-Type': 'multipart/form-data'
          }});
    },
    saveProfile(profile: ProfileType){
        return instance.put(`profile`, profile);
    }
}

export enum ResultCodesEnum {
    success = 0,
    error = 1,
    captchaIsRequired = 10,
}
type MeResponseType = {
    data: {
        id: number
        email: string
        login: string
    }
    resultCode: ResultCodesEnum
    messages: Array<string>
}
export const authAPI = {
    me(){
        return instance.get<MeResponseType>(`auth/me`)
        .then(response => {
            return response.data
        })
    },
    login(email: string, password: string, rememberMe: boolean = false, captcha: null | string = null){
        return instance.post(`auth/login`,{ email, password, rememberMe, captcha })
    },
    logout(){
        return instance.delete(`auth/login`)
    }

}

export const securityAPI = {
    getCaptchaUrl(){
        return instance.get(`security/get-captcha-url`)
        .then(response => {
            return response.data
        })
    }
}



