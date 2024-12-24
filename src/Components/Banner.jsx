import React from 'react';
import { Link } from 'react-router-dom';

const Banner = ({ title, imgPath }) => {
  return (
    <section className="relative pt-40">
      {/* Background Image */}
      <div className="w-screen min-w-fit">
        <img
          src={imgPath}
          alt="Background pic"
          className="object-cover h-[20rem] md:h-[30rem] lg:h-[40rem] w-full"
        />
      </div>

      {/* Text and Button */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-4 sm:px-6 md:px-8">
      <h2 className="text-2xl md:text-4xl font-semibold mb-6 w-96 md:w-[650px] text-center">{title}</h2>
      <button className="btn-secondary uppercase">
        <Link to={'/contact'}>Let's Talk </Link> 
      </button>
      </div>
    </section>
  );
};

export default Banner;
