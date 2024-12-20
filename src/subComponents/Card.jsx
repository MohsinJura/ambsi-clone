import React from 'react';

const Card = ({icon, title, description}) => {
  return (
    <div className='w-1/3 space-y-6 text-center px-2 py-6 rounded-xl bg-white'>

      <div className='space-y-3 '>

        <div className='flex justify-center '> {icon} </div>

        <div>  <h2 className='font-bold'>{title}</h2>  </div>

      </div>

      <div>
        <p className='text-sm text-gray-500'>{description}</p>
      </div>

      <div className='pt-3'>
        <span className='text-amber-700 tracking-tight'>Learn More</span>
      </div>

    </div>
  )
}

export default Card;
