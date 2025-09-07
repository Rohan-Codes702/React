import React from 'react'
import { useRef } from 'react'  


function App() {
  const usernameref=useRef(null);
  const passwordref=useRef(null);

  function handleform(e) {
  e.preventDefault();
  console.log("UserName:",usernameref.current.value, "Password:",passwordref.current.value);
}

  return (
<form onSubmit={handleform}>
  <input type='text' id='username' ref={usernameref}></input>
  <br />
  <input type="text" id="password" ref={passwordref}/>
  <br />
  <button type='submit'>Submit</button>
  <br />

</form>
  )
}

export default App
