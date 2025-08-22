import { useState } from 'react'

import './App.css'

function App() {
  const [color, setColor] = useState("skyblue");

  return (
    <>
    <div className='w-full h-screen fixed ' style={{backgroundColor:color}}>
      <div className='w-110 h-18  rounded-xl border-none bg-white ml-100 mr-3.5 mt-120'>
        <button className='text-white font-bold border-lg p-2 bg-red-500 rounded-xl w-20 m-3' onClick={()=>setColor("red")}>Red</button>
        <button className='text-white font-bold border-lg p-2 bg-blue-500 rounded-xl w-20 m-3 ' onClick={()=>setColor("blue")}>blue</button>
        <button className='text-white font-bold border-lg p-2 bg-green-500 rounded-xl w-20 m-3' onClick={()=>setColor("green")}>green</button>
        <button className='text-white font-bold border-lg p-2 bg-yellow-500 rounded-xl w-20 m-3' onClick={()=>setColor("yellow")}>yellow</button>

      </div>
    </div>
    </>
  )
}

export default App
