import React from 'react';
import Banner from '../Components/Banner';
import CardSection from '../Components/CardSection';
import WorkSection from '../Components/WorkSection';
import Services from '../Components/Services';
import AboutUs from '../Components/AboutUs';
import Testimonial from '../Components/Testimonial';
import MedicalSpecialties from '../Components/Specialties';

const Home = () => {
  return (
    <div className=''>
      <Banner 
        title={'MEDICAL BILLING & RCM SERVICES IN UNITED STATES'}
        imgPath={'/bg.png'} 
        />

      <CardSection />

      <Services />

      <WorkSection />

      <AboutUs />

      <MedicalSpecialties />

      <Testimonial />


    </div>
  )
};
export default Home;