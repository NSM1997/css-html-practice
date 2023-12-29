import axios from 'axios';
import React, { useEffect, useState } from 'react'


const Input = () => {
    const [text , setText]=useState('');
    const [apiData, setAPIData]= useState('');

    const handleChange = (e) =>{
         setText(e.target.value);
         fetchApi({text})
    }
    const fetchApi = async ()=>{
       const response = await axios.get(`https://demo.dataverse.org/api/search?q=${text}`);
       setAPIData(response.data)
    }

    useEffect(()=>{
        fetchApi();
    },[])
  return (
    <div>
        <input type='text' onChange={handleChange}></input>
        {/* <div>{apiData}</div> */}
        
    </div>
  )
}

export default Input