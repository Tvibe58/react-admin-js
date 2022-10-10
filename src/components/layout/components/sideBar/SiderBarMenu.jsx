import { useNavigate, useLocation } from 'react-router-dom'
import { Menu } from 'antd';
import React from 'react';
const renderMenu = (data) => {
  return data.map(item => {
    if (item.children) {
      renderMenu(item.children)
    }
    if (item.meta && item.meta.title) {
      item.label = item.meta.title
    }
    item.key = item.path || ''
    return item
  })
}

const SiderBarMenu = (props) => {
  const navigate = useNavigate()
  const onClick = (e) => {
    navigate(e.key || '/');
  };
  const location = useLocation()
  return (
    <Menu
      onClick={onClick}
      defaultSelectedKeys={location.pathname}
      mode="inline"
      inlineCollapsed={props.isCollapsed}
      items={renderMenu(props.menuRouters)}
    />
  )
}

export default SiderBarMenu;