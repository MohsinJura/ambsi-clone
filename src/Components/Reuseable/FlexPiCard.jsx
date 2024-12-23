import React from 'react';

const FlexPiCard = ({title, imgurl, desc, bgColor, imgClass}) => {
  return (
    <section className={` ${bgColor}`}>
      <div className='max-w-[72pc] mx-auto space-y-12 py-10 '>

        <h2 className="text-2xl md:text-4xl font-bold text-center">{title}</h2>

        <div className='flex flex-col md:flex-row justify-between gap-4 px-12 space-y-6 md:space-y-0 md:space-x-12'>
            <div className='w-full md:w-1/2'>
                {desc}
            </div>
            <div className="w-full md:w-1/2">
                <img src={imgurl} alt="Healthcare Services" className={`w-[28pc] h-72 ${imgClass} `}/>
            </div>
        </div>

      </div>
    </section>
  )
}
export default FlexPiCard;

