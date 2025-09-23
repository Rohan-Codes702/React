import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment,reset} from './Feathures/Counter/CounterSlice';



function App() {
  const count=useSelector((state)=>state.counter.value);

  const dispatch =useDispatch();
function handleIncrementClick(){
dispatch(increment());
}

function handleDecrementClick(){
dispatch(decrement());

}

function handleResetClick(){
dispatch(reset());

}

  return (
<div className=" min-h-screen flex items-center justify-center bg-gray-100">
  <div className="bg-amber-600 content-center p-5  rounded-xl">
    <div className="flex flex-col items-center gap-6">
      <button
        onClick={handleIncrementClick}
        className="bg-black text-white font-extrabold p-4 w-24 rounded-xl"
      >
        +
      </button>

      <p className="bg-amber-200 p-2 font-extrabold rounded-2xl mt-4 text-center w-full">
        Count: {count}
      </p>

      <button
        onClick={handleDecrementClick}
        className="bg-black text-white font-extrabold p-4 w-24 rounded-xl mt-4"
      >
        -
      </button>

      <button
        onClick={handleResetClick}
        className="bg-black text-white font-extrabold p-4 w-24 rounded-xl mt-4"
      >
        Reset
      </button>
    </div>
  </div>
</div>

  )
}

export default App
