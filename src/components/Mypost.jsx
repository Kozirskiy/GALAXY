import  React from 'react';
import IconForPost from '../img/iconForPost.png';
import s from './Mypost.module.css';

const Mypost = () => {
    return (
        <div className={s.myPost}>
            <h2 className="myPost__tittle">
                My Posts
            </h2>
            <input className='' type="text" placeholder='your news...' />
            <div className={`${s.btnClass} ${s.dflex}`}>
            <button>Send</button>
            </div>
            
            <div className={`${s.myPost__old} ${s.dflex}`} id="myPost__old">
                <img src={IconForPost}className="myPost__old__icon" alt='icon'/>
                <p className={s.myPost__old__text}>
                    Post example!
                </p>
            </div>
            <div className={`${s.myPost__old} ${s.dfex}`} id="myPost__old">
                <img src={IconForPost}className={s.myPost__old__icon} alt='icon'/>
                <p className={s.myPost__old__text}>
                    Post example! Post example! Post example!
                </p>
            </div>
        </div>
    )
}

export default Mypost;