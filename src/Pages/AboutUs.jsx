import React from 'react'
import Banner from '../Components/Banner'
import Brands from '../Components/Brands'
import Mission from '../Components/Mission'
import FlexPiCard from '../Components/Reuseable/FlexPiCard'
import IntroContent from '../Components/Reuseable/IntroContent'
import Services from '../Components/Services'
import Specialties from '../Components/Specialties'

const AboutUs = () => {
  return (
    <section>

        <Banner title={'About AMBSI'} imgPath={'/bg-about.png'}  />

        <FlexPiCard title={'Helping Healthcare Organizations and Practitioners.'} imgurl={"about1.png"} desc={<IntroContent />}/>

        <Mission />

        <Services />

        <Specialties />

        <Brands />

    </section>
  )
}

export default AboutUs
