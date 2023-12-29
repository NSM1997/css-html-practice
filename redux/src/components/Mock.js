import React from 'react'
import { useState } from 'react';

const Mock = () => {
    const [text, setText] = useState('');

    async function handleEvent(event){
         setText(event.current.value);
         if(text !== ''){
            const response = await fetch(`https://demo.dataverse.org/api/search?q=${text}`)
         }
         const data= await response.json();
    }
  return (
    <div>
        <input type='text' placeholder='Enter text' onChange={handleEvent}/>
    </div>
  )
}

export default Mock
