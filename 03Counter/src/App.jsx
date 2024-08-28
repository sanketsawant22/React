import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [count, setCount] = useState(0)

  // let count = 0;

  const increaseValue = () => {
    console.log("clicked");
    count++
    setCount(count)
  }

  const decreaseValue = () => {

    if (count == 0) {
      setCount(0)
    }

    else {
      count--
      setCount(count)
    }
  }

  return (
    <>
      <h2>Count : {count}</h2>

      <button onClick={increaseValue}>Increase</button>
      <button onClick={decreaseValue}>Decrease</button>
    </>
  )
}

export default App
