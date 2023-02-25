import  React from 'react';
import './App.css';
import Header from './components/Header/Header';
import NavBar from './components/Navbar/NavBar';


const App = (props) => {


  return (
    
      <div className='app-wrapper'>
          <div className='container'>
            <Header />
            <NavBar addNewMessage={props.addNewMessage} 
                    newMessageDialogs={props.appState.newMessageDialogs} 
                    updateNewPostText={props.updateNewPostText} 
                    updateNewMessage={props.updateNewMessage} 
                    newPostText={props.appState.newPostText} 
                    myPostData={props.appState.myPostData} 
                    dialogData={props.appState.dialogData} 
                    messageData={props.appState.messageData} 
                    addPost={props.addPost}
            />  
          </div>
      </div>
     )
}

export default App;
