import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [count, setCount] = useState(0)

  // let count = 0;

  const increaseValue = () => {
    // console.log("clicked");
    
    setCount(count++)
    // setCount(count++)      if we make same copies still it increase only once 
    // setCount(count++)      because of fibre which pack the bundle and send to execute
    // setCount(count++)      thus it execute only once


    // but if we want to make it execute multiple times

    // setcount takes arrow function with previuos count as parameter

  //   setCount((prevCount) => {        
  //     return prevCount + 1
  //   })

  //   setCount((prevCount) => {
  //     return prevCount + 1
  //   })
  }

  const decreaseValue = () => {

    if (count == 0) {
      setCount(0)
    }

    else {
      setCount(count--)
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
