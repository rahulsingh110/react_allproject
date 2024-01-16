import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import  Card from './componant/card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1 className='bg-green-400   text-black p-4 rounded-2xl mb'   >Talwind Test</h1>
     <Card userName ="chai aur code"/>
     <Card/>
    </>
  )
}

export default App
