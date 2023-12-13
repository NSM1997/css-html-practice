import React from 'react'

const Pagination = (props) => {
    const {pageNumberProp,onNext, onPrevious} =props

    
  return (
    <div className='flex justify-center'>
        <div onClick={onPrevious} className='border-2 p-2 m-4'>
           Previous
        </div>
        <div className='border-2 p-2 m-4'>
            {pageNumberProp}
        </div>
        <div onClick={onNext} className='border-2 p-2 m-4'>
            Next
        </div>
    </div>
  )
}

export default Pagination