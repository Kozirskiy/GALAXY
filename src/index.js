import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import store from './redux/redux-store';
import App from './App';
//  import { Provider } from 'react-redux';
import { Provider } from './storeContext';
import  StoreContext  from './storeContext';
//import { BrowserRouter } from 'react-router-dom';





const root = ReactDOM.createRoot(document.getElementById('root'));

let rerenderEntireTree = () => {
    root.render(
      // <BrowserRouter>
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
      // </BrowserRouter>

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