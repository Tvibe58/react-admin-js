
import notFound from '../pages/404'
import about from '../pages/about'
const routers = [
  {
    title: '404',
    path: '/',
    component: notFound
  },
  {
    title: 'about',
    path: '/about',
    component: about
  }
]

export default routers