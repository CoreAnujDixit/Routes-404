import React from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigator = useNavigate();
  function Register() {
    navigator("/Register");
  }
  return (
    <div>
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="bg-white p-8 rounded shadow-md w-96">
          <h2 className="text-2xl font-bold mb-4">Register</h2>
          <form>
            <div className="mb-4">
              <label
                htmlFor="username"
                className="block text-sm font-medium text-gray-700"
              >
                Username
              </label>
              <input
                type="text"
                id="username"
                className="w-full p-2.5 rounded border border-gray-300"
                placeholder="Your username"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full p-2.5 rounded border border-gray-300"
                placeholder="Your email"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full p-2.5 rounded border border-gray-300"
                placeholder="Your password"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium text-gray-700"
              >
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                className="w-full p-2.5 rounded border border-gray-300"
                placeholder="Confirm password"
              />
            </div>
            <button
              onClick={Register}
              type="submit"
              className="w-full bg-blue-500 text-white py-2.5 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
