import React, { useState } from 'react'
import LandingNavigation from '../Components/LandingNavigation'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { setToken, setEmail } from '../slice'

import axios from 'axios'
import API from '../helper/API'
export default function Login() {

  const navigate = useNavigate()
  const {email, token} = useSelector((state) => state.auth_token)

  const [credentials, setCredentials] = useState({
    "email": "",
    "password": ""
  })

  const handleCredentials = (key, value) => {
    setCredentials(prevState => ({
      ...prevState,
      [key]: value
    }))
  }

  const dispatch = useDispatch()

  const submitCredentials = async () => {
    

    try {
      console.log(credentials);
      const response = await axios.post(API('auth/token/login'), credentials, {
        headers: {
          'Content-Type': 'application/JSON',
          'Referrer-Policy': 'same-origin',
          'Cross-Origin-Opener-Policy': 'same-origin'
        }
      });
      // Dispatch actions after successful response
      dispatch(setToken(response.data.auth_token));
      dispatch(setEmail(credentials.email));
      navigate('/Dashboard');
    } catch (error) {
      console.error(error); // Log the error if there's any
      alert("Username and password: Mismatch or is blank");
    }
  };

  const goToRegister = () => {
    navigate('/SignUp')
  }
  return (
    <div className='flex flex-col h-screen'>
      <LandingNavigation />
      <div className='flex h-full'>
        <div className='flex flex-1'>
          <img src="./src/assets/background.jpg" alt="bg" />
        </div>
        <div className='flex flex-col border border-black w-1/3 justify-center items-center bg-gradient-to-t from-cyan-500 to-blue-500'>
            <img src="./src/assets/logo.png" alt="logo" className='size-40 drop-shadow-xl'/>
            <div className='flex flex-col border border-black p-5 rounded-lg shadow-xl' style={{backgroundColor:"rgba(0, 11, 97, .55)"}}>
              <div className='flex flex-1 justify-center'>
              <h1 className='text-white text-3xl mb-5 font-bold'>Login</h1>
            </div>
            <h1 className='text-white font-semibold m-1'>email:</h1>
            <input onChange={(e) => handleCredentials("email", e.target.value)} type='text'className='text-white border border-black rounded-md p-1 pl-2 bg-inherit' placeholder='your@gmail.com'/>
            <h1 className='text-white font-semibold m-1'>Password</h1>
            <input onChange={(e) => handleCredentials("password", e.target.value)} type="password" className='text-white border border-black rounded-md p-1 pl-2 bg-inherit'/>
            <div className='flex flex-1 justify-end'>
              <h1 className='text-white'>forgot password? <a className='text-cyan-400 underline cursor-pointer'>click here</a></h1>
            </div>
            <button onClick={submitCredentials} className='bg-blue-400 rounded-md m-5 shadow-md text-white'>LOGIN</button>
            <h1 className='text-white'>don't have an account? <a className='text-cyan-400 underline cursor-pointer' onClick={goToRegister}>register here</a></h1>
          </div>
      </div>
      </div>
    </div>
  )
}
