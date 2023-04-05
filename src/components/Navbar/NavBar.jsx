import React from 'react';
import ProFile from './Profile/ProFile';
import s from './Navbar.module.css';

import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import News from './News/News';
import Music from './Music/Music';
import SettingGalaxy from './SettingGalaxy/SettingGalaxy';
import DialogsContainer from './Dialogs/DialogsContainer';

import UsersContainer from './Users/UsersContainer';
import Preloader from '../common/Preloader/Preloader';



const NavBar = (props) => {


  return (
    <BrowserRouter>
      <nav className={s.nav}>
        <div className={`${s.nav__wrapper} ${s.dfex}`}>
          <div className={s.nav__link}>
            
            <div>
              <NavLink className={navData => navData.isActive ? s.active : s.item} to='/profile'>Profile</NavLink>
              </div>
              <div>
                <NavLink className={navData => navData.isActive ? s.active : s.item} to='/dialogs'>Message</NavLink>
              </div>
              <div>
                <NavLink className={navData => navData.isActive ? s.active : s.item} to='/users'>Users</NavLink>
              </div>
              <div>
                <NavLink className={navData => navData.isActive ? s.active : s.item} to='/news'>News</NavLink>
              </div>
              <div>
                <NavLink className={navData => navData.isActive ? s.active : s.item} to='/music'>Music</NavLink>
              </div>
              <div>
                <NavLink className={navData => navData.isActive ? s.active : s.item} to='/settingGalaxy'>Settings Galaxy</NavLink>
              </div>
              <Preloader />
            </div>
          <Routes>
            <Route path="/profile" element={ <ProFile/>} />
              
            <Route path="/dialogs" element={<DialogsContainer />} />
            <Route path="/users" element={<UsersContainer />} />
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