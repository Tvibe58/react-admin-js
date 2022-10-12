import React from 'react';
import './index.scss';
import { Outlet } from 'react-router-dom'; // Outlet用于渲染children
import Topbar from './components/Topbar';
import SideBar from './components/sideBar/index';

function MyLayout() {
  return (
    <div className="app-wrapper">
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
