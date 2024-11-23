import React from 'react'
import { useNavigate } from 'react-router-dom'


export default function LandingNavigation() {
  
  const navigate = useNavigate()

  const goToHome = () => {
    navigate('/')
  }

  const goToLogin = () => {
    navigate('/Login')
  }
    return (
    <div className='flex shadow-lg border-b-2 border-black items-center' style={{backgroundColor:"rgba(0, 11, 97)"}}>
        <div className='flex items-center'>
            <img onClick={goToHome} src="./src/assets/logo.png" alt="" className='size-14 ml-7 cursor-pointer'/>
            <h1 onClick={goToHome} className='ml-5 font-bold text-white cursor-pointer'>REEF ROUVER</h1>
        </div>
        <div className='flex flex-1 justify-end items-center'>
            <h1 className='text-white mr-1 cursor-pointer' onClick={goToLogin}>LOGIN</h1>
            <button className='mr-5' onClick={goToLogin}>
                <svg class="h-14 w-14 text-white"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" />  <path d="M20 12h-13l3 -3m0 6l-3 -3" /></svg>
            </button>
        </div>
    </div>
  )
}
