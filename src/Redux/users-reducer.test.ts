import usersReducer, { ActionsTypes, UserReducerInitialStateType, actions, follow } from "./users-reducer";


let state: UserReducerInitialStateType;

//before every test, will be new instance of initialState
beforeEach(() => {
    state = {
        users: [
            {id: 0, name: 'John', followed: true, photos: {large: null, small: null}, status: 'hello'},
            {id: 1, name: 'Alex', followed: false, photos: {large: null, small: null}, status: 'halo'},
        ],
        pageSize: 10,
        totalUsersCount: 0,
        currentPage: 1,
        isFetching: false,
        followingProgress: [] 
    }
})

test('Set users test', () => {
    // 1 - state 
    // 2 - action to reducer 
    // 3 - expect

    const action: ActionsTypes = {type: 'SN/USERS/SET_USERS',  users: [
        {id: 3, name: 'Juan', followed: true, photos: {large: null, small: null}, status: 'hello'},
        {id: 4, name: 'Didier', followed: false, photos: {large: null, small: null}, status: 'halo'},
        {id: 5, name: 'Didier', followed: false, photos: {large: null, small: null}, status: 'halo'},
        {id: 6, name: 'Didier', followed: false, photos: {large: null, small: null}, status: 'halo'},
    ],}
    
    const newState = usersReducer(state, action);

    expect(newState.users.length).toBeGreaterThanOrEqual(3);
});

test('Toggle follow/unfollow user', () => {
    const newState2 = usersReducer(state, actions.followToggle(0));
    const newState3 = usersReducer(state, actions.followToggle(1));

    expect(newState2.users[0].followed).toBeFalsy();
    expect(newState3.users[1].followed).toBeTruthy();
})
