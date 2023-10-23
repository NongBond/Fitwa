import { useState } from 'react'
import './App.css'
import { Link } from 'react-router-dom'


function App() {
  const [count, setCount] = useState(0)
  return (
    <div className='con-app'>
      <h1 className='h1fitwa'>Welcome to Fitwa</h1>
      <p className='pfitwa'>fitwa is website for gym searching and friend searching</p>
        <div className='button-align'>
        <Link to='/Login' className='Login'>Login</Link>
        <Link to='/SignUp' className='SignUp'>Sign Up</Link>
        </div>
    </div>
  )
}


export default App
