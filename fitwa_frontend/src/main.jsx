import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import About from './pages/About'
import SignIn from './pages/Signin'
import EditProfile from './pages/EditProfile'

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "about",
    element: <About />
  },
  {
    path: "signin",
    element: <SignIn />
  },
  {
    path: "edit",
    element: <EditProfile />
  },
])

  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  )