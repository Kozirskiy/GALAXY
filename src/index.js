import React from 'react';
import store from './redux/redux-store';

import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';



const root = ReactDOM.createRoot(document.getElementById('root'));

let rerenderEntireTree = (state) => {

    root.render(
      <React.StrictMode>
        <App  
        appState={state}
        dispatch={store.dispatch.bind(store)}
        
        // updateNewPostText={store.updateNewPostText.bind(store)} 
        
        // addNewMessage={store.addNewMessage.bind(store)} 
        // updateNewMessage={store.updateNewMessage.bind(store)}
        store = {store}
        />
      </React.StrictMode >
    );
  }

rerenderEntireTree(store.getState());


store.subscribe(() => {
  let state = store.getState();
  rerenderEntireTree(state);
});

