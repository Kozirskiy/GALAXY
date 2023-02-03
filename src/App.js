// import  React from 'react';
import './App.css';
import Header from './components/Header';
import NavBar from './components/NavBar';


const App = () => {
  return (
    <div className='app-wrapper'>
        <div className='container'>
          <Header />
          <NavBar/>
        </div>
    </div>);
}

export default App;
