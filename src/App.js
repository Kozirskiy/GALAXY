import  React from 'react';
import './App.css';
import Header from './components/Header/Header';
import NavBar from './components/Navbar/NavBar';


const App = (props) => {
  return (
      <div className='app-wrapper'>
          <div className='container'>
            <Header />
<<<<<<< HEAD
            <NavBar 
                    dispatch={props.dispatch}

                    newPostText={props.appState.newPostText} 
                    updateNewPostText={props.appState.nupdateNewPostText}

                    addNewMessage={props.appState.addNewMessage} 
                    updateNewMessage={props.appState.updateNewMessage} 


                    myPostData={props.appState.myPostData} 
                    
                    newMessageDialogs={props.appState.newMessageDialogs}
                    dialogData={props.appState.dialogData} 
                    messageData={props.appState.messageData}      
            /> 
=======
            <NavBar
                    state={props.store.state}
                    
                    addNewMessage={props.store} 
                    newMessageDialogs={props.store} 

                    updateNewPostText={props.store} 
                    updateNewMessage={props.store} 

                    newPostText={props.store} 
                    myPostData={props.store} 

                    dialogData={props.store} 
                    messageData={props.store}
                     
                    addPost={props.store}



                    // addNewMessage={props.addNewMessage} 
                    // newMessageDialogs={props.appState.newMessageDialogs} 
                    // updateNewPostText={props.updateNewPostText} 
                    // updateNewMessage={props.updateNewMessage} 
                    // newPostText={props.appState.newPostText} 
                    // myPostData={props.appState.myPostData} 
                    // dialogData={props.appState.dialogData} 
                    // messageData={props.appState.messageData} 
                    // addPost={props.addPost}
                    />  
>>>>>>> b42e1d0a6c18f3bdf6b0b14feb86bfc1ca18d236
          </div>
      </div>
     )
}

export default App;
