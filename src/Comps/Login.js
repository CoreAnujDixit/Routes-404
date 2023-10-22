import React from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const navigator = useNavigate();
    function loginDASH() {
        navigator('/loggedin')
    }
    return (
        <div>
            <div className='flex flex-col w-screen mt-28 items-center '>

                <form action="" required>

                    <input type="email" required className='border-2 border-red-400 ' placeholder='Email' />
                    <br />
                    <br />
                    <input required type="password" className='border-2 border-red-400' placeholder='Password' />
                    <br />
                    <button className='bg-blue-300 mt-5 py-2 px-4 rounded-md' onClick={loginDASH}>SUBMIT</button>
                </form>
            </div>

        </div>
    )
}

export default Login