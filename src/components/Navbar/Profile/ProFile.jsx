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


                dispatch={props.dispatch}
                updateNewPostText={props.updateNewPostText} 
                store = {props.store}

                newPostText={props.newPostText} 
                myPostData={props.myPostData} 
                
                
            />
        </div>
    )
}
export default ProFile;