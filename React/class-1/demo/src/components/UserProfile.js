import React from 'react'

const handleClick =()=>{
    console.log('Im clicked');
}

function UserProfile(props) {
    console.log(props);
    //destructing
    const {name,age,company}=props
  return (
    <div>
         {/* <h1> Name:{props.name} , age: {props.age}, company:{props.company}</h1> */}

         {/* destructured one */}
         <h1> Name:{name} , age: {age}, company:{company}</h1>
         <button onClick={handleClick}></button>
    </div>
  )
}

export default UserProfile