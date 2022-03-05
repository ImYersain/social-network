import React from 'react';
import HeaderContainer from './components/Header/HeaderContainer';
import NavbarContainer from './components/Navbar/NavbarContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import Music from './components/Music/Music';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import Friends from './components/Friends/Friends';
import UsersContainer from './components/Users/UsersContainer';
import {Routes,Route} from 'react-router-dom';

import './App.css';



const App = (props) => {
  return (
  <div className='app-wrapper'>
    <HeaderContainer />
    <NavbarContainer />
    <div className='app-wrapper-content'>
      <Routes>
          <Route path='/profile/*' element={ <ProfileContainer /> }/>
          <Route path='/dialogs/*' element={<DialogsContainer />} />
          <Route path='/news' element={<News />} />
          <Route path='/music' element={<Music />} />
          <Route path='/settings' element={<Settings />} />
          <Route path='/friends' element={<Friends />} />
         
          <Route path='/users' element={<UsersContainer />} />
      </Routes>
    </div>
          
  </div>
  );
}

export default App;
