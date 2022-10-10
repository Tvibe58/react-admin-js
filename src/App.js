import './App.scss';
import { BrowserRouter } from 'react-router-dom'
import { RouteElement } from './router/index';


function App () {
  return (
    <div id='app'>
      <BrowserRouter>
        <RouteElement />
      </BrowserRouter >
    </div>
  );
}

export default App;
