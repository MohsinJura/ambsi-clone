import React from 'react'
import Banner from '../Components/Banner'
import Brands from '../Components/Brands'
import FlexPiCard from '../Components/FlexPiCard'
import Mission from '../Components/Mission'
import Services from '../Components/Services'
import Specialties from '../Components/Specialties'

const AboutUs = () => {
  return (
    <section>

        <Banner title={'About AMBSI'} imgPath={'/bg-about.png'}  />

        <FlexPiCard title={'Helping Healthcare Organizations and Practitioners.'} imgurl={"about1.png"} />

        <Mission />

        <Services />

        <Specialties />

        <Brands />

    </section>
  )
}

export default AboutUs
