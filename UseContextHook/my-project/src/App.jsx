import { useState, createContext } from 'react';
import './App.css';
import Child from './components/child'

 export const MyContext = createContext();

function Name() {
  const [user,setuser]=useState("Rohan");
 return(
 
  <MyContext.Provider value={user}>
  <Child></Child>
  </MyContext.Provider>
  
 )
}

export default Name;

