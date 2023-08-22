import {applyMiddleware, combineReducers, compose, legacy_createStore} from "redux";
import postREDUCER from './postREDUCER';
import messageREDUCER from './messageREDUCER';
import usersREDUCER from "./usersREDUCER";
import authREDUCER from "./authREDUCER";
import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form'
import appREDUCER from "./appREDUCER";

let reducers = combineReducers({
    postPAGE: postREDUCER,
    messagePAGE: messageREDUCER,
    usersPAGE: usersREDUCER,
    auth: authREDUCER,
    form: formReducer,
    app: appREDUCER
});

// let store = legacy_createStore(reducers, applyMiddleware(thunkMiddleware));

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = legacy_createStore(reducers, composeEnhancer(applyMiddleware(thunkMiddleware)));

export default store;

