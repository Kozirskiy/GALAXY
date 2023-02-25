import state from './redux/state';
// import { rerenderEntireTree } from './render';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';
// import state from './redux/state';
import {addPost, updateNewPostText, updateNewMessage, addNewMessage, subscribe} from './redux/state';


const root = ReactDOM.createRoot(document.getElementById('root'));

let rerenderEntireTree = (state) => {

    root.render(
      <React.StrictMode> 
        <App  appState={state} 
        addPost={addPost} 
        addNewMessage={addNewMessage} 
        updateNewPostText={updateNewPostText} 
        updateNewMessage={updateNewMessage}/>
      </React.StrictMode>
    );
  }




rerenderEntireTree(state);

subscribe(rerenderEntireTree);

