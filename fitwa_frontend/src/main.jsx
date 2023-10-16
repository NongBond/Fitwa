import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import SignUp from './component/SignUp'
import Login from './component/Login'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import UserProfile from './component/UserProfile'
import EditProfile from './component/EditProfile'



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/SignUp",
    element: <SignUp />
  },
  {
    path: "/Login",
    element: <Login />
  },
  {
    path: "/UserProfile",
    element: <UserProfile />
  },
  {
    path: "/EditProfile",
    element: <EditProfile />
  },

])

  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  )