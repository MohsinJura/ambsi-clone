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
    <div className=''>

      <Banner title={'MEDICAL BILLING & RCM SERVICES IN UNITED STATES'} imgPath={'/bg.png'} />
      
      <div className='h-44 relative bg-back'>
          <div className='absolute -top-16 px-60'>
              <CardSection />
          </div>
      </div>

      <Services />

      <Brands />

      <FlexPiCard title={'Learn more about us'} imgurl={'about-us.png'}/>

      <Specialties />

      <Testimonial />

    </div>
  )
};
export default Home;