import React from 'react';
import s from './Mypost.module.css';
import Post from './Post/Post';




const Mypost = (props) => {

let state = props.postPAGE;

    let myPostElem = state.myPostData.map(p => <Post message={p.message} iconLike={p.iconLike}/>);

    let newText = state.newText;

    let newPostElement = React.createRef();

    let onAddPostClick = () => {
        props.newPostText();
    };

    let onPostChange = (e) => {
        let text = e.target.value;
        props.onPostChange(text);
        
    };
    
    return (
        <div className={s.myPost}>
            <h2 className="myPost__tittle">
                My Posts
            </h2>
            {/* <input className='' type="text" ref={newPostElement} placeholder='your news...' /> */}

            <textarea onChange={onPostChange} className='' type="text" ref={newPostElement}  value={newText} placeholder='write here new text'/>

            <div className={s.btnClass}>
                <button onClick={onAddPostClick}>Add post</button>
            </div>
            {myPostElem}
        </div>
    )
}

export default Mypost;