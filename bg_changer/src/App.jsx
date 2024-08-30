import { useState } from "react"

function App() {
  const [color, setColor] = useState("lavender")

  return (
    <div className="w-full h-screen duration-500" 
    style={{backgroundColor : color}}>

      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-full">
          <button onClick={() => setColor("red")} className=" px-3 py-1 rounded-full text-white" style={{backgroundColor:"Red"}}>Red</button>
          <button onClick={() => setColor("orange")} className=" px-3 py-1 rounded-full text-white" style={{backgroundColor:"Orange"}}>Orange</button>
          <button onClick={() => setColor("yellow")} className=" px-3 py-1 rounded-full text-black" style={{backgroundColor:"Yellow"}}>Yellow</button>
          <button onClick={() => setColor("lavender")} className=" px-3 py-1 rounded-full text-black" style={{backgroundColor:"Lavender"}}>Lavender</button>
          <button onClick={() => setColor("skyblue")} className=" px-3 py-1 rounded-full text-black" style={{backgroundColor:"Skyblue"}}>Skyblue</button>
          <button onClick={() => setColor("grey")} className=" px-3 py-1 rounded-full text-black" style={{backgroundColor:"Grey"}}>Grey</button>
        </div>
      </div>

    </div>
  )
}

export default App
