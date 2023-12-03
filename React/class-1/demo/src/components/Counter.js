import React, { useState } from 'react'

const Counter = () => {
    const [counter , setCounter]=useState(10);
    
    const handleIncrement =()=>{
        setCounter(counter+1);
    }
    const handleDecrement=()=>{
        setCounter(counter-1);
    }
  return (
    <div>
    <div>Counter: {counter}</div>
    <button onClick={handleIncrement}>Increment</button>
    <button onClick={handleDecrement}>Decrement</button>
    </div>
  )
}

export default Counter