import React from 'react'
import ParentsContext from './ParentsContext'

const FamilyContext = () => {
    const familyDetails = {
        "name" : "Family Name",
        funcForParent:() =>{
            return "This is function for parent"
        },
        funcForGrandChildren : () =>{
            return "This is a function for grand children"
        }
    }
  return (
    <div className='family'>
      <ParentsContext />
        </div>
  )
}

export default FamilyContext