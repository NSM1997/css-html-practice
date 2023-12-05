import React, { useState } from 'react'

const Form = () => {
    const [firstname, setfirstname] = useState('');
    const [lastname, setlastname] = useState('');
    const handleFirstname=(e)=>{
        setfirstname(e.target.value)
        // console.log(e);
    }
    const handleLastname=(e)=>{
        setlastname(e.target.value);
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
     console.log(firstname)
     console.log(lastname)
    }
   
  return (
    <div>
        <form onSubmit={handleSubmit}>
        <h1>Form</h1>
        <input type='text' placeholder='Enter firstname' value={firstname} onChange={handleFirstname}></input>
        <input type='text' placeholder='Enter lastname' value={lastname} onChange={handleLastname}></input>
        <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default Form