import React from 'react';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import Music from './components/Music/Music';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import Friends from './components/Friends/Friends';
import {Routes,Route} from 'react-router-dom';

import './App.css';



const App = (props) => {
  return (
  <div className='app-wrapper'>
    <Header />
    <Navbar state={props.state.sidebar}/>
    <div className='app-wrapper-content'>
      <Routes>
          <Route path='/profile'
            element={ <Profile 
              profilePage={props.state.profilePage}
              addPost={props.addPost}
              updatePostText={props.updatePostText}
            /> }
          />
          <Route path='/dialogs/*' element={<Dialogs state={props.state.messagesPage} />} />
          <Route path='/news' element={<News />} />
          <Route path='/music' element={<Music />} />
          <Route path='/settings' element={<Settings />} />
          <Route path='/friends' element={<Friends />} />
      </Routes>
    </div>
          
  </div>
  );
}

export default App;
