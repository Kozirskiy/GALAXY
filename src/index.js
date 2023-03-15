import React from 'react';
import store from './redux/redux-store';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import StoreContext from './storeContext';




const root = ReactDOM.createRoot(document.getElementById('root'));


let rerenderEntireTree = (state) => {
    root.render(
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
    );
  }

rerenderEntireTree(store.getState());

store.subscribe(() => {
      let state = store.getState();
      rerenderEntireTree(state);
});

