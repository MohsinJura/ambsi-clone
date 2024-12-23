import React from 'react'

const Flex_Pic_Btn = ({title, desc, imgurl, btnText, imgClass, bgColor }) => {
  return (
    <section className={`  ${bgColor}`}>
      <div className='max-w-[72pc] mx-auto text-center space-y-12 py-6'>

        <h2 className="text-2xl md:text-4xl font-bold">{title}</h2>

        <div className='w-full flex flex-col md:flex-row items-center justify-between px-12 space-y-6 md:space-y-0 md:space-x-12'>
            <div className='w-full md:w-1/2 text-left '>
                {desc}
            </div>
            <div className={`w-full md:w-1/2 ${imgClass}`}>
                <img src={imgurl} alt="Healthcare Services" className={ `${imgClass}`} />
            </div>
        </div>

        <button className='btn-secondary'>{btnText}</button>

      </div>
    </section>
  )
}

export default Flex_Pic_Btn
