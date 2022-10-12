import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Menu } from 'antd';
import PropTypes from 'prop-types';

const renderMenu = (data) => data.map((item) => {
  if (item.children) {
    renderMenu(item.children);
  }
  if (item.meta && item.meta.title) {
    item.label = item.meta.title;
  }
  item.key = item.path || '';
  return item;
});

function SiderBarMenu(props) {
  const { isCollapsed, menuRouters } = props;
  const navigate = useNavigate();
  const onClick = (e) => {
    navigate(e.key || '/');
  };
  const location = useLocation();
  return (
    <Menu
      onClick={onClick}
      defaultSelectedKeys={location.pathname}
      mode="inline"
      inlineCollapsed={isCollapsed}
      items={renderMenu(menuRouters)}
    />
  );
}

SiderBarMenu.propTypes = {
  isCollapsed: PropTypes.bool,
  menuRouters: PropTypes.arrayOf
};
SiderBarMenu.defaultProps = {
  isCollapsed: false,
  menuRouters: []
};

export default SiderBarMenu;
