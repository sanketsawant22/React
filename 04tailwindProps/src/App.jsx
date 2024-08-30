import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)

  let obj1 = {
    name: "sanket",
    age: 20
  }

  return (
    <>
      <h1 className='bg-red-700 text-black p-5 rounded-xl mb-5'>Tailwind CSS</h1>
      <Card username="ujwal" obj={obj1}/>
      <Card />
    </>
  )
}

export default App
