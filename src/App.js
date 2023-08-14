import  React from 'react';
import './App.css';
import Preloader from './components/common/Preloader/Preloader';
import HeaderContainer from './components/Header/HeaderContainer';
import NavBar from './components/Navbar/NavBar';
import { initialiseApp } from './redux/appREDUCER';
import { Routes, Route } from 'react-router-dom';
import ProfileContainer from './components/Navbar/Profile/ProfileContainer';
import DialogsContainer from './components/Navbar/Dialogs/DialogsContainer';
import UsersContainer from './components/Navbar/Users/UsersContainer';
import News from './components/Navbar/News/News';
import Music from './components/Navbar/Music/Music';
import SettingGalaxy from './components/Navbar/SettingGalaxy/SettingGalaxy';
// import LoginPage from './components/Navbar/LoginPage/LoginPage';
import { compose } from 'redux';
import { connect } from 'react-redux';

const App = (props) => {

  return (
        <div className='app-wrapper'>
            <div className='container'>
              <HeaderContainer />
              <NavBar /> 
            </div>
        </div>
     )
}

export default App;

// class App extends Comment {
//   componenDidMount() {
//     this.props.initialiseApp();
//   }

//   render () {
//     if (! this.initialiseApp) {
//       return <Preloader/>
//     }

//     return (
//       <div div className='app-wrapper'>
//             <div className='container'>
//               <HeaderContainer />
//               <NavBar /> 
//             </div>
//           <Routes>
//               <Route path="/profile/:userId?" element={<ProfileContainer />} />
//               <Route path="/dialogs" element={<DialogsContainer />} />
//               <Route path="/users" element={<UsersContainer />} />
//               <Route path="/news" element={<News />} />
//               <Route path="/music" element={<Music />} />
//               <Route path="/settingGalaxy" element={<SettingGalaxy />} />
              
//             </Routes>
//       </div>
//     )
//   }  
// }
// const mapStateToProps = (state) => ({
//   initialised: state.app.initialised
// });

// export default compose (
//   // withRouter,
//   connect(mapStateToProps, {initialiseApp}))(App);
