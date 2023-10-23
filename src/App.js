import { NavLink, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./Comps/Login";
import Signup from "./Comps/Signup";
import Welcome from "./Comps/Welcome";
import Registered from "./Comps/Registered";

function App() {
  return (
    <div className="bg-pink-300 h-fit">
      <div className="flex w-40 space-x-24 text-center gap-24	items-center">
        <img
          className="m-4"
          src="https://1000logos.net/wp-content/uploads/2016/10/Amazon-Logo.png"
          alt=""
        />

        <div>
          <ul className="flex  gap-24 gap-y-24 ">
            <li className="">
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink  to="/">About</NavLink>
            </li>
            <li>
              <NavLink  to="/">Contact</NavLink>
            </li>
            <li className="bg-green-200 py-2 px-4 rounded-md ">
              <button>
                <NavLink to="/login">Login</NavLink>
              </button>
            </li>
            <li className="bg-green-200  py-2 px-4 rounded-md	">
              <button>
                <NavLink to="/signin">Signup</NavLink>
              </button>
            </li>
          </ul>
        </div>
      </div>
      <Routes className="">
        <Route path="/" element={<div className="text-center justify-center	flex  items-center	h-screen text-2xl font-bold">Hello</div>} />
        <Route path="/login" element={<Login />} />
        <Route path="/signin" element={<Signup />} />
        <Route path="/Register" element={<Registered />} />
        <Route path="/logged" element={<Welcome />} />
      </Routes>
    </div>
  );
}

export default App;
