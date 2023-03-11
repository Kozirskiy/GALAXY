import React from 'react';
import { addPostActionCreator, updateNewPostActionCreator } from '../../../../redux/postREDUCER';
// import store from '../../../../redux/redux-store';
// import IconForPost from './iconForPost.png';
import s from './Mypost.module.css';
import Post from './Post/Post';
//import { initialState } from './../../../../redux/postREDUCER';



const Mypost = (props) => {

     let myPostElem = props.myPostData && props.myPostData.map((elem) => {
       return  <Post message={elem.message} iconLike={elem.iconLike} />;
     });

    //  let myPostElem = props.store.state.myPostData
    //  ?.map( elem=>  <Post message={elem.message} iconLike={elem.iconLike} />);

     //state.userReducer.users

    // let myPostElem = props.myPostData.map((e) => {
    //    return <Post message={e.message} iconLike={e.iconLike} />;
    // } );

// let dialogElements = props.dialogData.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />)

     // let myPostElem = props.myPostData;
    // if (!myPostElem) {
    //     return null;
    // }  
    // return (
    //     <React.Fragment>
    //         {myPostElem.map( postE  => <Post message={postE.message} iconLike={postE.iconLike} /> )}
    //     </React.Fragment>
    // )

    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch(addPostActionCreator());
        
        //or let action = {type: 'ADD-POST'}
        //props.dispatch(action);
    };

    let onPostChange = () => {
        let text = newPostElement.current.value;
        // props.dispatch({type: 'UPDATE-NEW-POST-TEXT', newText: text});
        let action = updateNewPostActionCreator(text);
        props.dispatch(action);
        // or
        // let action = {type: 'UPDATE-NEW-POST-TEXT', newText: text};
        // props.dispatch(action);
    };

    return (
        <div className={s.myPost}>
            <h2 className="myPost__tittle">
                My Posts
            </h2>
            {/* <input className='' type="text" ref={newPostElement} placeholder='your news...' /> */}
            <textarea onChange={onPostChange} className='' type="text" ref={newPostElement}  value={props.newPostText} placeholder='write here new text'/>
            <div className={s.btnClass}>
                <button onClick={addPost}>Add post</button>
            </div>
            {myPostElem}
        </div>
    )
}

export default Mypost;