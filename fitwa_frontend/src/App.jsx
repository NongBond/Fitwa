import { useContext, useState } from 'react'
import './App.css'
import Login from './component/Login'
import { Link, redirect } from 'react-router-dom'
import { AuthContext, AuthContextProvider } from './context/AuthContext'
import { ChatContextProvider } from './context/ChatContext'


function App() {
  const [count, setCount] = useState(0)
  return (
    <div className='con-app'>
      <h1 className='h1fitwa'>Welcome to Fitwa</h1>
      <p className='pfitwa'>Fitwa is a website for gym search and friend searching</p>
      <div className='button-align'>
      <Link to='/SignUp' className='SignUp'>SignIn</Link>
      <Link to='/Login' className='Login'>Login</Link>
      </div>
    </div>
  )
}

export default App
