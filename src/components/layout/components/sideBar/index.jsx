import React from 'react';
import Toggle from '../../../toggle';
import SiderBarMenu from './SiderBarMenu';

const routers = require('../../../../router/index');

class SiderBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isCollapsed: false };

    // 为了在回调中使用 `this`，这个绑定是必不可少的
    this.toggleClick = this.toggleClick.bind(this);
  }

  toggleClick() {
    this.setState((state) => ({
      isCollapsed: !state.isCollapsed
    }));
  }

  render() {
    const { isCollapsed } = this.state;
    const myRouters = routers.routers.filter((item) => item.meta && item.meta.isRoot);
    const menuRouters = myRouters[0].children || [];
    return (
      <div className="sidebar-container">
        <div className="scrollbar-wrapper">
          <SiderBarMenu isCollapsed={isCollapsed} menuRouters={menuRouters} />

        </div>
        <div className="collapse">
          <Toggle isActive={!isCollapsed} toggleClick={this.toggleClick} />
        </div>
      </div>
    );
  }
}

export default SiderBar;
