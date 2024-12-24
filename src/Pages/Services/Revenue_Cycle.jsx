import React from 'react'
import Banner from '../../Components/Banner'
import FlexPiCard from '../../Components/Reuseable/FlexPiCard'
import IntroContent from '../../Components/Reuseable/IntroContent'
import MedicalSpecialties from '../../Components/Specialties'
import Brands from '../../Components/Brands'

const Revenue_Cycle = () => {
  return (
    <div>
      <Banner title={'Revenue Cycle Management'} imgPath={'/services/s-cs-bg.png'} />
      <FlexPiCard title={'Patient Eligibility Verification Services'} imgurl={'/services/s-pv1.png'} desc={<IntroContent />} />
    
      <MedicalSpecialties />
      <Brands /> 
    </div>
  )
}

export default Revenue_Cycle
