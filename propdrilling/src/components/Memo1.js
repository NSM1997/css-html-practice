import React, { useState } from 'react'
import Memo2 from './Memo2';

const Memo1 = () => {
    const [fact, setFact] = useState(1);
    const [checkEven , setCheckEven]= useState(1)
  return (
    <div>
        <input type='number' onChange={e=>setFact(e.target.value)}></input>
        <input type='number' onChange={e=>setCheckEven(e.target.value)}></input>
        <Memo2 fact={fact} checkEven={checkEven}/>
        </div>
  )
}

export default Memo1