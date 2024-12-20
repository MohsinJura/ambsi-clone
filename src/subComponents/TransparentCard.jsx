import React from 'react';

const TransparentCard = ({imgg, title, description}) => {
  return (
    <div className='w-1/3 space-y-6 text-center'>

      <div className='space-y-6 '>

        <div className='flex justify-center rounded'> <img src={imgg} />  </div>

        <div>  <h2 className='font-bold'>{title}</h2>  </div>

      </div>
    
      <div className='space-y-8'>
        <div>
            <p className='text-xs text-gray-600'>{description}</p>
        </div>

        <div>
            <span className='text-sm underline tracking-tight'>Learn More</span>
        </div>
      </div>

    </div>
  )
}

export default TransparentCard;
