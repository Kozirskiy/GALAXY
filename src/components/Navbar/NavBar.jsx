import React from 'react';
import ProFile from './Profile/ProFile';
import s from './Navbar.module.css';
import Dialogs from './Dialogs/Dialogs';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import News from './News/News';
import Music from './Music/Music';
import SettingGalaxy from './SettingGalaxy/SettingGalaxy';
// import { NavLink } from 'react-router-dom';


const NavBar = () => {
  return (
    <BrowserRouter>
      <nav className={s.nav}>
        <div className={`${s.nav__wrapper} ${s.dfex}`}>
          <div className={s.nav__link}>
            <div>
              <NavLink className = { navData => navData.isActive ? s.active : s.item } to='/profile'>Profile</NavLink>
            </div>
            <div>
              <NavLink className = { navData => navData.isActive ? s.active : s.item } to='/dialogs'>Message</NavLink>
            </div><div>
              <NavLink className = { navData => navData.isActive ? s.active : s.item } to='/news'>News</NavLink>
            </div>
            <div>
              <NavLink className = { navData => navData.isActive ? s.active : s.item } to='/music'>Music</NavLink>
            </div>
            <div>
              <NavLink className = { navData => navData.isActive ? s.active : s.item } to='/settingGalaxy'>Settings Galaxy</NavLink>
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