import {combineReducers, legacy_createStore} from "redux";
import postREDUCER from './postREDUCER';
import messageREDUCER from './messageREDUCER';
import usersREDUCER from "./usersREDUCER";

let reducers = combineReducers({
    postPAGE: postREDUCER,
    messagePAGE: messageREDUCER,
    usersPAGE: usersREDUCER
});

let store = legacy_createStore(reducers);


window.store = store;

export default store;

