import React from 'react'
import Banner from '../Components/Banner'
import FlexPiCard from '../Components/Reuseable/FlexPiCard'
import Flex_Pic_Btn from '../Components/Reuseable/Flex_Pic_Btn'
import BulletContent from '../Components/Subcomponents/BulletContent'
import Content1 from '../Components/Subcomponents/Content1'
import MedicalSpecialties from '../Components/Specialties'
import Brands from '../Components/Brands'

const RCMSolution = () => {
  return (
    <section>
        <div className='space-y-12 bg-back'>
            <Banner title={'RCM SOLUTIONS'} imgPath={'/services/s-mb-bg.png'} />
            <FlexPiCard title={'Top Medical Billing Company in United States'} imgurl={'/services/s-mb1.png'} desc={<Content1 />} />
            <Flex_Pic_Btn title={'Our Medical Billing Service offers you'} imgurl={'/services/s-mb2.png'} btnText={'Get Started'}
                desc={<BulletContent />} imgClass={'w-96 flex justify-end'}  />
            <MedicalSpecialties />
            <Brands />    
        </div>
    </section>
  )
}

export default RCMSolution
