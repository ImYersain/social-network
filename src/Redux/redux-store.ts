import {applyMiddleware, combineReducers, createStore} from 'redux';
import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';
import sidebarReducer from './sidebar-reducer';
import usersReducer from './users-reducer';
import authReducer from './auth-reducer';
import thunkMiddleware from 'redux-thunk';
import appReducer from './app-reducer';
import { reducer as formReducer } from 'redux-form';



let rootReducer = combineReducers({
    profilePage: profileReducer,
    usersPage: usersReducer,
    messagesPage: dialogsReducer,
    sidebar: sidebarReducer,
    auth: authReducer,
    app: appReducer,
    form: formReducer,
});

type RootReducerType = typeof rootReducer;
export type AppStateType = ReturnType<RootReducerType>

let store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export default store;
//@ts-ignore
window.store = store;