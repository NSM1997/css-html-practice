import React, { useRef, useState } from 'react'

const Reference = () => {
    const ref = useRef(3);
    const [state,setState] = useState(0)
    let a=10;
  return (
    <>
    <div>{ref.current}</div>
    <div>{a}</div>
    <button onClick={() =>{ 
        setState(8)
        a=100;
        ref.current=9
        }}> button</button>
    </>
  )
}

export default Reference