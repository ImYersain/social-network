import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import state from './Redux/state';
import {BrowserRouter} from 'react-router-dom';

import './index.css';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App state={state} />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
