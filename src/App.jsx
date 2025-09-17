import React, { useState } from 'react'

function App() {
  /*
  const [input, setInput] = useState('');
 
  const handleClick = (value) => {
    setInput(input + value);
  }

  const handleEqual = () => {
    try {
      setInput(eval(input));
    } catch  {
      setInput('Error');
    }} */

      const [input, setInput] = useState('');

      const handleChange = (e) => {   
        setInput(e.target.value);
      }
  return (
    <>
      <div className='w-full h-screen bg-red-900 flex justify-center items-center gap-2'>
        { /*<div>
          <input type="text" value={input}/>
        </div>
        <button onClick={() => handleClick('1')} className='bg-white p-4'>1</button>
        <button onClick={() => handleClick('2')} className='bg-white p-4'>2</button>
        <button onClick={() => handleClick('3')} className='bg-white p-4'>3</button>
        <button onClick={() => handleClick('4')} className='bg-white p-4'>4</button>
        <button onClick={() => handleClick('5')} className='bg-white p-4'>5</button>
        <button onClick={() => handleClick('6')} className='bg-white p-4'>6</button>
        <button onClick={() => handleClick('7')} className='bg-white p-4'>7</button>
        <button onClick={() => handleClick('8')} className='bg-white p-4'>8</button>
        <button onClick={() => handleClick('9')} className='bg-white p-4'>9</button>
        <button onClick={() => handleClick('+')} className='bg-white p-4'>+</button>
        <button onClick={() => handleClick('-')}className='bg-white p-4'>-</button>
        <button onClick={() => handleClick('*')} className='bg-white p-4'>x</button>
        <button onClick={() => handleClick('/')} className='bg-white p-4'>/</button>
        <button onClick={() => handleEqual('=')}className='bg-white p-4'>=</button> */}
        <input type="text" value={input} placeholder='Type Here..' onChange={handleChange}/>
        <p>Sample: {input} </p>
        <p>First Two letter: {input.slice(0,3)}</p>

      </div>
    </>
  )
}

export default App;
