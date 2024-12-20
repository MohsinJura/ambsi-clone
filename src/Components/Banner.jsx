import React from 'react'

const Banner = ({title, imgPath}) => {
  return (
    <div className="relative w-full h-screen">
        <div className="absolute inset-0 -top-20 -z-10">
            <img src={imgPath} alt="Background pic" className="object-fill w-full h-full" />
        </div>

        <div className="absolute top-[30%] left-[30%] flex flex-col items-center text-white">
            <h2 className="text-3xl md:text-4xl font-semibold mb-6 lin w-[650px] text-center">{title}</h2>
            <button className="btn-secondary"> Let's Talk </button>
        </div>
    </div>
  )
}

export default Banner
