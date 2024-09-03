import {instance, GetItemsType, ResponseType} from './api';

export const usersAPI = {
  //fixme: in get request params send to params not in url
  getUsers(currentPage: number, pageSize: number, term: string = '', friend: string = '') {
    const isFriends = friend !== '' ? `&friend=${friend}` : friend;
    const isTerm = term !== '' ? `&term=${term}` : term;
    return instance
      .get<GetItemsType>(`users?page=${currentPage}&count=${pageSize}` + isTerm + isFriends)
      .then((response) => {
        return response.data;
      });
  },
  unfollow(userId: number) {
    return instance.delete<ResponseType>(`follow/${userId}`).then((response) => {
      return response.data;
    });
  },
  follow(userId: number) {
    return instance.post<ResponseType>(`follow/${userId}`).then((response) => {
      return response.data;
    });
  },
};
