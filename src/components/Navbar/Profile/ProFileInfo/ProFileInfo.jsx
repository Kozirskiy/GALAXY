import React from 'react';
import s from './ProFileInfo.module.css';
import Preloader from '../../../common/Preloader/Preloader';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';


const ProFileInfo = ({profile, status, updateStatus}) => {

    if (!profile) {
        return <Preloader />
    }

    return (
        <div className={s.contentImg__card}>

            <ProfileStatusWithHooks status={status} updateStatus={ updateStatus} />
            <div className={`${s.contentImg__card_img} ${s.dflex}`}>
                <div className={s.stylePhoto}>
                    {profile.photos.large 
                    ? <img  src={profile.photos.large} alt="photoUser" className={s.photoProfile}/> 
                    : <img  src={`${'https://www.freeiconspng.com/thumbs/tiger-png/white-tiger-png-23.png'}`} alt="photoUser2" className={s.photoProfile}/>}
                </div>
                

                {/* <img src={PhotoFace} alt="face" /> */}

                <div className={s.contentImg__card_info}>

                    <p className={s.contentImg__card_info_name}>
                       Name: <span className={s.spanClass}> {profile.fullName}</span>
                        
                    </p>

                    <p className={s.contentImg__card_info_name}>

                    Number of ID: <span className={s.spanClass}> {profile.userId}</span> 

                    </p>

                    <p className={s.contentImg__card_info_name}>
                      Contacts: <span className={s.spanClass}> {profile.contacts.github}</span>
                      
                    </p>

                </div>
            </div>
        </div>
    )
}

export default ProFileInfo;
