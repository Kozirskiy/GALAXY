import React from 'react';
import Logo from './logoCopany.png';
import s from './Header.module.css';
import { NavLink} from 'react-router-dom';

const Header = (props) => {
    return (
        <header className={s.header}>
            <div className={s.header__content}>
                <img className={`${s.crossRotate} ${s.imgLogo}`} alt='a' src={Logo} />

                <h1 className="header__tittle">
                    galaxy
                </h1>

                <div className={s.loginBlock}>
                    < div className={s.logBtn}>
                        {props.isAuth 
                        ? <div>Your id: {props.id}     <button onClick={props.logout}>Log out</button></div>  
                        : <NavLink to={'/login'}>Login</NavLink>}
                    </div>
                    <div className={s.statusAuth}>
                        {props.id ? 'Authorized' : 'NO - Authorized'}
                    </div>
                    {props.fullName}
                </div>
            </div>
        </header>
    )
}

export default Header;