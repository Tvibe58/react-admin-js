import './App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import routers from './router';

function App() {
  return (
    <div className="App">
      <a
        className="App-link"
        href="/"
        target="_self"
      >
        home
      </a>
      &nbsp;
      <a
        className="App-link"
        href="/about"
        target="_self"
      >
        about
      </a>
      <Router>
        <Routes>
          {
            routers.map((item, index) => {
              return (
                <Route key={index} exact path={item.path} element={<item.component />}></Route>
              )
            })
          }
        </Routes>
      </Router>
    </div>
  );
}

export default App;
