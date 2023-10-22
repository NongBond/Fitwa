import { useState } from 'react'
import './App.css'
import Login from './component/Login'
import { Link, redirect } from 'react-router-dom'


function App() {
  const [count, setCount] = useState(0)
  return (
    <div>
      <Link to='/SignUp' className='SignUp'>SignIn</Link>
      <Link to='/Login' className='Login'>Login</Link>
    </div>
  )
}

export default App
