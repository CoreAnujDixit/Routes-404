import React from 'react'
import Login from './Comps/Login'
import Signin from './Comps/Signin'
import Home from './Comps/Home'
import { Routes, Route, NavLink } from 'react-router-dom'
import Loggedin from './Comps/Loggedin'
const App = () => {
  return (<div >

    <div>
      <div className='w-52 '>
        <NavLink><img src="https://akm-img-a-in.tosshub.com/businesstoday/images/story/202101/myntra_logo_660_300121011207.jpg?size=948:533" alt="" /></NavLink>

      </div>
      <ul className=' flex flex-row gap-20 ml-60'>
        <li className='text-center'><NavLink to='/'>Home</NavLink></li>
        <li className='text-center'><NavLink to='/'>About</NavLink></li>
        <li className='text-center'><NavLink to='/'>Contact</NavLink></li>
        <li className='bg-green-400 text-white text-lg py-2 px-4'><NavLink to='/login'>
          <button>Login</button>
        </NavLink></li>
        <li className='bg-green-400 py-2 px-4 text-lg text-white'><NavLink to='/signin'>
          <button>SignUP</button>
        </NavLink></li>
      </ul>
    </div>
    <Routes>
      <Route path='/login' element={<Login />} />
      <Route path='/' element={<Home />} />
      <Route path='/signin' element={<Signin />} />
      <Route path='/signnedin' element={<Loggedin />} />

      <Route path='/loggedin' element={<Loggedin />} />
    </Routes>
  </div>
  )
}

export default App