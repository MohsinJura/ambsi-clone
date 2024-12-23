import React from 'react'
import Banner from '../../Components/Banner'
import MedicalSpecialties from '../../Components/Specialties'
import Brands from '../../Components/Brands'
import FlexPiCard from '../../Components/Reuseable/FlexPiCard'
import Content1 from '../../Components/Subcomponents/Content1'
import Flex_Pic_Btn from '../../Components/Reuseable/Flex_Pic_Btn'
import BulletContent from '../../Components/Subcomponents/BulletContent'

const Coding_Services = () => {
  return (
    <div className='bg-back'>
      <Banner title={'Coding Services'} imgPath={'/services/s-cs-bg.png'} />
      <FlexPiCard title={'Medical Coding Services'} imgurl={'/services/s-cs1.png'} desc={<Content1 />} />
      <Flex_Pic_Btn title={'Complete Medical Coding services'} imgurl={'/services/s-cs2.png'}
       btnText={'Get Started'} desc={<BulletContent/>}  imgClass={'w-60 h-60 flex justify-center'} />
      <MedicalSpecialties bgColor={'bg-white'} />
      <Brands BTn={true}/>
    </div>
  )
}

export default Coding_Services
