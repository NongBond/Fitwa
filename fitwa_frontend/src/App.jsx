import { useState } from 'react'
import './App.css'
import Header from './component/Header'
import Banner from './component/Banner'
import './component/Banner.css'
import './component/Header.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Header />
        <Banner />
      </div>
    
    </>
  )
}

export default App
