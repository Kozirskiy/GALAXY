import React from 'react';
import s from './ProFile.module.css';
import GalaxyPhoto from './galaxy.jpg';
import Mypost from './Myposts/Mypost';
import ProFileInfo from './ProFileInfo/ProFileInfo';





const ProFile = (props) => {
    
    
    return (
        <div className={s.contentBlock}>
            <div className={s.contentImg}>
                <img className={s.headerContent} src={GalaxyPhoto} alt="bg" />
            </div>
            <ProFileInfo />
            {/* <Route path="/profile" element={<ProFile dialogs={dialogs} messages={messages} />} /> */}
            <Mypost 
                updateNewPostText={props.updateNewPostText} 
                newPostText={props.newPostText} 
                myPostData={props.myPostData} 
                addPost={props.addPost}
            />
        </div>
    )
}
export default ProFile;