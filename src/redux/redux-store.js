<<<<<<< HEAD
import {combineReducers, legacy_createStore} from "redux";
import postREDUCER from './postREDUCER';
import messageREDUCER from './messageREDUCER';
// import { combineReducers } from "@reduxjs/toolkit";
=======
import {legacy_createStore, combineReducers } from "redux";  
import postREDUCER from './postREDUCER';
import messageREDUCER from './messageREDUCER';
//import combineReducers from "combine-reducers";

>>>>>>> 01be926b052ece0e1b1eecc6fd754c5da3254e43


let reducers = combineReducers({
    postPAGE: postREDUCER,
    messagePAGE: messageREDUCER
});

<<<<<<< HEAD
let store = legacy_createStore(reducers);

// const rootReducer = combineReducers({
//     profileReducer: profileReducer,
//     messagesReducer: messagesReducer,
//   })

// const  rootReducer = combineReducers({
//     postREDUCER: postREDUCER,
//     messageREDUCER: messageREDUCER,
//   });



// export const store = configureStore({
//     reducer: rootReducer
//   });

// let store = createStore(reducers);

export default store;
=======


let store = legacy_createStore(reducers);







export default store;
>>>>>>> 01be926b052ece0e1b1eecc6fd754c5da3254e43
