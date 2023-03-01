import React from 'react';
import ProFile from './Profile/ProFile';
import s from './Navbar.module.css';
import Dialogs from './Dialogs/Dialogs';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import News from './News/News';
import Music from './Music/Music';
import SettingGalaxy from './SettingGalaxy/SettingGalaxy';


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
                <NavLink className={navData => navData.isActive ? s.active : s.item} to='/news'>News</NavLink>
              </div>
              <div>
                <NavLink className={navData => navData.isActive ? s.active : s.item} to='/music'>Music</NavLink>
              </div>
              <div>
                <NavLink className={navData => navData.isActive ? s.active : s.item} to='/settingGalaxy'>Settings Galaxy</NavLink>
              </div>
            </div>

          <Routes>

<<<<<<< HEAD
            <Route path="/profile" element={ <ProFile 
                  dispatch={props.dispatch} 
              // updateNewPostText={props.updateNewPostText} 
                  newPostText={props.newPostText} 
                  myPostData={props.myPostData} 
              />} />
              
            <Route path="/dialogs/*" element={<Dialogs 
                  dispatch={props.dispatch}
                  // addPost={props.addPost} 

                  addNewMessage={props.addNewMessage}
                  updateNewMessage={props.updateNewMessage} 

                  dialogData={props.dialogData} 
                  newMessageDialogs={props.newMessageDialogs} 
                  messageData={props.messageData} 
              />} />
=======
            <Route path="/profile" element={<ProFile

                                            state={props.store}
                                            
                                            newPostText={props.store} 
                                            updateNewPostText={props.store} 
                                            myPostData={props.store} 

                                            addPost={props.store} 




                                            // updateNewPostText={props.updateNewPostText} 
                                            // newPostText={props.newPostText} 
                                            // myPostData={props.myPostData} 
                                            // addPost={props.addPost} 
                                            />} 
                                            />

            <Route path="/dialogs/*" element={<Dialogs 
                                              updateNewMessage={props.updateNewMessage} 
                                              addNewMessage={props.addNewMessage} 
                                              addPost={props.addPost} 
                                              newMessageDialogs={props.newMessageDialogs} 
                                              dialogData={props.dialogData} 
                                              messageData={props.messageData}/>} 
                                              />
>>>>>>> b42e1d0a6c18f3bdf6b0b14feb86bfc1ca18d236
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