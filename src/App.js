import React, { Suspense } from 'react';
import HeaderContainer from './components/Header/HeaderContainer';
import NavbarContainer from './components/Navbar/NavbarContainer';
// import ProfileContainer from './components/Profile/ProfileContainer';
// import DialogsContainer from './components/Dialogs/DialogsContainer';
// import Login from './components/Login/Login';
import UsersContainer from './components/Users/UsersContainer';
import { Routes,Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { initializeApp } from './Redux/app-reducer';
import { compose } from 'redux';
import { withRouter } from './components/common/WithRouter';
import Preloader from './assets/Preloader';

import './App.css';


const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const Login = React.lazy(() => import('./components/Login/Login'));
const Music = React.lazy(() => import('./components/Music/Music'));
const News = React.lazy(() => import('./components/News/News'));
const Settings = React.lazy(() => import('./components/Settings/Settings'));




class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp()
  }

  render () {
    if(!this.props.initialized){
      return <Preloader />
    }
    return (
      <div className='app-wrapper'>
        <HeaderContainer />
        <NavbarContainer />
        <div className='app-wrapper-content'>
          <Suspense fallback={<Preloader />}>
          <Routes>
              <Route path='/profile/*' element={  <ProfileContainer /> }/>
              <Route path='/users' element={<UsersContainer />} />
              <Route path='/dialogs/*' element={<DialogsContainer />} />
              <Route path='/news' element={<News />} />
              <Route path='/music' element={<Music />} />
              <Route path='/settings' element={<Settings />} />
              <Route path='/login' element={<Login />} />
          </Routes>
          </Suspense>
        </div>      
      </div>
    );
    
  }
}

let mapStateToProps = (state) => ({
  initialized: state.app.initialized
})


export default compose(
    withRouter,
    connect(mapStateToProps, { initializeApp })
) (App)
