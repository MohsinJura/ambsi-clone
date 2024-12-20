import React from 'react'
import IntroContent from '../subComponents/IntroContent'

const FlexPiCard = ({title, imgurl}) => {
  return (
    <section className='bg-back'>
      <div className='px-32 md:px-52 space-y-8 pb-6 pt-12'>

        <h2 className="text-4xl font-bold text-center">{title}</h2>

        <div className='flex flex-col md:flex-row items-center justify-center py-3 space-y-6 md:space-y-0 md:space-x-14'>
            <div className='w-full md:w-1/2'>
                <IntroContent />
            </div>
            <div className="w-full md:w-1/2">
                <img src={imgurl} alt="Healthcare Services" className='object-contain' />
            </div>
        </div>

      </div>
    </section>
  )
}
export default FlexPiCard;

