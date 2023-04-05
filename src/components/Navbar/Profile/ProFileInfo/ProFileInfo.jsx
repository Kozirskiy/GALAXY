import React from 'react';
import s from './ProFileInfo.module.css';
import PhotoFace from './mc.png';
import Preloader from '../../../common/Preloader/Preloader';

const ProFileInfo = (props) => {

    if (!props.profile) {
        return <Preloader />
    }
    return (
        <div className={s.contentImg__card}>
            <div className={`${s.contentImg__card_img} ${s.dflex}`}>
                

                <img src={props.profile.photos.large} alt="face" />


                {/* <img src={PhotoFace} alt="face" /> */}
                
                {/* <div className={s.contentImg__card_info}>
                    <p className={s.contentImg__card_info_name}>
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
                    </p>
                </div> */}
            </div>
        </div>
    )
}

export default ProFileInfo;
