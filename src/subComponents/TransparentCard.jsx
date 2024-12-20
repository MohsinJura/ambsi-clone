import React from 'react';

const TransparentCard = ({imgg, title, description}) => {
  return (
    <section>
      <div className='space-y-6 text-center pt-4'>

        <div className='flex justify-center rounded'>
          <img src={imgg} />
        </div>

        <div>
          <h2 className='font-bold'>{title}</h2>  
        </div>

        <div className='w-2/3 md:w-full mx-auto'>
          <p className='text-xs text-gray-600'>{description}</p>
        </div>

        <div>
          <span className='text-sm underline tracking-tight'>Learn More</span>
        </div>

      </div>
    </section>
  )
}

export default TransparentCard;
