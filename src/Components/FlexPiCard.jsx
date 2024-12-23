import React from 'react'
import IntroContent from '../subComponents/IntroContent'

const FlexPiCard = ({title, imgurl}) => {
  return (
    <section>
      <div className='max-w-[72pc] mx-auto space-y-8'>

        <h2 className="text-2xl md:text-4xl font-bold text-center">{title}</h2>

        <div className='flex flex-col md:flex-row items-center justify-center px-12 space-y-6 md:space-y-0 md:space-x-12'>
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

