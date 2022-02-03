import React from 'react';
import Header from './components/Header/Header';
import NavbarContainer from './components/Navbar/NavbarContainer';
import Profile from './components/Profile/Profile';
import DialogsContainer from './components/Dialogs/DialogsContainer';
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
    <NavbarContainer />
    <div className='app-wrapper-content'>
      <Routes>
          <Route path='/profile' element={ <Profile /> }/>
          <Route path='/dialogs/*' element={<DialogsContainer />} />
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
