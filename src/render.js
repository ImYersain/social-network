import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import {addPost, updatePostText} from './Redux/state';

import './index.css';


export let renderEntireTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <App state={state} addPost={addPost} updatePostText={updatePostText}/>
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
  );

}
