import  React from 'react';
import ProFile from './ProFile';
import s from './Navbar.module.css';


const NavBar = () => {
    return (
        <nav className={s.nav}>
            <div className={`${s.nav__wrapper} ${s.dfex}`}>
              <div className={s.nav__link}>
                <div>
                  <a className={s.nav__links} href=''>Profile</a>
                </div>
                <div>
                  <a className={s.nav__links} href=''>Message</a>
                </div><div>
                  <a className={s.nav__links} href=''>News</a>
                </div>
                <div>
                  <a className={s.nav__links} href=''>Music</a>
                </div>
                <div>
                  <a className={s.nav__links} href=''>Settings</a>
                </div>
              </div>
              <ProFile/>
            </div>
          </nav>
    )
}

export default NavBar;