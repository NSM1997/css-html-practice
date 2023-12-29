import React, {useState, useTransition } from 'react'

const Lazy = () => {

    const [text,setText]= useState('');
    const [list, setList] = useState('');
    const size = 1000;
    const [ isPending , startTransition] = useTransition()

    const handleEvent =(e) =>{
        setText(e.target.value)
        startTransition(()=>{
            let newList =[];
            for(var i=0;i<size;i++){
                newList.push(e.target.value)
            }
            setList(newList);
        })
        
    }
  return (
    <div>
        <input type='text' value={text} onChange={handleEvent} />
        {
            isPending ? <div>Loading</div> : list.map(text =>{
                return <h4>{text}</h4>
            })
        }
    </div>
  )
}

export default Lazy