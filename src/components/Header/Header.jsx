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
                        {props.isAuth ? props.id : <NavLink to={'/login'}>Login</NavLink>}
                            
                    </div>
                    <div className={s.statusAuth}>
                        {props.id ? 'Authorized' : 'NO - Authorized'}
                    </div>
                    {props.fullName}


                </div>



            </div>


            {/* <Routes>
                    <Route path="/login" element={<login />} />
                </Routes> */}

        </header>

    )
}

export default Header;