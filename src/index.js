import React from 'react';
import store from './redux/state';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
<<<<<<< HEAD

=======
import store from './redux/state';
>>>>>>> b42e1d0a6c18f3bdf6b0b14feb86bfc1ca18d236


const root = ReactDOM.createRoot(document.getElementById('root'));

let rerenderEntireTree = (state) => {
<<<<<<< HEAD

    root.render(
      <React.StrictMode>
        <App  
        appState={state}
        dispatch={store.dispatch.bind(store)}
        
        // updateNewPostText={store.updateNewPostText.bind(store)} 
        
        // addNewMessage={store.addNewMessage.bind(store)} 
        // updateNewMessage={store.updateNewMessage.bind(store)}
        />
      </React.StrictMode >
    );
=======
          root.render (<React.StrictMode> 
              
                <App  state={state} 
                      addPost={store.addPost.bind(store)} 
                      updateNewPostText={store.updateNewPostText.bind(store)} 
                      addNewMessage={store.addNewMessage.bind(store)}  
                      updateNewMessage={store.updateNewMessage.bind(store)}
                      />
              </React.StrictMode>
          );
>>>>>>> b42e1d0a6c18f3bdf6b0b14feb86bfc1ca18d236
  }

rerenderEntireTree(store.getState());

<<<<<<< HEAD
=======
rerenderEntireTree(store.getState());

>>>>>>> b42e1d0a6c18f3bdf6b0b14feb86bfc1ca18d236
store.subscribe(rerenderEntireTree);

