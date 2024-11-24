import React, { useState } from 'react'
import LandingNavigation from '../Components/LandingNavigation'
import axios from 'axios'
import API from '../helper/API'
import { useNavigate } from 'react-router-dom'

export default function activation() {
  const navigate = useNavigate()
  const [activation, setActivation] = useState({
    "uid":"",
    "token":""
  })

  const handleActivation = (key, value) => {
    setActivation(prevState=>({
      ...prevState,
      [key] : value
    }))
  }

  const activateAccount = async () => {
    await axios.post(API('auth/users/activation/'), activation, {
      headers:{
        'Content-Type': 'application/JSON',
        'Referrer-Policy': 'same-origin',
        'Cross-Origin-Opener-Policy': 'same-origin'
      }
    })

    navigate('/')

  }
  return (
    <div className='flex flex-col h-screen'>
      <LandingNavigation />
      <div className="flex flex-col bg-[url('/src/assets/background.jpg')] bg-cover h-full items-center justify-center">
        <div className='flex flex-col p-5 items-center justify-center rounded-xl' style={{backgroundColor:"rgba(0, 11, 97, .75)"}}>
          <h1 className='text-white text-3xl mb-5 font-bold'>Activate Account</h1>
          <div>
            <h1 className='text-white font-semibold m-1'>UID:</h1>
            <input onChange={(e)=>handleActivation('uid', e.target.value)} type='text'className='text-white border border-black rounded-md p-1 pl-2 bg-inherit' placeholder='UID here'/>
            <h1 className='text-white font-semibold m-1'>Token</h1>
            <input onChange={(e)=>handleActivation('token', e.target.value)} type="text" className='text-white border border-black rounded-md p-1 pl-2 bg-inherit' placeholder='token here'/>
          </div> 
          <button onClick={activateAccount} className='bg-blue-400 rounded-md m-5 shadow-md text-white p-2'>Activate Account</button>
        </div>
      </div>
    </div>
  )
}
