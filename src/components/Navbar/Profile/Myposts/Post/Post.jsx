import  React from 'react';
import IconForPost from './iconForPost.png';
import s from './Post.module.css';


const Post = (props) => {
    
    return (<div className={s.postStyle}>
                 <div className={`${s.myPost__old} ${s.dfex}`} id="myPost__old">
                    <img src={IconForPost} className={s.myPost__old__icon} alt='icon'/>
                    <p className={s.myPost__old__text}>
                        {props.message}
                    </p>
                </div>
                <span className={s.iconStyle}>
                    Like {props.iconLike}
                </span>
            </div>
       
    )
}
export default Post;