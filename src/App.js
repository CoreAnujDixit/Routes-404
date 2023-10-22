import { Routes, Route, NavLink } from 'react-router-dom';
import './App.css';
import Home from './Comps/Home';
import Main from './Comps/Main';
function App() {
  return (
    <div className="App">
      <ul>

        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/about'>about</NavLink></li>
        <li><NavLink to='/contact'>contact</NavLink></li>

      </ul>
      <Routes>
        <Route path='/' element={<Main />} >
          <Route index element={<Home />} />
          <Route path='/about' element={<div>About Us</div>} />
          <Route path='/contact' element={<div>Contact us</div>} />
          <Route path='*' element={<div><img src='https://sitechecker.pro/wp-content/uploads/2023/06/404-status-code.png' width={1100} alt="" /></div>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
