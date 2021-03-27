import { useState } from 'react';
import { Link } from 'react-router-dom';

import SidebarBtn from '../../components/SidebarBtn';

import {
  Home,
  Discount,
  Statistics,
  Messages,
  Notification,
  Settings,
  Quit
} from '../../assets/icons/icons';
import Logo from '../../assets/icons/logo.svg'

import './Sidebar.scss'

const Sidebar = () => {

  const [activePage, setActivePage] = useState('');

  return (
    <div className="sidebar">
      
      <div className="sidebar-logo">
        <img src={Logo} alt="logo" className="logo-icon"/>
      </div>

      <Link to="home" onClick={() => setActivePage('home')}>
        <SidebarBtn icon={<Home/>} active={activePage === 'home'} />
      </Link>
      <Link to="discount" onClick={() => setActivePage('discount')}>
        <SidebarBtn icon={<Discount/>} active={activePage === 'discount'} />
      </Link>
      <Link to="statistics" onClick={() => setActivePage('statistics')}>
        <SidebarBtn icon={<Statistics/>} active={activePage === 'statistics'} />
      </Link>
      <Link to="messages" onClick={() => setActivePage('messages')}>
        <SidebarBtn icon={<Messages/>} active={activePage === 'messages'} />
      </Link>
      <Link to="notification" onClick={() => setActivePage('notification')}>
        <SidebarBtn icon={<Notification/>} active={activePage === 'notification'} />
      </Link>
      <Link to="settings" onClick={() => setActivePage('settings')}>
        <SidebarBtn icon={<Settings/>} active={activePage === 'settings'} />
      </Link>
      <Link to="quit" onClick={() => setActivePage('quit')}>
        <SidebarBtn icon={<Quit/>} active={activePage === 'quit'} />
      </Link>
    </div>
  )
}

export default Sidebar;