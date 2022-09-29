
import Home from '../pages/home'
import NotFound from '../pages/404'
import About from '../pages/about'

const routers = [
  {
    path: '/',
    element: <Home/>
  },
  {
    path: '/404',
    element: <NotFound></NotFound>
  },
  {
    path: '/about',
    children: [
      {
        path: '/about',
        element: About
      },
      {
        path: '404',
        element: <NotFound></NotFound>
      }
    ]
  }
]

export default routers