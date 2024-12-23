import React from 'react';
import Banner from '../Components/Banner';
import Brands from '../Components/Brands';
import CardSection from '../Components/CardSection';
import FlexPiCard from '../Components/FlexPiCard';
import Services from '../Components/Services';
import Specialties from '../Components/Specialties';
import Testimonial from '../Components/Testimonial';

const Home = () => {
  return (
    <section className='bg-back'>
      <div className='flex flex-col items-center space-y-12'>

        <Banner title={'MEDICAL BILLING & RCM SERVICES IN UNITED STATES'} imgPath={'/bg.png'} />
        
        <div className='h-[54pc] md:h-64 relative flex w-full justify-center max-w-[72pc] mx-auto'>
            <div className='absolute -top-20 md:-top-28'>
                <CardSection />
            </div>
        </div>

        <Services />

        <Brands />

        <FlexPiCard title={'Learn more about us'} imgurl={'about-us.png'}/>

        <Specialties />

        <Testimonial />

      </div>
    </section>
  )
};
export default Home;