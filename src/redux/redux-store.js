import {legacy_createStore, combineReducers } from "redux";  
import postREDUCER from './postREDUCER';
import messageREDUCER from './messageREDUCER';
//import combineReducers from "combine-reducers";



let reducers = combineReducers({
    postPAGE: postREDUCER,
    messagePAGE: messageREDUCER
});



let store = legacy_createStore(reducers);







export default store;