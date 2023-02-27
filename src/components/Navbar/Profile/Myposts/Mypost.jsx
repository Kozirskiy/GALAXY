import React from 'react';
// import IconForPost from './iconForPost.png';
import s from './Mypost.module.css';
import Post from './Post/Post';


const Mypost = (props) => {

    
    let myPostElem = props.store.myPostData.map(postE  => <Post message={postE.message} iconLike={postE.iconLike}/>);

    let newPostElement = React.createRef();

    let addPost = () => {
        props.store.addPost();
    };

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.store.updateNewPostText(text);
    };

    return (
        <div className={s.myPost}>
            <h2 className="myPost__tittle">
                My Posts
            </h2>

            {/* <input className='' type="text" ref={newPostElement} placeholder='your news...' /> */}
            <textarea onChange={onPostChange}  type="text" ref={newPostElement}  value={props.store.newPostText}/>
            
            <div className={s.btnClass}>
                <button onClick={addPost}>Add post</button>
            </div>
            
            {myPostElem}

        </div>
    )
}

export default Mypost;