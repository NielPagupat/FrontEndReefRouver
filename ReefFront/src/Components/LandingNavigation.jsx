import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setToken, setEmail } from '../slice';
import axios from 'axios';
import API from '../helper/API';

export default function LandingNavigation() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation(); // This hook gives you the current location/path
  const { email, token } = useSelector((state) => state.auth_token);

  const goToHome = () => {
    navigate('/');
  };

  const goToLogin = () => {
    navigate('/Login');
  };

  const logout = async () => {
    try {
      console.log({ 'Authorization': `Token ${token}` }); // Debugging the Authorization header

      // Make the logout API call
      const response = await axios.post(
        API('auth/token/logout/'), // Ensure the endpoint is correct
        null, // No body is required for Djoser's logout endpoint
        {
          headers: {
            'Authorization': `Token ${token}`, // Pass the token in the header
            'Content-Type': 'application/json', // Correct the content type case
          },
        }
      );

      console.log('Logout successful:', response.data); // Debugging success response

      // Clear Redux state and navigate to the homepage
      dispatch(setToken(''));
      dispatch(setEmail(''));
      navigate('/');
    } catch (error) {
      console.error('Error during logout:', error.response || error.message); // Debugging errors
      alert('Logout failed. Please try again.');
    }
  };

  return (
    <div className='flex shadow-lg border-b-2 border-black items-center' style={{ backgroundColor: "rgba(0, 11, 97)" }}>
      <div className='flex items-center'>
        <img onClick={goToHome} src="./src/assets/logo.png" alt="" className='size-14 ml-7 cursor-pointer' />
        <h1 onClick={goToHome} className='ml-5 font-bold text-white cursor-pointer'>REEF ROUVER</h1>
      </div>
      <div className='flex flex-1 justify-end items-center'>
        {token ? ( // Show logout if token exists (indicating user is logged in)
          <>
            <h1 className='text-white mr-5'>{email}</h1>
            <h1 className='text-white mr-1 cursor-pointer' onClick={goToLogin}>LOGOUT</h1>
            <button className='mr-5' onClick={logout}>
              <svg className="h-14 w-14 text-white" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" />
                <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" />
                <path d="M20 12h-13l3 -3m0 6l-3 -3" />
              </svg>
            </button>
          </>
        ) : ( // If no token, show login button
          <>
            <h1 className='text-white mr-1 cursor-pointer' onClick={goToLogin}>LOGIN</h1>
            <button className='mr-5' onClick={goToLogin}>
              <svg className="h-14 w-14 text-white" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" />
                <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" />
                <path d="M20 12h-13l3 -3m0 6l-3 -3" />
              </svg>
            </button>
          </>
        )}
      </div>
    </div>
  );
}
