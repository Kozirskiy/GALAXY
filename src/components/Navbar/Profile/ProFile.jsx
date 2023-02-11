import React from 'react';
import s from './ProFile.module.css';
import GalaxyPhoto from './galaxy.jpg';
import Mypost from './Myposts/Mypost';
import ProFileInfo from './ProFileInfo/ProFileInfo';


const ProFile = () => {
    return (
        <div className={s.contentBlock}>
            <div className={s.contentImg}>
                <img className={s.headerContent} src={GalaxyPhoto} alt="bg" />
            </div>
            <ProFileInfo />
            <Mypost />
        </div>
    )
}
export default ProFile;