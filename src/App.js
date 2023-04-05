import  React from 'react';
import './App.css';
import Header from './components/Header/Header';
import NavBar from './components/Navbar/NavBar';

const App = (props) => {

  return (
      <div className='app-wrapper'>
          <div className='container'>
            <Header />
            <NavBar /> 
          </div>
      </div>
     )
}

export default App;
