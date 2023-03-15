import React from 'react';
import { addPostActionCreator, updateNewPostActionCreator } from '../../../../redux/postREDUCER';
import StoreContext from '../../../../storeContext';
import Mypost from './Mypost';
// import store from '../../../../redux/redux-store';
// import Post from './Post/Post';


const MypostContainer = (props) => {

    //let state = props.store.getState();

    // let addPost = () => {
    //     props.store.dispatch(addPostActionCreator());
    // };

    // let onPostChange = (text) => {
    //     let action = updateNewPostActionCreator(text);
    //     props.store.dispatch(action);

    // };
    // let myPostElem = props.store.myPostData.map((elem) => {
    //     return  <Post message={elem.message} iconLike={elem.iconLike} />;
    //   });

    return (
        <StoreContext.Consumer>{     
            (store) => {
                let state = store.getState();

                let addPost = () => {
                    store.dispatch(addPostActionCreator());
                };
            
                let onPostChange = (text) => {
                    let action = updateNewPostActionCreator(text);
                    store.dispatch(action);
            
                };

              return  < Mypost
                addPost={addPost}
                updateNewPostText={onPostChange}
                myPostData={state.myPostData}
                newPostText={state.newPostText}

            /> } }
        </StoreContext.Consumer>)
}

export default MypostContainer;