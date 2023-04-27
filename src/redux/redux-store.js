import {applyMiddleware, combineReducers, legacy_createStore} from "redux";
import postREDUCER from './postREDUCER';
import messageREDUCER from './messageREDUCER';
import usersREDUCER from "./usersREDUCER";
import authREDUCER from "./authREDUCER";
import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form'

let reducers = combineReducers({
    postPAGE: postREDUCER,
    messagePAGE: messageREDUCER,
    usersPAGE: usersREDUCER,
    auth: authREDUCER,
    form: formReducer
});

let store = legacy_createStore(reducers, applyMiddleware(thunkMiddleware));


window.store = store;

export default store;

