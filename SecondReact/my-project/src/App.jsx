import { useState } from 'react';
import './App.css';

function Name() {
  const [text, setText] = useState("Hello");

  return (
    <>
      <center>
        <p className='text-2xl font-semibold mt-20'>{text}</p>
        <button
          className='bg-black font-bold text-white p-4 mt-4 rounded-lg'
          onClick={() => setText("You clicked me!")}
        >
          Click Me
        </button>
      </center>
    </>
  );
}

export default Name;
