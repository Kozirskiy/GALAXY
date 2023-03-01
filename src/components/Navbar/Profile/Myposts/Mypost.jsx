import React from 'react';
import { addPostActionCreator, updateNewPostActionCreator } from '../../../../redux/state';
// import IconForPost from './iconForPost.png';
import s from './Mypost.module.css';
import Post from './Post/Post';



const Mypost = (props) => {

<<<<<<< HEAD
    let myPostElem = props.myPostData.map( postE  => <Post message={postE.message} iconLike={postE.iconLike} /> );
=======
    
    let myPostElem = props.store.myPostData.map(postE  => <Post message={postE.message} iconLike={postE.iconLike}/>);
>>>>>>> b42e1d0a6c18f3bdf6b0b14feb86bfc1ca18d236

    let newPostElement = React.createRef();

    let addPost = () => {
<<<<<<< HEAD
        props.dispatch(addPostActionCreator());
        //or let action = {type: 'ADD-POST'}
        //props.dispatch(action);
=======
        props.store.addPost();
>>>>>>> b42e1d0a6c18f3bdf6b0b14feb86bfc1ca18d236
    };

    let onPostChange = () => {
        let text = newPostElement.current.value;
<<<<<<< HEAD
        // props.dispatch({type: 'UPDATE-NEW-POST-TEXT', newText: text});
        let action = updateNewPostActionCreator(text);
        props.dispatch(action);
        // or
        // let action = {type: 'UPDATE-NEW-POST-TEXT', newText: text};
        // props.dispatch(action);
=======
        props.store.updateNewPostText(text);
>>>>>>> b42e1d0a6c18f3bdf6b0b14feb86bfc1ca18d236
    };

    return (
        <div className={s.myPost}>
            <h2 className="myPost__tittle">
                My Posts
            </h2>

            {/* <input className='' type="text" ref={newPostElement} placeholder='your news...' /> */}
<<<<<<< HEAD
            
            <textarea onChange={onPostChange} className='' type="text" ref={newPostElement}  value={props.newPostText} placeholder='write here new text'/>
=======
            <textarea onChange={onPostChange}  type="text" ref={newPostElement}  value={props.store.newPostText}/>
>>>>>>> b42e1d0a6c18f3bdf6b0b14feb86bfc1ca18d236
            
            <div className={s.btnClass}>
                <button onClick={addPost}>Add post</button>
            </div>
            
            {myPostElem}

        </div>
    )
}

export default Mypost;