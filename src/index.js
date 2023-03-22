import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import store from './redux/redux-store';
import App from './App';
import { Provider } from 'react-redux';





const root = ReactDOM.createRoot(document.getElementById('root'));

let rerenderEntireTree = () => {
    root.render(

      <Provider store={store}>

        <React.StrictMode>
          <App  
          // store = {store}
          // state = {state}

          // appState={store.state}
          // myPostData={state.myPostData}
          // dispatch={store.dispatch.bind(store)}
          
          // updateNewPostText={store.updateNewPostText.bind(store)} 
          
          // addNewMessage={store.addNewMessage.bind(store)} 
          // updateNewMessage={store.updateNewMessage.bind(store)}
          // addPost={store.addPost} 
          
          />
        </React.StrictMode>
      </Provider>

      // <React.StrictMode>
      //   <App  
      //   appState={state}
      //   dispatch={store.dispatch.bind(store)}
        
      //   // updateNewPostText={store.updateNewPostText.bind(store)} 
        
      //   // addNewMessage={store.addNewMessage.bind(store)} 
      //   // updateNewMessage={store.updateNewMessage.bind(store)}
      //   store = {store}
      //   />
      // </React.StrictMode >

    );
  }

rerenderEntireTree();


store.subscribe(() => {
      
      rerenderEntireTree();


// store.subscribe(() => {
//   let state = store.getState();
//   rerenderEntireTree(state);

});