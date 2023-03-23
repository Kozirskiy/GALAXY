//import React from 'react';
import { addPostActionCreator, updateNewPostActionCreator } from '../../../../redux/postREDUCER';
import Mypost from './Mypost';
import { connect } from 'react-redux';


import StoreContext from '../../../../storeContext';
// import store from '../../../../redux/redux-store';
// import Post from './Post/Post';



const MypostContainer = () => {

    return (
        <StoreContext.Consumer>
            { (store) => {

                let state = store.getState().postPAGE;
                

                let addPost = () => {
                    store.dispatch(addPostActionCreator());
                };
            
                let onPostChangeChange = (text) => {
                    store.dispatch(updateNewPostActionCreator(text));
                };


              return  < Mypost
                                // onAddPostClick={addPost}
                                onPostChange={onPostChangeChange}
                                newPostText={addPost}
                                postPAGE={state}
                                
                                //                     myPostElem={addPost}
                                //                     // newPostText={onPostChange}
                                // myPostData={state.postPAGE.myPostData}
                                                    // newPostText = {state.postPAGE.newPostText}

            /> } }
        </StoreContext.Consumer>)
}





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