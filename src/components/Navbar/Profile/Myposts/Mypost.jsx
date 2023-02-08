import  React from 'react';
// import IconForPost from './iconForPost.png';
import s from './Mypost.module.css';
import Post from './Post/Post';

const Mypost = (props) => {
    return (
        <div className={s.myPost}>
            <h2 className="myPost__tittle">
                My Posts
            </h2>
            <input className='' type="text" placeholder='your news...' />
            <div className={s.btnClass}>
              <button>Send</button>
            </div>
            <Post message="First post" iconLike="12"/>
            <Post message="Second post" iconLike="15"/>
            <Post message="Third post" iconLike="23"/>
        </div>
    )
}

export default Mypost;