import React, { useEffect } from 'react'
import { useState } from 'react';
import axios from 'axios';

const Mock = () => {
    const [text, setText] = useState('');
    const [out, setOut] = useState('');

     useEffect(()=>{
      const ans = axios.get(`https://demo.dataverse.org/api/search?q=${text}`).
      then((response) => setOut(response))
     },[text])

  return (
    <div>
        <input type='text' placeholder='Enter text' onChange={(e)=>setText(e.target.value)}/>
        <h1 value={out}></h1>
    </div>
  )
}

export default Mock
