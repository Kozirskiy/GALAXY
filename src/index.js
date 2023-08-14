import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import store from './redux/redux-store';
import App from './App';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root'));

    root.render(
      <BrowserRouter>
        <Provider store={store}>
          <React.StrictMode>
            <App />
          </React.StrictMode>
        </Provider>
      </BrowserRouter>  
    );