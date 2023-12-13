import React, { useContext } from 'react'
import { Context } from './Context'

const GrandSonContext = () => {
    const familyDetails = useContext(Context)
  return (
    <div className='gson'>
       <h2>GrandSonContext</h2>
       <p>{familyDetails.funcForGrandChildren()}</p>
    </div>
  )
}

export default GrandSonContext