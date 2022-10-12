import React from 'react';
import { useRoutes, Navigate } from 'react-router-dom';
import { MailOutlined, DashboardOutlined, AppstoreOutlined } from '@ant-design/icons';
import DemoList from '../pages/demo/list/Index';

import About from '../pages/about';
import NotFound from '../pages/404';
import Home from '../pages/home';
import Layout from '../components/layout/Layout';
import Empty from '../components/layout/Empty';

/**
 * hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
 * meta : {
    title: 'title'               the name show in subMenu and breadcrumb (recommend set)
  }
 * */

export const routers = [
  {
    path: '',
    name: '',
    element: <Navigate to="/home" />,
    hidden: true,
    meta: {
      title: '首页'
    }
  },
  {
    path: '/',
    name: 'HomeRoot',
    element: <Layout />,
    meta: {
      title: '首页',
      isRoot: true
    },
    children: [
      {
        path: '/home',
        name: 'Home',
        icon: <DashboardOutlined />,
        element: <Home />,
        // hidden: true,
        meta: {
          title: '首页'
        }
      },
      {
        path: '/about',
        name: 'About',
        element: About,
        icon: <MailOutlined />,
        // hidden: true,
        meta: {
          title: '关于'
        }
      },
      {
        path: '/',
        name: 'aa',
        element: Empty,
        icon: <AppstoreOutlined />,
        meta: {
          title: 'Demo'
        },
        children: [
          {
            path: '/demo/list',
            name: 'a-demo',
            element: <DemoList />,
            meta: {
              title: '子-列表'
            }
          },
          {
            path: '/demo/homes',
            name: 'a-home',
            // element: <Home />,
            element: <div>we3424</div>,
            meta: {
              title: '子-首页'
            }
          }
        ]
      }
    ]
  },
  {
    path: '404',
    name: '404',
    element: <NotFound />,
    hidden: true
  },
  {
    path: '*',
    name: 'Other',
    element: <Navigate to="/404" />,
    hidden: true
  }
];

export function RouteElement() {
  const element = useRoutes(routers);
  return element;
}
