import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import state from './Redux/state';
import {BrowserRouter} from 'react-router-dom';
import {addPost} from './Redux/state';

import './index.css';

export let renderEntireTree = () => {

  
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App state={state} addPost={addPost}/>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

}
