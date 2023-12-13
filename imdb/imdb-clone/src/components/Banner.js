import React from 'react'

const Banner = () => {
  return (
    <div 
      className='h-[20vh] lg:h-[65vh] bg-center bg-no-repeat flex items-end'
      style={{
        backgroundImage: `url(https://assets-in.bmscdn.com/discovery-catalog/events/et00311714-ewdhvajezf-landscape.jpg)`,
      }}
      >
      <div className='text-xl lg:text-3xl bg-gray-900 bg-opacity-40 text-white text-center p-2 w-full'>John Wick</div>
    </div>
  )
}

export default Banner