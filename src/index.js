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
                addPost={store.addPost.bind(store)}
                updatePostText={store.updatePostText.bind(store)}
                sendMessage={store.sendMessage.bind(store)}
                updateMessageText={store.updateMessageText.bind(store)}
          />
        </BrowserRouter>
      </React.StrictMode>,
      document.getElementById('root')
    );
  }


renderEntireTree(store.getState());

store.subscribe(renderEntireTree);

reportWebVitals();
