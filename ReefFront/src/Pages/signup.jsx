import React, { useState } from 'react'
import LandingNavigation from '../Components/LandingNavigation'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import API from '../helper/API'
export default function Signup() {

  const navigate = useNavigate()
  const [userData, setUserData] = useState({
    "email":"",
    "password":"",
    "confirm_password":"",
    "first_name":"",
    "last_name":"",
    "organization_name":"",
    "address":"",
    "contact_info":"",
  })

  const handleUserData = (key, value) => {
    setUserData(prevState=>({
      ...prevState,
      [key]:value
    }))
  }

  const submitRegistration = async () => {
   const response = await axios.post(API('auth/users/'), userData, 
   {headers:{
      'Content-Type': 'application/JSON',
      'Referrer-Policy': 'same-origin',
      'Cross-Origin-Opener-Policy': 'same-origin'
   }}).then(response => {
      navigate('/Activate')
      console.log(response)
   }).catch(error => {
    if (error.response.request.status == 400) {
      alert(error.response.data.password)
    }
   })

  }



  return (
    <div className='flex flex-col h-screen'>
      <LandingNavigation />
      <div className="flex flex-col bg-[url('/src/assets/background.jpg')] bg-cover h-full items-center">
        <div className='flex flex-col p-5 items-center justify-center h-full' style={{backgroundColor:"rgba(0, 11, 97, .75)"}}>
          <img src="./src/assets/logo.png" alt="logo" className='size-32 drop-shadow-xl'/>
          <h1 className='text-white text-3xl mb-5 font-bold'>REGISTER</h1>
          <div className='flex flex-col border p-3 rounded-xl shadow-white'>   
            <h1 className='text-white font-semibold m-1'>Email</h1>
            <input onChange={(e)=>handleUserData("email", e.target.value)} type="text" className='text-white border border-white rounded-md p-1 pl-2 bg-inherit'/>
            <h1 className='text-white font-semibold m-1'>Password</h1>
            <input onChange={(e)=>handleUserData("password", e.target.value)} type="password" className={`text-white border border-white rounded-md p-1 pl-2 bg-inherit ${userData.password == userData.confirm_password ? 'focus:bg-green-600':'focus:bg-red-700'}`}/>
            <h1 className='text-white font-semibold m-1'>Confirm Password</h1>
            <input onChange={(e)=>handleUserData("confirm_password", e.target.value)} type="password" className={`text-white border border-white rounded-md p-1 pl-2 bg-inherit ${userData.password == userData.confirm_password ? 'focus:bg-green-600':'focus:bg-red-700'}`}/>
            <div className='flex'>
              <div className='flex flex-col mr-2'>
                <h1 className='text-white font-semibold m-1'>First Name</h1>
                <input onChange={(e)=>handleUserData("first_name", e.target.value)} type="text" className='text-white border border-white rounded-md p-1 pl-2 bg-inherit'/>
              </div>
              <div className='flex flex-col'>
                <h1 className='text-white font-semibold m-1'>Last Name</h1>
                <input onChange={(e)=>handleUserData("last_name", e.target.value)} type="text" className='text-white border border-white rounded-md p-1 pl-2 bg-inherit'/>
              </div>
            </div>
            <h1 className='text-white font-semibold m-1'>Ogranization Name</h1>
            <input onChange={(e)=>handleUserData("organization_name", e.target.value)} type="text" className='text-white border border-white rounded-md p-1 pl-2 bg-inherit'/>
            <h1 className='text-white font-semibold m-1'>address</h1>
            <input onChange={(e)=>handleUserData("address", e.target.value)} type="text" className='text-white border border-white rounded-md p-1 pl-2 bg-inherit'/>
            <h1 className='text-white font-semibold m-1'>Contact Information</h1>
            <input onChange={(e)=>handleUserData("contact_info", e.target.value)} type="text" className='text-white border border-white rounded-md p-1 pl-2 bg-inherit'/>
            <button onClick={submitRegistration} className='bg-blue-400 rounded-md m-5 shadow-md text-white'>REGISTER</button>
          </div>
        </div>
      </div>
    </div>
  )
}
