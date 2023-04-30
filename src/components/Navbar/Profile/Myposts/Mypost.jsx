import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { maxLenghtCreator, required } from '../../../../utils/validators/validators';
import { Textarea } from '../../../common/FormsControls/FormsControls';
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
const maxLenght10 = maxLenghtCreator(10);

const AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name={'newPostText'} 
                       component={Textarea}
                    //    type="textarea"
                       placeholder={'New post'} 
                       validate={[required, maxLenght10]}
                       />
            </div>
            <div className={s.btnClass}>
                <button>Add post</button>
            </div>
        </form>
    )
}

const AddNewPostFormredux = reduxForm({form: 'ProfileAddNewPostForm'}) (AddNewPostForm)



export default Mypost;