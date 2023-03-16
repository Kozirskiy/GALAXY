import React from 'react';
import store from './redux/redux-store';
<<<<<<< HEAD
=======

>>>>>>> 01be926b052ece0e1b1eecc6fd754c5da3254e43
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import StoreContext from './storeContext';




const root = ReactDOM.createRoot(document.getElementById('root'));


let rerenderEntireTree = (state) => {
    root.render(
<<<<<<< HEAD
      <StoreContext.Provider value={store}>
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
      </StoreContext.Provider>
=======
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
>>>>>>> 01be926b052ece0e1b1eecc6fd754c5da3254e43
    );
  }

rerenderEntireTree(store.getState());

<<<<<<< HEAD
store.subscribe(() => {
      let state = store.getState();
      rerenderEntireTree(state);
=======

store.subscribe(() => {
  let state = store.getState();
  rerenderEntireTree(state);
>>>>>>> 01be926b052ece0e1b1eecc6fd754c5da3254e43
});

