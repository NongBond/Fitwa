import React, {useContext} from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import SignUp from './component/SignUp'
import Login from './component/Login'
import Chat from './pages/Chat'
import Feed from './pages/Feed'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import UserProfile from './component/UserProfile'
import EditProfile from './component/EditProfile'
import { AuthContext, AuthContextProvider } from './context/AuthContext'
import { ChatContextProvider } from './context/ChatContext'

const router =
createBrowserRouter(
  [
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
  {
    path: "/Main",
    element: <Feed/>
  },{
    path: "/Chat",
    element: <Chat/>
  }

])

  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
    <AuthContextProvider>
      {/* Wrap ChatContextProvider with AuthContext to pass 'user' */}
      <AuthContext.Consumer>
        {({ user }) => (
          <ChatContextProvider user={user}>
            <RouterProvider router={router} />
          </ChatContextProvider>
        )}
      </AuthContext.Consumer>
    </AuthContextProvider>
  </React.StrictMode>
  )