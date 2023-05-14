import React from 'react';
import s from './ProFileInfo.module.css';
// import PhotoFace from './mc.png';
import Preloader from '../../../common/Preloader/Preloader';
import ProfileStatus from './ProfileStatus';


const ProFileInfo = (props) => {

    if (!props.profile) {
        return <Preloader />
    }

    return (
        <div className={s.contentImg__card}>

            <ProfileStatus status={props.status} updateStatus={ props.updateStatus} />
            <div className={`${s.contentImg__card_img} ${s.dflex}`}>
                <div className={s.stylePhoto}>
                    {props.profile.photos.large 
                    ? <img  src={props.profile.photos.large} alt="photoUser" className={s.photoProfile}/> 
                    : <img  src={`${'https://www.freeiconspng.com/thumbs/tiger-png/white-tiger-png-23.png'}`} alt="photoUser2" className={s.photoProfile}/>}
                </div>
                

                {/* <img src={PhotoFace} alt="face" /> */}

                <div className={s.contentImg__card_info}>

                    <p className={s.contentImg__card_info_name}>
                       Name: <span className={s.spanClass}> {props.profile.fullName}</span>
                        
                    </p>

                    <p className={s.contentImg__card_info_name}>

                    Number of ID: <span className={s.spanClass}> {props.profile.userId}</span> 

                    </p>

                    <p className={s.contentImg__card_info_name}>
                      Contacts: <span className={s.spanClass}> {props.profile.contacts.github}</span>
                      
                    </p>

                    {/* <p className={s.contentImg__card_info_name}>
                        Kozyrskyi Oleksandr
                    </p>
                    <p className={s.contentImg__card_info_date}>
                        Date of birth: 2000
                    </p>
                    <p className={s.contentImg__card_info_city}>
                        City: Kyiv
                    </p>
                    <p className={s.contentImg__card_info_education}>
                        Education: NUTSU
                    </p>
                    <p className={s.contentImg__card_info_webSite}>
                        Web site: www.mysite.com
                    </p> */}
                </div>
            </div>
        </div>
    )
}

export default ProFileInfo;
