import  React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import NavBar from './components/Navbar/NavBar';


const App = (props) => {


  return (
    <BrowserRouter>
    <div className='app-wrapper'>
        <div className='container'>
          <Header />
          <NavBar  myPostData={props.appState.myPostData} dialogData={props.appState.dialogData} messageData={props.appState.messageData}/>
          {/* myPostData={props.appState} dialogData={props.appState} messageData={props.appState.messageData} */}
        </div>
    </div>
    </BrowserRouter>)
}

export default App;
