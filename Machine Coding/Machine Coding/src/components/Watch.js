import React, { useEffect, useState } from 'react'

const Watch = () => {
    const [minutes, setMinutes]= useState(0);
    const [seconds, setSeconds]= useState(0);

    let timer;
   useEffect(()=>{
     timer = setInterval(()=>{
        handleStart();
    },1000)
    return ()=>clearInterval(timer);
   })

    const handleStart=()=>{
        if(seconds==59){
            setMinutes(minutes+1)
            setSeconds(0);
        }else{
            setSeconds(seconds+1);
            
        }
    }
    const handleStop=()=>{
        clearInterval(timer);
    }
    const handleReset=()=>{
       setMinutes(0);
       setSeconds(0);
    }
  return (
    <div>
        <p>{minutes<10?"0"+minutes:minutes}:{seconds<10?"0"+seconds:seconds}</p>
        <button onClick={handleStart}>Start</button>
        <button onClick={handleStop}>Stop</button>
        <button onClick={handleReset}>Reset</button>
    </div>
  )
}

export default Watch