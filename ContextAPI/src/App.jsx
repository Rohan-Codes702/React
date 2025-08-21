import React, { createContext, useContext } from 'react'
const context=createContext();

function ChildA(){
  const userName=useContext(context);
  return<h1>ChildA{userName}</h1>
}

function ChildB(){
  const userName=useContext(context);
  return<h1>ChildB{userName}</h1>
}

function ChildC(){
  const userName=useContext(context);
  return<h1>ChildB{userName}</h1>
}
function App() {
  const userName ="Rohan";
  return (
   <context.Provider value={userName}>
    <ChildA></ChildA>
   </context.Provider>
  )
}

export default App
