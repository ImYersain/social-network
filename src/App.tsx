import React, {Suspense} from 'react';
import HeaderContainer from './components/Header/HeaderContainer';
import {Routes, Route, Navigate, Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {initializeApp} from './Redux/app-reducer';
import {compose} from 'redux';
import {withRouter} from './components/hoc/WithRouter';
import Preloader from './assets/Preloader';
import {DesktopOutlined, FileOutlined, TeamOutlined, UserOutlined} from '@ant-design/icons';

import './App.css';
import {AppStateType} from './Redux/redux-store';

import type {MenuProps} from 'antd';
import {Breadcrumb, Layout, Menu} from 'antd';

const {Content, Footer, Sider} = Layout;

const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));
const UsersPage = React.lazy(() => import('./components/Users/UsersPage'));
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const LoginPage = React.lazy(() => import('./components/Login/LoginPage'));
const Music = React.lazy(() => import('./components/Music/Music'));
const News = React.lazy(() => import('./components/News/News'));
const Settings = React.lazy(() => import('./components/Settings/Settings'));
const ChatPage = React.lazy(() => import('./pages/Chat/ChatPage'));

type MapPropsType = ReturnType<typeof mapStateToProps>;
type DispatchPropsType = {
  initializeApp: () => void;
};

class App extends React.Component<MapPropsType & DispatchPropsType> {
  catchAllUnhandledErrors = (e: PromiseRejectionEvent) => {
    alert(`error reason is ${e.reason}`);
    console.error(e.promise);
  };

  componentDidMount() {
    this.props.initializeApp();
    window.addEventListener('error', () => this.catchAllUnhandledErrors);
  }
  componentWillUnmount() {
    window.removeEventListener('error', () => this.catchAllUnhandledErrors);
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader />;
    }
    return (
      <>
        <Layout>
          <HeaderContainer />
          <Content style={{padding: '0 48px'}}>
            <Breadcrumb style={{margin: '16px 0'}}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <Layout style={{padding: '24px 0', background: 'rgb(210, 210, 210)', borderRadius: '5px'}}>
              <Sider style={{background: 'rgb(210, 210, 210)'}} width={200}>
                <Menu
                  mode="inline"
                  defaultSelectedKeys={['1']}
                  defaultOpenKeys={['sub1']}
                  style={{height: '100%'}}
                  items={items}
                />
              </Sider>
              <Content style={{padding: '0 24px', minHeight: 280}}>
                <Suspense fallback={<Preloader />}>
                  <Routes>
                    <Route path="/profile/*" element={<ProfileContainer />} />
                    <Route path="/users" element={<UsersPage />} />
                    <Route path="/dialogs/*" element={<DialogsContainer />} />
                    <Route path="/news" element={<News />} />
                    <Route path="/music" element={<Music />} />
                    <Route path="/settings" element={<Settings />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/chat" element={<ChatPage />} />
                    <Route
                      path="/*"
                      element={
                        <div style={{margin: '50px auto', textAlign: 'center', fontSize: '30px'}}>404 Not found</div>
                      }
                    />
                    <Route path="/" element={<Navigate to="/profile" />} />
                  </Routes>
                </Suspense>
              </Content>
            </Layout>
          </Content>
          <Footer style={{textAlign: 'center'}}>Ant Design ©{new Date().getFullYear()} Created by Ant UED</Footer>
        </Layout>
      </>
    );
  }
}

let mapStateToProps = (state: AppStateType) => ({
  initialized: state.app.initialized,
});

export default compose<React.ComponentType>(withRouter, connect(mapStateToProps, {initializeApp}))(App);

type MenuItem = Required<MenuProps>['items'][number];

function getItem(label: React.ReactNode, key: React.Key, icon?: React.ReactNode, children?: MenuItem[]): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem(<Link to="/profile">Profile</Link>, '1', <UserOutlined />),
  getItem(<Link to="/users">Users</Link>, '2', <TeamOutlined />),
  getItem(<Link to="/chat">Chat</Link>, '3', <TeamOutlined />),
  getItem(<Link to="/dialogs">Messages</Link>, '4', <DesktopOutlined />),
  getItem(<Link to="/music">Music</Link>, '5', <FileOutlined />),
  getItem(<Link to="/settings">Settings</Link>, '6', <DesktopOutlined />),
  getItem('My web', 'sub1', <UserOutlined />, [
    getItem(<Link to="/profile">Profile</Link>, 'Profile'),
    getItem(<Link to="/users">Users</Link>, 'Users'),
  ]),
];

const items2: MenuItem[] = [getItem('Home', '1', <Link to="/profile">Profile</Link>)];
