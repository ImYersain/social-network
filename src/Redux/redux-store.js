import {combineReducers, createStore} from 'redux';
import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';
import sidebarReducer from './sidebar-reducer';
import usersReducer from './users-reducer';
import authReducer from './auth-reducer';


let reducers = combineReducers({
    profilePage: profileReducer,
    usersPage: usersReducer,
    messagesPage: dialogsReducer,
    sidebar: sidebarReducer,
    auth: authReducer,
});

let store = createStore(reducers);

export default store;
window.store = store;