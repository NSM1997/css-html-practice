import React, { useState } from 'react'

const Form = () => {

  const [firstName, setFirstName]= useState('');
  const [lastName , setLastName] = useState('')

  const handleFirstName = (e) =>{
    setFirstName(e.target.value)
  }
  const handleLastName = (e) =>{
    setLastName(e.target.value)
  }
  const handleSubmit = (event) =>{
    // event.preventDefault()
    console.log( 'My Name is '+ firstName + lastName)
    setFirstName('');
    setLastName('');
    
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
      <input type='text' placeholder='Enter your FirstName' onChange={handleFirstName}></input>
      <input type='text' placeholder='Enter your LirstName' onChange={handleLastName}></input>
      <button >Submit</button>
      </form>
    </div>
  )
}

export default Form