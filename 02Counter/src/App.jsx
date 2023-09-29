import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

 const [counter, setcounter] = useState(0)
  
  const increment = () =>  {
  if (counter < 20){
    setcounter(counter + 1);
  } else {
    alert("It can only addup to 20");
  }
};
  const decreament = () => {  
    if (counter > 0){
    setcounter(counter - 1);
  } else {
    alert("It can only got till 0");
  }};

  return (
    <>
      <h1>React counter</h1>
      <h2>Counter value: {counter}</h2>
      <button
      onClick={increment}
      >Add value</button>
      <br />
      <button
      onClick={decreament}>Remove value</button>
    </>
  )
}

export default App
