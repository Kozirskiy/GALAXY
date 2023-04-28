import React from 'react';
import { reduxForm, Field } from 'redux-form';
import s from './Mypost.module.css';
import Post from './Post/Post';




const Mypost = (props) => {

    let state = props.postPAGE;

    let myPostElem = state.myPostData.map(p => <Post message={p.message} iconLike={p.iconLike} />);

    let onAddPost = (values) => {
        props.addPost(values.newPostText);
    };

    return (
        <div className={s.myPost}>
            <h2 className="myPost__tittle">
                My Posts
            </h2>

        <AddNewPostFormredux onSubmit={onAddPost}/>
            {myPostElem}
        </div>
    )
}

const AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name={'newPostText'} component={'textarea'} placeholder={'New post'}/>
            </div>
            <div className={s.btnClass}>
                <button>Add post</button>
            </div>
        </form>
    )
}

const AddNewPostFormredux = reduxForm({form: 'ProfileAddNewPostForm'}) (AddNewPostForm)



export default Mypost;