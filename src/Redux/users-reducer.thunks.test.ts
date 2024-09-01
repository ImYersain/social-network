import { actions, follow } from "./users-reducer";
import { usersAPI } from "../api/users-api";
import { ResponseType, ResultCodesEnum } from "../api/api";
//mocking api
jest.mock('../api/users-api');
const usersMockAPI = usersAPI as jest.Mocked<typeof usersAPI>

//mock result of requests on api
const mockResult: ResponseType = {
    resultCode: ResultCodesEnum.success,
    messages: [],
    data: {id: 1, email: 'test@mail.com', login: 'test_login'}
};

//mock dispatch and mock getState to avoid using real dispacth and getState (in unit test it's nonsense)
const dispatchMock = jest.fn();
const getStateMock = jest.fn();


//before every test, will be new instance of initialState
beforeEach(() => {
    dispatchMock.mockClear();
    getStateMock.mockClear();
    usersMockAPI.follow.mockClear();
    usersMockAPI.unfollow.mockClear();
})

//tunk tests
test('toggle fullow/unfollow thunk test', async () => {
    usersMockAPI.follow.mockReturnValue(Promise.resolve(mockResult));
    
    //thunk creater  create thunk to thunk variable
    const thunk = follow(0);

    await thunk(dispatchMock, getStateMock, {});
    expect((dispatchMock)).toBeCalledTimes(3);
    expect((dispatchMock)).toHaveBeenNthCalledWith(1, actions.toggleIsFollowingProgress(true, 0));
    expect((dispatchMock)).toHaveBeenNthCalledWith(2, actions.followToggle(0));
    expect((dispatchMock)).toHaveBeenNthCalledWith(3, actions.toggleIsFollowingProgress(false, 0));
})