import {combineReducers, legacy_createStore} from "redux";
import postREDUCER from './postREDUCER';
import messageREDUCER from './messageREDUCER';

let reducers = combineReducers({
    postPAGE: postREDUCER,
    messagePAGE: messageREDUCER
});

let store = legacy_createStore(reducers);

export default store;

