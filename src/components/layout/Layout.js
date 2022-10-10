import React from 'react';
import './index.scss';
import { Outlet } from 'react-router-dom'; // Outlet用于渲染children
import Topbar from './components/Topbar'
import SideBar from './components/sideBar/index'


const MyLayout = () => (
  <div className="app-wrapper">
    <div className="topbar-container">
      <Topbar />
    </div>
    <SideBar></SideBar>
    <div className="main-container">
      <div className="app-container">
        <Outlet></Outlet>
      </div>
      {/* <transition
        name="fade"
        mode="out-in"
      >

        <Outlet></Outlet>
      </transition> */}
    </div>
  </div>
)
export default MyLayout;