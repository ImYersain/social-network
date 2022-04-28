import React, { Suspense } from 'react';
import HeaderContainer from './components/Header/HeaderContainer';
import NavbarContainer from './components/Navbar/NavbarContainer';
import { Routes,Route, Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { initializeApp } from './Redux/app-reducer';
import { compose } from 'redux';
import { withRouter } from './components/hoc/WithRouter';
import Preloader from './assets/Preloader';

import './App.css';


const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));
const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer'));
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const Login = React.lazy(() => import('./components/Login/Login'));
const Music = React.lazy(() => import('./components/Music/Music'));
const News = React.lazy(() => import('./components/News/News'));
const Settings = React.lazy(() => import('./components/Settings/Settings'));




class App extends React.Component {
  
  catchAllUnhandledErrors = (reason, promise) => {
    alert(`error reason is ${reason}`);
    console.error(promise);
  }

  componentDidMount() {
    this.props.initializeApp();
    window.addEventListener('error', this.catchAllUnhandledErrors);
  }
  componentWillUnmount(){
    window.removeEventListener('error', this.catchAllUnhandledErrors);
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
              <Route path='/profile/*' element={<ProfileContainer />}/>
              <Route path='/users' element={<UsersContainer />} />
              <Route path='/dialogs/*' element={<DialogsContainer />} />
              <Route path='/news' element={<News />} />
              <Route path='/music' element={<Music />} />
              <Route path='/settings' element={<Settings />} />
              <Route path='/login' element={<Login />} />
              <Route path='/*' element={
                  <div style={{'margin':'50px auto','textAlign':'center','fontSize':'30px'}}>404 Not found</div>} />
              <Route exact path='/' element={<Navigate to='/profile' /> }/>
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
