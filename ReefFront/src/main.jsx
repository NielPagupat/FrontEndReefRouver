import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import * as ReactDOM from "react-dom";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import store from './store.js';
import { Provider } from 'react-redux'
import { lazy } from 'react';
import { delayImport } from './helper/delay.js';

import Loading from './Components/Loading.jsx';

import Mydata from './Components/Mydata.jsx';
import RentRouv from './Components/RentRouv.jsx';

const Landing = lazy(delayImport(() => import('./Pages/landing.jsx'), 2000));
const Login = lazy(delayImport(() => import('./Pages/login.jsx'), 2000));
const PassRecovery = lazy(delayImport(() => import('./Pages/passrecovery.jsx')));
const Signup = lazy(delayImport(() => import('./Pages/signup.jsx')));
const Dashboard = lazy(delayImport(()=>import('./Pages/dashboard.jsx')));
const ActivateAcc = lazy(delayImport(()=>import('./Pages/activation.jsx')));

const router = createBrowserRouter([
  {path: "/", element: <Landing />,
    children: [
      {
        
      },
    ],
  },
  {path: "/Login", element: <Login/>},
  {path: "/SignUp", element: <Signup/>},
  {path: "/Recovery", element: <PassRecovery/>},
  {path: "/Dashboard", element: <Dashboard/>,
    children: [
      {path: "", element: <Mydata />},
      {path: "Rent", element: <RentRouv />},
    ],
  },
  {path: "/Activate", element: <ActivateAcc />},
  {path: "/RecoverPass", element: <PassRecovery />},
]);

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <Suspense fallback={<Loading />}>
      <RouterProvider router={router} />
    </Suspense>
  </Provider>
)
