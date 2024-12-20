import React from 'react'

const Banner = ({title, imgPath}) => {
  return (
    <section className="relative">
        <div className="">
            <img src={imgPath} alt="Background pic" className="object-cover h-[34pc] w-full" />
        </div>

        <div className="absolute top-[30%] left-[30%] flex flex-col items-center text-white">
            <h2 className="text-3xl md:text-4xl font-semibold mb-6 w-[650px] text-center">{title}</h2>
            <button className="btn-secondary uppercase"> Let's Talk </button>
        </div>
    </section>
  )
}

export default Banner
