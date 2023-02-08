import  React from 'react';
import s from './ProFile.module.css';
import PhotoFace from './mc.png';
import GalaxyPhoto from './galaxy.jpg';
import Mypost from './Myposts/Mypost';


const ProFile = (props) => {
    return (
        <div className={s.contentBlock}>
            <div className={s.contentImg}>
                    <img className={s.headerContent} src={GalaxyPhoto} alt="bg"/>
            </div>
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
            <Mypost/>
        </div>
    )
}
export default ProFile;