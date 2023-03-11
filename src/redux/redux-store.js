import {combineReducers, legacy_createStore} from "redux";
import postREDUCER from './postREDUCER';
import messageREDUCER from './messageREDUCER';
// import { combineReducers } from "@reduxjs/toolkit";


let reducers = combineReducers({
    postPAGE: postREDUCER,
    messagePAGE: messageREDUCER
});

// const rootReducer = combineReducers({
//     profileReducer: profileReducer,
//     messagesReducer: messagesReducer,
//   })

// const  rootReducer = combineReducers({
//     postREDUCER: postREDUCER,
//     messageREDUCER: messageREDUCER,
//   });

let store = legacy_createStore(reducers);
// export const store = configureStore({
//     reducer: rootReducer
//   });

// let store = createStore(reducers);




export default store;
