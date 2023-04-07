import {combineReducers, legacy_createStore} from "redux";
import postREDUCER from './postREDUCER';
import messageREDUCER from './messageREDUCER';
import usersREDUCER from "./usersREDUCER";
import authREDUCER from "./authREDUCER";

let reducers = combineReducers({
    postPAGE: postREDUCER,
    messagePAGE: messageREDUCER,
    usersPAGE: usersREDUCER,
    auth: authREDUCER
});

let store = legacy_createStore(reducers);


window.store = store;

export default store;

