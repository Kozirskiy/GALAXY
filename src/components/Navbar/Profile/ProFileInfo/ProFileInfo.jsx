import React from 'react';
import s from './ProFileInfo.module.css';
import PhotoFace from './mc.png';

const ProFileInfo = () => {
    return (
        <div className={s.contentImg__card}>
            <div className={`${s.contentImg__card_img} ${s.dflex}`}>
                <img src={PhotoFace} alt="face" />

                <div className={s.contentImg__card_info}>
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
                </div>
            </div>
        </div>
    )
}

export default ProFileInfo;
