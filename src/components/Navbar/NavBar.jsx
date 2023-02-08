import React from 'react';
import ProFile from './Profile/ProFile';
import s from './Navbar.module.css';
import Dialogs from './Dialogs/Dialogs';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import News from './News/News';
import Music from './Music/Music';
import SettingGalaxy from './SettingGalaxy/SettingGalaxy';


const NavBar = () => {
  return (
    <BrowserRouter>
      <nav className={s.nav}>
        <div className={`${s.nav__wrapper} ${s.dfex}`}>
          <div className={s.nav__link}>
            <div>
              <a className={s.nav__links} href='/profile'>Profile</a>
            </div>
            <div>
              <a className={s.nav__links} href='/dialogs'>Message</a>
            </div><div>
              <a className={s.nav__links} href='/news'>News</a>
            </div>
            <div>
              <a className={s.nav__links} href='/music'>Music</a>
            </div>
            <div>
              <a className={s.nav__links} href='/settingGalaxy'>Settings Galaxy</a>
            </div>
          </div>
          <Routes>
            <Route path="/profile" element={<ProFile />} />
            <Route path="/dialogs" element={<Dialogs />} />
            <Route path="/news" element={<News />} />
            <Route path="/music" element={<Music />} />
            <Route path="/settingGalaxy" element={<SettingGalaxy />} />
          </Routes>
        </div>
      </nav>
    </BrowserRouter>

  )
}

export default NavBar;