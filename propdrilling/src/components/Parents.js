import React from 'react'
import Children from './Children'

const parents = (familyDetails) => {
  return (
    <div className='parent'>
        <h2>Parents</h2>
        <Children />
    </div>
  )
}

export default parents