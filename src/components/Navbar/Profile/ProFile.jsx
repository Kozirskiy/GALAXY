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
<<<<<<< HEAD
                   dispatch={props.dispatch}
                // updateNewPostText={props.updateNewPostText} 

                newPostText={props.newPostText} 
                myPostData={props.myPostData} 

                
=======
                newPostText={props.store}
                updateNewPostText={props.store} 

                myPostData={props.store} 
                addPost={props.store}

                state={props.store}
>>>>>>> b42e1d0a6c18f3bdf6b0b14feb86bfc1ca18d236
            />
        </div>
    )
}
export default ProFile;