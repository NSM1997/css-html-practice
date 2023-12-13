import React, { useContext } from 'react'
import { Context } from './Context'
import ChildrenContext from './ChildrenContext'

const ParentsContext = () => {
    const familyDetails = useContext(Context)
  return (
    <div className='parent'>
        <h2>ParentsContext</h2>
        <p>{familyDetails.name}</p>
        <p>{familyDetails.funcForParent()}</p>
        <ChildrenContext />
        </div>
  )
}

export default ParentsContext