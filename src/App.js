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

                    addNewMessage={props.appState.addNewMessage} 
                    updateNewMessage={props.appState.updateNewMessage} 
                    newPostText={props.appState.newPostText} 
                    updateNewPostText={props.appState.updateNewPostText}


                    myPostData={props.appState.myPostData} 
                    
                    newMessageDialogs={props.appState.newMessageDialogs}
                    dialogData={props.appState.dialogData} 
                    messageData={props.appState.messageData}      
            /> 
          </div>
      </div>
     )
}

export default App;
