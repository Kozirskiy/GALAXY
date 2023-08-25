import  React from 'react';
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';

// const NavBar = React.lazy(() => import ('./components/Navbar/NavBar'));

import NavBar from './components/Navbar/NavBar';


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
