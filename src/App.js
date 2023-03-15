import  React from 'react';
// import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import NavBar from './components/Navbar/NavBar';


const App = (props) => {


  return (
    //<BrowserRouter>
      <div className='app-wrapper'>
          <div className='container'>
            <Header />
            <NavBar 
                    // store = {props.store}
                    // state = {props.state}




                    // dispatch={props.dispatch}

                    // addPost={props.addPost} 
                    // myPostData={props.appState.myPostData} 

                    // newPostText={props.appState.newPostText} 
                    // updateNewPostText={props.appState.nupdateNewPostText}

                    // addNewMessage={props.appState.addNewMessage} 
                    // newMessageDialogs={props.appState.newMessageDialogs}
                    // updateNewMessage={props.appState.updateNewMessage} 
        
                    // dialogData={props.appState.dialogData} 
                    // messageData={props.appState.messageData}

                          
            /> 
          </div>
      </div>
      //</BrowserRouter>
     )
}

export default App;
