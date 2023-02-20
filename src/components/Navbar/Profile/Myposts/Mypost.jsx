import React from 'react';
// import IconForPost from './iconForPost.png';
import s from './Mypost.module.css';
import Post from './Post/Post';


const Mypost = (props) => {


    // let myPostData = [
    //     { id: 1, message: "First post", iconLike: 12 },
    //     { id: 2, message: "Second post", iconLike: 15 },
    //     { id: 3, message: "Third post", iconLike: 23 }
    //   ];
    
    
    let myPostElem = props.myPostData.map(postE  => <Post message={postE.message} iconLike={postE.iconLike} />);

    return (
        <div className={s.myPost}>
            <h2 className="myPost__tittle">
                My Posts
            </h2>
            <input className='' type="text" placeholder='your news...' />
            <div className={s.btnClass}>
                <button>Send</button>
            </div>
            
            {myPostElem}

        </div>
    )
}

export default Mypost;