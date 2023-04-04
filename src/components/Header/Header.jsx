import React from 'react';
import Logo from './logoCopany.png';
import s from './Header.module.css';



const Header = () => {
    return (
        <header className={s.header}>
            <div className={s.header__content}>
                <img className={`${s.crossRotate} ${s.imgLogo}`} alt='a' src={Logo} />
                
                    <h1 className="header__tittle">
                        galaxy
                    </h1>
                
                <div>

                </div>

            </div>
        
        </header>
    )
}

export default Header;