import React, { useState } from 'react'

const Multipleinputform = () => {
    const [formData, setformData]=useState({firstname:'',lastname:''})
    const handleInput=(e)=>{
        const {name ,value} =e.target;
        // setformData({...formData, [name]:value})
        const newformData={
            firstname:formData.firstname,
            lastname:formData.lastname
        }
        if(name === 'firstname'){
           newformData.firstname=value
        }else if(name === 'lastname'){
           newformData.lastname=value
        }
        setformData(newformData);
        console.log(name,value)
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log(formData)
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
        <h1>Form</h1>
        <input type='text' placeholder='Enter firstname' name='firstname' value={formData.firstname} onChange={handleInput}></input>
        <input type='text' placeholder='Enter lastname' name='lastname' value={formData.lastname} onChange={handleInput}></input>
        <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default Multipleinputform