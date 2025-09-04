import React from 'react'

import { useState,useRef } from 'react'

function App() {

  const[count,setcount]=useState(0);
      let timeref=useRef(null);


  function startTimer(){
    setcount(count+1)
    timeref.current=setInterval(()=>{
      setcount(count=>count+1);
    },1000);
    }


  function stopTimer(){
    clearInterval(timeref.current);
  }

  function restartTimer(){
    setcount(0);
    clearInterval(timeref.current);

  }
  return (
<div>
    <p>StopWatch :{count}</p>
    <button onClick={startTimer}> Start</button>
    <button onClick={stopTimer}>Stop </button>
    <button onClick={restartTimer}>Restart</button>
    </div>
  )
}

export default App
