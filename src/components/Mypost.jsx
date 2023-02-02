import  React from 'react';
import IconForPost from '../img/iconForPost.png';
const Mypost = () => {
    return (
        <div className="myPost dflex">
            <h2 className="myPost__tittle">
                My Posts
            </h2>
            <input className='' type="text" placeholder='your news...' />
            <div className='btnClass dflex'>
            <button>Send</button>
            </div>
            
            <div className="myPost__old dflex" id="myPost__old">
                <img src={IconForPost}className="myPost__old__icon" alt='icon'/>
                <p className="myPost__old__text">
                    Post example!
                </p>
            </div>
        </div>
    )
}

export default Mypost;