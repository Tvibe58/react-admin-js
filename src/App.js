import './App.scss';
import { BrowserRouter, Link, useRoutes } from 'react-router-dom'
import routers from './router';
function RouteElement () {
  const element = useRoutes(routers)
  return element
}

function App () {
  return (
    <BrowserRouter>
      <Link to="/">home</Link>
      &nbsp;
      <Link to="/about">About</Link>
      &nbsp;
      <Link to="/404">404</Link>
      &nbsp;
      <Link to="/about/404">404</Link>
      <RouteElement />
    </BrowserRouter >
  );
}

export default App;
