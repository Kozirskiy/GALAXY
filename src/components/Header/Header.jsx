import React from 'react';
import Logo from './logoCopany.png';
import s from './Header.module.css';
import { NavLink, Route, Routes} from 'react-router-dom';



const Header = (props) => {

    return (
            <header className={s.header}>
                <div className={s.header__content}>
                    <img className={`${s.crossRotate} ${s.imgLogo}`} alt='a' src={Logo} />

                    <h1 className="header__tittle">
                        galaxy
                    </h1>
                    
                    <div className={s.loginBlock}>

                    { props.isAuth ?  props.login 
                    : <NavLink to={'/login'}>Login</NavLink> }
                        {/* <NavLink to={'/login'}>Login</NavLink> */}
                    </div>


                </div>
                
                
                {/* <Routes>
                    <Route path="/login" element={<login />} />
                </Routes> */}

            </header>
        
    )
}

export default Header;