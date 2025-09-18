import { useState,useEffect } from 'react';
import './App.css';

function Name() {
  const[count,setcount]=useState(0);
    const[total,setTotal]=useState(0);


  /*useEffect(()=>{
    alert("UseEffect applies");
  });*/

 /* useEffect(()=>{
    alert("Only first render");
  },[]);
*/

 /* useEffect(()=>{
    alert("count render");
  },[count]);
  */

  useEffect(()=>{
    alert("Counter updated");

    return(
      alert("total btn called")
    );
    
  },[count][total])

  function addval(){
    setcount(count+1);
  }
  function totatval(){
    setTotal(total+1);
  }
  return (
    <>
    <p className='text-white font-bold text-center mt-40 '>count:{count}</p>
     <button className='bg-amber-800 p-4 text-white font-bold rounded-xl  ml-160 'onClick={addval}>ADD value</button>

      <p className='text-white font-bold text-center mt-40 '>Total:{total}</p>
     <button className='bg-amber-800 p-4 text-white font-bold rounded-xl  ml-160 'onClick={totatval}>Total</button>
    </>
  );
}

export default Name;
