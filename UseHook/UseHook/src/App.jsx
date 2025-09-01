import './App.css'
import { useState} from 'react';
function App() {
    let[counter,setcounter]=useState(0);

 let  addvalue=()=>{
if(counter<5)
  setcounter(counter+1);
  
 }

 let removevalue=()=>{
  if(counter>0){
  setcounter(counter-1);
 }
}

return(
  <>
  <p>count:{counter}</p>
  <button onClick={addvalue}id='btn'>+1</button>
  <button onClick={removevalue}id='btne'>-1</button>

  </>
)
}

export default App
