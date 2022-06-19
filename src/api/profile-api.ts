import { instance, ResponseType } from './api';
import { ProfileType, PhotosType } from '../types/types';


type SavePhotoResponseType = {
    photos: PhotosType
}

export const profileAPI = {

    getProfile(userId: number){
        return instance.get<ProfileType>(`profile/${userId}`)
            .then(response => {
                return response.data
            })
    },
    getStatus(userId: number){
        return instance.get<string>(`profile/status/${userId}`)
        .then(response => {
            return response.data
        })
    },
    updateStatus(status: string){
        return instance.put<ResponseType>(`profile/status`, { status: status })
        .then(response => {
            return response.data
        })
    },
    savePhoto(file: any){
        const formData = new FormData();
        formData.append('image', file);
        return instance.put<ResponseType<SavePhotoResponseType>>(`profile/photo`, formData, { headers: {
            'Content-Type': 'multipart/form-data'
          }})
        .then(response => {
            return response.data
        })
    },
    saveProfile(profile: ProfileType){
        return instance.put<ResponseType>(`profile`, profile)
        .then(response => {
            return response.data
        })
    }
}