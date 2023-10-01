import { useState } from 'react'
import './App.css'

function App() {

    const [color, setcolor] = useState("orange")

  return (
    <>
      <div className='w-full h-screen'
      style = {{backgroundColor : color}}
      >
        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
          <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
            <button 
            onClick={() => setcolor('red')}
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
            style = {{backgroundColor : "red" }} 
            >Red</button>
            <button 
            onClick={() => setcolor('blue')}
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
            style = {{backgroundColor : "blue" }} 
            >Blue</button>
            <button 
            onClick={() => setcolor('black')}
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
            style = {{backgroundColor : "black" }} 
            >Black</button>
            <button 
            onClick={() => setcolor('white')}
            className='outline-none px-4 py-1 rounded-full text-black shadow-lg'
            style = {{backgroundColor : "white" }} 
            >White</button>
            <button 
            onClick={() => setcolor('purple')}
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
            style = {{backgroundColor : "purple" }} 
            >purple</button>
            <button 
            onClick={() => setcolor('Pink')}
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
            style = {{backgroundColor : "Pink" }} 
            >Pink</button>
            <button 
            onClick={() => setcolor('gray')}
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
            style = {{backgroundColor : "gray" }} 
            >Gray</button>
            <button 
            onClick={() => setcolor('indigo')}
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
            style = {{backgroundColor : "indigo" }} 
            >Indigo</button>
          </div>
        </div>



      </div>
    </>
  )
}

export default App
