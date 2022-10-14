import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleSideBar } from 'store/reducer/appSlice';
import Toggle from '../../../toggle';
import SiderBarMenu from './SiderBarMenu';

const routers = require('../../../../router/index');

function SiderBar() {
  let myRouters = [];
  let menuRouters = [];
  if (routers && routers.routers && routers.routers.length > 0) {
    myRouters = routers.routers.filter((item) => item.meta && item.meta.isRoot);
    menuRouters = myRouters[0].children || [];
  }
  const opened = useSelector((state) => state.app.sidebar.opened);
  const dispatch = useDispatch();
  return (
    <div className="sidebar-container">
      <div className="scrollbar-wrapper">
        <SiderBarMenu isCollapsed={opened} menuRouters={menuRouters} />
      </div>
      <div className="collapse">
        <Toggle isActive={!opened} toggleClick={() => dispatch(toggleSideBar())} />
      </div>
    </div>
  );
}

export default SiderBar;
