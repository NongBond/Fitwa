import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import About from './pages/About'
import EditProfile from './pages/EditProfile'
import Post from './pages/Post'

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
    path: "main/about",
    element: <About />
  },
  {
    path: "edit",
    element: <EditProfile />
  },
  {
    path: "main",
    element: <Post />
  },
  
])

  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  )