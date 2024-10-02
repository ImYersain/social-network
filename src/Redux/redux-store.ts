import {Action, applyMiddleware, combineReducers, compose, createStore} from 'redux';
import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';
import sidebarReducer from './sidebar-reducer';
import usersReducer from './users-reducer';
import authReducer from './auth-reducer';
import thunkMiddleware, { ThunkDispatch } from 'redux-thunk';
import appReducer from './app-reducer';
import { reducer as formReducer } from 'redux-form';
import { ThunkAction } from 'redux-thunk';
import chatReducer from './chat-reducer';



let rootReducer = combineReducers({
    profilePage: profileReducer,
    usersPage: usersReducer,
    messagesPage: dialogsReducer,
    sidebar: sidebarReducer,
    auth: authReducer,
    app: appReducer,
    form: formReducer,
    chat: chatReducer,
})

type RootReducerType = typeof rootReducer
export type AppStateType = ReturnType<RootReducerType>

type PropertiesTypes<T> = T extends {[key: string]: infer U}? U: never
export type InfernActionsTypes<T extends {[key: string]: (...args: any[]) =>any}> = ReturnType<PropertiesTypes<T>>
export type BaseThunkType<A extends Action, R = Promise<void>>  =  ThunkAction<R,AppStateType, unknown, A>

 
//@ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware)))


//@ts-ignore
window.__store__ = store

export default store