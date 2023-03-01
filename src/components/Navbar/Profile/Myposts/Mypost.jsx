import React from 'react';
import { addPostActionCreator, updateNewPostActionCreator } from '../../../../redux/state';
// import IconForPost from './iconForPost.png';
import s from './Mypost.module.css';
import Post from './Post/Post';



const Mypost = (props) => {

    let myPostElem = props.myPostData.map( postE  => <Post message={postE.message} iconLike={postE.iconLike} /> );

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