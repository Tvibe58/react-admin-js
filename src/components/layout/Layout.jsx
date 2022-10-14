import React from 'react';
import './index.scss';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom'; // Outlet用于渲染children
import Topbar from './components/Topbar';
import SideBar from './components/sideBar/index';

function MyLayout() {
  const opened = useSelector((state) => state.app.sidebar.opened);
  return (
    <div className={`app-wrapper${opened ? ' hideSidebar' : ''}`}>
      <div className="topbar-container">
        <Topbar />
      </div>
      <SideBar />
      <div className="main-container">
        <div className="app-container">
          <Outlet />
        </div>
        {/* <transition
        name="fade"
        mode="out-in"
      >

        <Outlet></Outlet>
      </transition> */}
      </div>
    </div>
  );
}
export default MyLayout;
