import React from 'react';
import LandingNavigation from '../Components/LandingNavigation';
import { Outlet, NavLink } from 'react-router-dom';

export default function Dashboard() {
  return (
    <div className='flex flex-col h-screen'>
      <LandingNavigation />
      <div className='flex h-full'>
        {/* Sidebar */}
        <div className='bg-slate-400 p-5 flex flex-col'>
          <NavLink
            to=""
            end
            className={({ isActive }) =>
              `my-5 px-4 py-2 rounded ${
                isActive ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'
              }`
            }
          >
            MY DATA
          </NavLink>
          <NavLink
            to="Rent"
            className={({ isActive }) =>
              `my-5 px-4 py-2 rounded ${
                isActive ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'
              }`
            }
          >
            RENT ROUV
          </NavLink>
        </div>

        {/* Content Area */}
        <div className='flex-1 p-5'>
          <Outlet /> {/* Child routes will render here */}
        </div>
      </div>
    </div>
  );
}
