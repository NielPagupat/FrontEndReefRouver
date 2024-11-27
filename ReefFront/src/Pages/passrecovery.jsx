import React, { useState } from 'react'
import LandingNavigation from '../Components/LandingNavigation'
import axios from 'axios'
import API from '../helper/API'
import { useNavigate } from 'react-router-dom'

export default function activation() {
  const navigate = useNavigate()
  const [restPass, setResetPass] = useState({
    "uid":"",
    "token":"",
    "new_password":""
  })

  const [email, setEmail] = useState()

  const handleReset = (key, value) => {
    setResetPass(prevState=>({
      ...prevState,
      [key] : value
    }))
  }

  const resetPass = async () => {
    await axios.post(API('auth/users/reset_password_confirm/'), restPass, {
      headers:{
        'Content-Type': 'application/JSON',
        'Referrer-Policy': 'same-origin',
        'Cross-Origin-Opener-Policy': 'same-origin'
      }
    })

    navigate('/Login')
  }

  const sendRestCode = async () => {
    await axios.post(API('auth/users/reset_password/'), {"email":email}, {
      headers:{
        'Content-Type': 'application/JSON',
        'Referrer-Policy': 'same-origin',
        'Cross-Origin-Opener-Policy': 'same-origin'
      }
    })

    alert("email has been sent to: "+email)
  }
  return (
    <div className='flex flex-col h-screen'>
      <LandingNavigation />
      <div className="flex flex-col bg-[url('/src/assets/background.jpg')] bg-cover h-full items-center justify-center">
        <div className='flex flex-col p-5 items-center justify-center rounded-xl' style={{backgroundColor:"rgba(0, 11, 97, .75)"}}>
          <h1 className='text-white text-3xl mb-5 font-bold'>Recover Account</h1>
          <div className='flex '>
            <div className='flex '>
            <h1 className='text-white font-semibold m-1'>email:</h1>
            <input onChange={(e)=>setEmail(e.target.value)} type='text'className='text-white border border-black rounded-md bg-inherit' placeholder='email'/>
            </div>
            <button onClick={sendRestCode} className='bg-blue-400 rounded-md ml-2 shadow-md text-white p-2'>Send Recovery Codes</button>
          </div>
          <h1 className='text-white font-semibold m-1'>Input the UID and Token from your email and enter your new password</h1>
          <div>
            <h1 className='text-white font-semibold m-1'>UID:</h1>
            <input onChange={(e)=>handleReset('uid', e.target.value)} type='text'className='text-white border border-black rounded-md p-1 pl-2 bg-inherit' placeholder='UID here'/>
            <h1 className='text-white font-semibold m-1'>Token</h1>
            <input onChange={(e)=>handleReset('token', e.target.value)} type="text" className='text-white border border-black rounded-md p-1 pl-2 bg-inherit' placeholder='token here'/>
            <h1 className='text-white font-semibold m-1'>New Password</h1>
            <input onChange={(e)=>handleReset('new_password', e.target.value)} type="password" className='text-white border border-black rounded-md p-1 pl-2 bg-inherit' placeholder='token here'/>
          </div> 
          <button onClick={resetPass} className='bg-blue-400 rounded-md m-5 shadow-md text-white p-2'>Reset Password</button>
        </div>
      </div>
    </div>
  )
}
