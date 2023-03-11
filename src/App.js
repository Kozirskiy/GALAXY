import  React from 'react';
import './App.css';
import Header from './components/Header/Header';
import NavBar from './components/Navbar/NavBar';


const App = (props) => {


  return (
    
      <div className='app-wrapper'>
          <div className='container'>
            <Header />
            <NavBar 
                    dispatch={props.dispatch}

                    addPost={props.addPost} 
                    myPostData={props.appState.myPostData} 

                    newPostText={props.appState.newPostText} 
                    updateNewPostText={props.appState.nupdateNewPostText}

                    addNewMessage={props.appState.addNewMessage} 
                    newMessageDialogs={props.appState.newMessageDialogs}
                    updateNewMessage={props.appState.updateNewMessage} 
        
                    dialogData={props.appState.dialogData} 
                    messageData={props.appState.messageData}
                    store = {props.store}      
            /> 
          </div>
      </div>
     )
}

export default App;
