import React from 'react';
import s from './ProFile.module.css';
import GalaxyPhoto from './galaxy.jpg';
import ProFileInfo from './ProFileInfo/ProFileInfo';
import MypostContainer from './Myposts/MypostContainer';





const ProFile = (props) => {


    return (
        <div className={s.contentBlock}>
            <div className={s.contentImg}>
                <img className={s.headerContent} src={GalaxyPhoto} alt="bg" />
            </div>
            <ProFileInfo />
            <MypostContainer 
                                // store = {props.store}
                                // state = {props.state}



                                // myPostData={props.appState.myPostData}
                                // dispatch={props.dispatch}
                                // updateNewPostText={props.updateNewPostText} 


                                // newPostText={props.newPostText} 
                                // myPostData={props.myPostData} 
            />
        </div>
    )
}
export default ProFile;