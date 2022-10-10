import { routers } from 'router/index';
import { useNavigate, useLocation } from 'react-router-dom'
import { Menu } from 'antd';
import React from 'react';
import Toggle from 'components/Toggle'

const renderMenu = (data) => {
  return data.map(item => {
    if (item.children) {
      renderMenu(item.children)
    }
    if (item.meta && item.meta.title) {
      item.label = item.meta.title
    }
    item.key = item.path || ''
    // item.key = item.name || ''
    return item
  })
}

// let path = ''

// const goTo = (data, key) => {
//   for (let i = 0; i < data.length; i++) {
//     if (data[i].name === key) {
//       // console.log(data[i].name, key, data[i].path)
//       path = data[i].path
//       break;
//     } else if (data[i].children && data[i].key !== key) {
//       goTo(data[i].children, key)
//     }
//   }
//   return path
// }


const SiderBar = () => {
  const navigate = useNavigate()
  const onClick = (e) => {
    // console.log('click ', e);
    navigate(e.key || '/');
    // const path = goTo(routers, e.key)
    // console.log('path', path)
    // navigate(path);
  };
  const myRouters = routers.filter(item => item.meta && item.meta.isRoot)
  const menuRouters = myRouters[0].children || []
  const location = useLocation()
  let isCollapsed = false
  const toggleClick = () => {
    isCollapsed = !isCollapsed
    console.log('isCollapsed', isCollapsed)
  }
  return (
    <div className="sidebar-container">
      <div className="scrollbar-wrapper">
        <Menu
          onClick={onClick}
          defaultSelectedKeys={location.pathname}
          mode="inline"
          inlineCollapsed={isCollapsed}
          items={renderMenu(menuRouters)}
        />
      </div>
      <div className="collapse">
        <Toggle isActive={!isCollapsed} toggleClick={toggleClick} />
      </div>
    </div>
  )
}

export default SiderBar;