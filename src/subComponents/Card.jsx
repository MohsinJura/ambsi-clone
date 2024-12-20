import React from 'react';

const Card = ({icon, title, description}) => {
  return (
    <section className=' rounded-3xl bg-white'>
      <div className='space-y-6 text-center px-4 py-6 '>

        <div className='flex justify-center '> {icon} </div>

        <h2 className='font-bold'>{title}</h2>

        <p className='text-small'>{description}</p>

        <p className='mt-3 text-amber-700 text-small'>Learn More</p>

      </div>
    </section>
  )
}

export default Card;
