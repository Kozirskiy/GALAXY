import React from 'react';
import s from './Navbar.module.css';
import { NavLink, Route, Routes } from 'react-router-dom';
import News from './News/News';
import Music from './Music/Music';
import SettingGalaxy from './SettingGalaxy/SettingGalaxy';
import DialogsContainer from './Dialogs/DialogsContainer';
import UsersContainer from './Users/UsersContainer';
import Preloader from '../common/Preloader/Preloader';
import ProfileContainer from './Profile/ProfileContainer';
import LoginPage from '../Login/Login';
import getAuthUserData from '../../redux/authREDUCER';
import { Component } from 'react';
import { connect } from 'react-redux';
import { useLocation, useNavigate, useParams} from "react-router-dom";
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';

class NavBar extends React.Component {

  componentDidMount() {
    this.props.getAuthUserData();
  }

  render() {
    
    return (
      // <BrowserRouter>
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

            <div>
              <NavLink className={navData => navData.isActive ? s.active : s.item} to='/login'>Login or Exit</NavLink>
            </div>

          </div>
          <Routes>
            <Route path="/profile/:userId?" element={<ProfileContainer />} />
            <Route path="/dialogs" element={<DialogsContainer />} />
            <Route path="/users" element={<UsersContainer />} />
            <Route path="/news" element={<News />} />
            <Route path="/music" element={<Music />} />
            <Route path="/settingGalaxy" element={<SettingGalaxy />} />
            <Route path="/login" element={<LoginPage />} />
          </Routes>
        </div>
      </nav>
      // </BrowserRouter>
    )
  }
}
let AuthNavBarComponent = withAuthRedirect(NavBar);

function withRouter(AuthNavBarComponent) {
  function ComponentWithRouterProp(props) {
      let location = useLocation();
      let navigate = useNavigate();
      let params = useParams();
      return (
          <AuthNavBarComponent
              {...props}
              router={{ location, navigate, params }}
          />
      );
  }

  return ComponentWithRouterProp;
}

export default compose(
              withRouter,
  (connect(null, { getAuthUserData})(AuthNavBarComponent)));