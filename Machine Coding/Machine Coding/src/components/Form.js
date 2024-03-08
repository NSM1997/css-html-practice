import React, { useEffect, useState } from 'react'

const Form = () => {

    const initialValues= {
        username : "",
        age :"",
        email:"",
        password:""
    }
    const [formValues, setFormValues]= useState(initialValues);
    const [formErrors,setFormErrors]=useState({});

    const handleChange =(e)=>{
      const {name,value}= e.target;
      setFormValues({...formValues,[name]:value})
    }
    const handleSubmit =(e) =>{
        e.preventDefault();
        setFormErrors(validate(formValues));
    };
    const validate =(values)=>{
        const errors={};
        const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if(!values.username){
            errors.username="Username is required";
        }
        if(!values.email){
            errors.email="Email is required";
        }
        if(!values.age){
            errors.age="Age is required";
        }
        if(!values.password){
            errors.password="Password is required";
        }
        return errors;
    }
  return (
    <div className='container'>
        <h1>User Details</h1>
        <pre>{JSON.stringify(formValues,undefined,2)}</pre>
        <div>
        <form className='form' onSubmit={handleSubmit}>
           <label  className='labelBox'>UserName</label>
           <input type='text' name='username'  placeholder='Enter your First Name' className='inputBox' value={formValues.username} onChange={handleChange}></input>
           <p>{formErrors.username}</p>

           <label className='labelBox'>Age</label>
           <input type='number' name='age' placeholder='Enter your age' className='inputBox' value={formValues.age} onChange={handleChange}></input>
           <p>{formErrors.age}</p>

           <label className='labelBox'>Email</label>
           <input type='email' name='email' placeholder='Enter your email' className='inputBox' value={formValues.email}onChange={handleChange}></input>
           <p>{formErrors.email}</p>

           <label className='labelBox'>Password</label>
           <input type='password' name='password' placeholder='Enter your Password' className='inputBox' value={formValues.password} onChange={handleChange}></input>
           <p>{formErrors.password}</p>

           <button type='submit' className='btn'>Submit</button>
        </form>
        </div>
    </div>
  )
}

export default Form