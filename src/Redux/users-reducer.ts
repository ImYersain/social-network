import {UserType} from '../types/types';
import {Dispatch} from 'redux';
import {InfernActionsTypes, BaseThunkType} from './redux-store';
import {usersAPI} from '../api/users-api';

let initialState = {
  users: [] as Array<UserType>,
  pageSize: 10,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: true,
  followingProgress: [] as Array<number>, //array of users id's
  filter: {
    term: '',
    friend: '',
  },
};
export type UserReducerInitialStateType = typeof initialState;
export type UserFilterType = typeof initialState.filter;
export type ActionsTypes = InfernActionsTypes<typeof actions>;
type ThunkType = BaseThunkType<ActionsTypes>;

const usersReducer = (state = initialState, action: ActionsTypes): UserReducerInitialStateType => {
  switch (action.type) {
    case 'SN/USERS/TOGGLE_FOLLOW':
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.userId) {
            return {
              ...user,
              followed: !user.followed,
            };
          }
          return user;
        }),
      };
    case 'SN/USERS/SET_USERS':
      return {
        ...state,
        users: [...action.users],
      };
    case 'SN/USERS/SET_CURRENT_PAGE':
      return {
        ...state,
        currentPage: action.currentPage,
      };
    case 'SN/USERS/SET_FILTER':
      return {
        ...state,
        filter: action.payload,
      };
    case 'SN/USERS/SET_TOTAL_USERS_COUNT':
      return {
        ...state,
        totalUsersCount: action.count,
      };
    case 'SN/USERS/TOGGLE_IS_FETCHING':
      return {
        ...state,
        isFetching: action.isFetching,
      };
    case 'SN/USERS/TOGGLE_IS_FOLLOWING_PROGRESS':
      return {
        ...state,
        followingProgress: action.isFetching
          ? [...state.followingProgress, action.userId]
          : state.followingProgress.filter((id) => id !== action.userId),
      };
    default:
      return state;
  }
};

//action creator:
export const actions = {
  followToggle: (userId: number) =>
    ({
      type: 'SN/USERS/TOGGLE_FOLLOW',
      userId,
    }) as const,

  setUsers: (users: Array<UserType>) =>
    ({
      type: 'SN/USERS/SET_USERS',
      users, //это как users: users
    }) as const,

  setCurrentPage: (currentPage: number) =>
    ({
      type: 'SN/USERS/SET_CURRENT_PAGE',
      currentPage,
    }) as const,

  setFilter: (filter: UserFilterType) =>
    ({
      type: 'SN/USERS/SET_FILTER',
      payload: filter,
    }) as const,

  setUsersTotalCount: (totalUsersCount: number) =>
    ({
      type: 'SN/USERS/SET_TOTAL_USERS_COUNT',
      count: totalUsersCount,
    }) as const,

  toggleIsFetching: (isFetching: boolean) =>
    ({
      type: 'SN/USERS/TOGGLE_IS_FETCHING',
      isFetching: isFetching,
    }) as const,

  toggleIsFollowingProgress: (isFetching: boolean, userId: number) =>
    ({
      type: 'SN/USERS/TOGGLE_IS_FOLLOWING_PROGRESS',
      isFetching,
      userId,
    }) as const,
};

//thunk-и:

export const requestUsers =
  (page: number, pageSize: number, filter: UserFilterType): ThunkType =>
  async (dispatch, getState) => {
    dispatch(actions.toggleIsFetching(true));
    dispatch(actions.setCurrentPage(page));
    dispatch(actions.setFilter(filter)); // dispatch to state in redux store
    let response = await usersAPI.getUsers(page, pageSize, filter.term, filter.friend); // request to API

    dispatch(actions.toggleIsFetching(false));
    dispatch(actions.setUsers(response.items));
    dispatch(actions.setUsersTotalCount(response.totalCount));
  };

const _followUnfollowFlow = async (userId: number, dispatch: Dispatch<ActionsTypes>, apiMethod: any) => {
  /* общая функция чтоб не дублировать код ниже*/
  dispatch(actions.toggleIsFollowingProgress(true, userId));
  let response = await apiMethod;

  if (response.resultCode === 0) {
    dispatch(actions.followToggle(userId));
  }
  dispatch(actions.toggleIsFollowingProgress(false, userId));
};

export const follow =
  (userId: number): ThunkType =>
  async (dispatch) => {
    let apiMethod = await usersAPI.follow(userId);
    await _followUnfollowFlow(userId, dispatch, apiMethod);
  };
export const unfollow =
  (userId: number): ThunkType =>
  async (dispatch) => {
    let apiMethod = await usersAPI.unfollow(userId);
    await _followUnfollowFlow(userId, dispatch, apiMethod);
  };

export default usersReducer;
