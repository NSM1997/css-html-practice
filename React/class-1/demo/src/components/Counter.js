import React, { useEffect, useState } from 'react'

const Counter = () => {
  const [counter, setCounter]= useState(0)

  const handleDecrement=() =>{
    setCounter(counter-1);
  }
  const handleIncrement = () =>{
    setCounter(counter+1);  }

   useEffect(()=>{
    console.log(counter)
   },[])
  return (
    <div>
      <div>Counter:{counter}</div>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>decrement</button>
    </div>
  )
}

export default Counter