//import React from 'react';
import { addPostActionCreator, updateNewPostActionCreator } from '../../../../redux/postREDUCER';
import Mypost from './Mypost';
import { connect } from 'react-redux';
import StoreContext from '../../../../storeContext';
// import store from '../../../../redux/redux-store';
// import Post from './Post/Post';



// const MypostContainer = () => {

//     return (
//         <StoreContext.Consumer>
//             { (store) => {

//                 // let state = store.getState().postPAGE;
                

//                 let addPost = () => {
//                     store.dispatch(addPostActionCreator());
//                 };
            
//                 let onPostChangeChange = (text) => {
//                     store.dispatch(updateNewPostActionCreator(text));
//                 };


//               return  < Mypost
//                                 onPostChange={onPostChangeChange}
//                                 newPostText={addPost}
//                                 postPAGE={store.getState().postPAGE}
                                

//             /> } }
//         </StoreContext.Consumer>)
// }
let MapStateToProps = (state) => {
    return {
        postPAGE: state.postPAGE
    }
}

let MapDispatchToProps = (dispatch) => {
    return {
        onPostChange: (text) =>  {
            dispatch(updateNewPostActionCreator(text));
        },
        newPostText: () => {
            dispatch(addPostActionCreator())
        }
    }
}


const MypostContainer = connect(MapStateToProps, MapDispatchToProps)(Mypost);




// const mapStateToProps = (state) => {
//     return {
//         postPAGE: state.postPAGE,
//         myPostData: state.postPAGE.myPostData
//     };
// };

// const mapDispatchToProps = (dispatch) => { 
//     return {
//         newPostText: () => {
//             dispatch(addPostActionCreator());
//         },
//         onPostChange: (text)=> {
//             dispatch(updateNewPostActionCreator(text));
//         }
//     };
// };

// const MypostContainer = () => connect (mapStateToProps, mapDispatchToProps) (Mypost);

export default MypostContainer;