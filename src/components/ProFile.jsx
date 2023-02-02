import  React from 'react';
import PhotoFace from '../img/mc.png';
import GalaxyPhoto from '../img/galaxy.jpg';
import Mypost from './Mypost';

const ProFile = () => {
    return (
        <div className='contentBlock'>
            <div className='contentImg'>
                    <img className='headerContent' src={GalaxyPhoto} alt="bg"/>
            </div>
            <div className='contentImg__card'>
                <div className="contentImg__card_img dflex">
                    <img src={PhotoFace} alt="face" />
                    
                    <div className="contentImg__card_info">
                        <p className="contentImg__card_info_name">
                            Kozyrskyi Oleksandr
                        </p>
                        <p className="contentImg__card_info_date">
                            Date of birth: 2000
                        </p>
                        <p className="contentImg__card_info_city">
                            City: Kyiv
                        </p>
                        <p className="contentImg__card_info_education">
                            Education: NUTSU
                        </p>
                        <p className="contentImg__card_info_webSite">
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