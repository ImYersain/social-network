import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';
import loginAvatar from '../../assets/images/login-avatar.png';
import authorizedAvatar from '../../assets/images/authorized-avatar.png';
import {Avatar, Breadcrumb, Button, Layout, Menu, MenuProps, theme} from 'antd';
import {DesktopOutlined, FileOutlined, PieChartOutlined, TeamOutlined, UserOutlined} from '@ant-design/icons';

import s from './Header.module.css';

const {Header, Content, Footer, Sider} = Layout;
type MenuItem = Required<MenuProps>['items'][number];
function getItem(label: React.ReactNode, key: React.Key, icon?: React.ReactNode, children?: MenuItem[]): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}
const items2: MenuItem[] = [getItem(<Link to="/profile">Home</Link>, '1', <PieChartOutlined />)];

type PropsHeaderType = {
  isAuth: boolean;
  login: string | null;
  logout: () => void;
};

export const AppHeader: React.FC<PropsHeaderType> = (props) => {
  //fixme after logout page do not render
  let login = (
    <>
      <img style={{width: '40px', height: '40px'}} src={loginAvatar} alt="login-avatar"></img>
      <Link to={'/login'}>login</Link>
    </>
  );

  let authorized = (
    <div style={{display: 'flex'}}>
      <img
        style={{width: '40px', height: '40px', marginRight: '10px'}}
        src={authorizedAvatar}
        alt="authorized-avatar"
      ></img>

      <div style={{display: 'flex', flexDirection: 'column'}}>
        <Button onClick={props.logout}>Log out</Button>
      </div>
    </div>
  );

  return (
    // <header className={s.header}>
    //     <img src='https://cdn.pixabay.com/photo/2018/03/28/04/02/logo-3268177_1280.png' alt='logo'/>
    //     <div className={s.loginBlock}>
    //         {props.isAuth ? <div>{authorized}</div>: login}
    //     </div>
    // </header>
    <Header style={{display: 'flex', alignItems: 'center', lineHeight: '0'}}>
      <div className="demo-logo">
        <img
          style={{width: '100px'}}
          src="https://cdn.pixabay.com/photo/2018/03/28/04/02/logo-3268177_1280.png"
          alt="logo"
        />
      </div>
      <Menu theme="dark" mode="horizontal" items={items2} style={{flex: 1, minWidth: 0}} />
      {/* <Avatar style={{backgroundColor: '#87d068'}} icon={<UserOutlined />} /> */}

      <div className={s.loginBlock}>{props.isAuth ? <div>{authorized}</div> : login}</div>
    </Header>
  );
};
