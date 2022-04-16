import reportWebVitals from './reportWebVitals';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import store from './Redux/redux-store';
import { Provider } from 'react-redux';

import './index.css';



    ReactDOM.render(
        <BrowserRouter>
          <Provider store={store}>
            <App />
          </Provider>
        </BrowserRouter>,
      document.getElementById('root')
    );


reportWebVitals();
