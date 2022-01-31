import reportWebVitals from './reportWebVitals';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import store from './Redux/redux-store';

import './index.css';


let renderEntireTree = (state) => {
    ReactDOM.render(
      <React.StrictMode>
        <BrowserRouter>
          <App  state={state}
                dispatch={store.dispatch.bind(store)}
                store={store} />
        </BrowserRouter>
      </React.StrictMode>,
      document.getElementById('root')
    );
  }


renderEntireTree(store.getState());

store.subscribe(() => {
  let state = store.getState();
  renderEntireTree(state);
});

reportWebVitals();
