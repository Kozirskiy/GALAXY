import  React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
// import Header from './components/Header/Header';
import NavBar from './components/Navbar/NavBar';

const App = (props) => {

  return (
       <BrowserRouter>
        <div className='app-wrapper'>
            <div className='container'>
              <HeaderContainer />
              <NavBar /> 
            </div>
        </div>
       </BrowserRouter>
     )
}

export default App;
