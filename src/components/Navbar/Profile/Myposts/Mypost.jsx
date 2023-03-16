import React from 'react';
import s from './Mypost.module.css';
import Post from './Post/Post';




const Mypost = (props) => {

<<<<<<< HEAD
    //  let state = props.myPostData;

     let myPostElem = props.myPostData?.map((elem)=> {
           return <Post message={elem.message} iconLike={elem.iconLike}/>});

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
=======
   let myPostElem = props.myPostData.map( postE  => <Post message={postE.message} iconLike={postE.iconLike} /> );
>>>>>>> 01be926b052ece0e1b1eecc6fd754c5da3254e43


    // let myPostElem = props.myPostData;
    // if (!myPostElem) {
    //     return null;
    // }  
    // return (
    //     <React.Fragment>
    //         {myPostElem.map( postE  => <Post message={postE.message} iconLike={postE.iconLike} /> )}
    //     </React.Fragment>
    // )

    





    // Using an if check
// if (!posts) {
//     return null
// }

// // Here post will not be undefined anymore
// return (
//     <React.Fragment>
//         {posts.map(post => <Card details={post} />)}
//     </React.Fragment>
// )
    let newPostElement = React.createRef();

    let onAddPost = () => {
        props.addPost();
    };

    let onPostChange = (e) => {
        let text = e.target.value;
        props.updateNewPostText(text);
        
    };

    return (
        <div className={s.myPost}>
            <h2 className="myPost__tittle">
                My Posts
            </h2>
            {/* <input className='' type="text" ref={newPostElement} placeholder='your news...' /> */}

            <textarea onChange={onPostChange} className='' type="text" ref={newPostElement}  value={props.newPostText} placeholder='write here new text'/>

            <div className={s.btnClass}>
                <button onClick={onAddPost}>Add post</button>
            </div>
            {myPostElem}
        </div>
    )
}

export default Mypost;