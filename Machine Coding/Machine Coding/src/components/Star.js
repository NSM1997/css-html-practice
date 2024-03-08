import React from 'react'

export default function Star({count}){
    let limit = count || 5;
    return (
      <div>{
          [...new Array(limit).keys()].map((i)=>(
            <span key={i} className='star'></span>
          ))
        }
        </div>
    );
}