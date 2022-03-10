import * as axios from 'axios';


const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY':'62e00a35-a71b-4a1c-b57a-e377af0a9ee0'
      }
})


export const usersAPI = {

    getUsers(currentPage, pageSize){
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
          .then(response => {
              return response.data
          })
    },

    unfollow(userId){
        return instance.delete(`follow/${userId}`)
            .then(response => {
                return response.data
            })
    },

    follow(userId){
        return instance.post(`follow/${userId}`)
            .then(response => {
                return response.data
            })
    },

    getUser(userId){
        return instance.get(`profile/${userId}`)
            .then(response => {
                return response.data
            })
    },

    auth(){
        return instance.get(`auth/me`)
            .then(response => {
                return response.data
            })
    }
}

