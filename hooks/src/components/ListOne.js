import React, { useState, useTransition } from 'react'

const ListOne = () => {
    const [input, setInput] = useState('');
    const [list, setList] = useState([]);
    const size = 1000000999;

    const[isPending, startTransition]= useTransition()

    const handleEvent =(e)=>{
       setInput(e.target.value)
       startTransition(()=>{
            let newList =[]
            for(var i=0;i<size;i++){
                newList.push(input)
            }
            setList(newList);
        })
    }

  return (
    <div>
        <input type='text' value={input} onChange={handleEvent} />
        {
            isPending? <div>Loading</div> : list.map((text)=>{
                return <h4>{text}</h4>
            })
        }
    </div>
  )
}

export default ListOne