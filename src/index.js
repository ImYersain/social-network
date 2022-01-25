import reportWebVitals from './reportWebVitals';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import store from './Redux/state';

import './index.css';


let renderEntireTree = (state) => {
    ReactDOM.render(
      <React.StrictMode>
        <BrowserRouter>
          <App  state={state}
                dispatch={store.dispatch.bind(store)} />
        </BrowserRouter>
      </React.StrictMode>,
      document.getElementById('root')
    );
  }


renderEntireTree(store.getState());

store.subscribe(renderEntireTree);

reportWebVitals();
