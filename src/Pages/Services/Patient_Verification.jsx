import React from 'react'
import Brands from '../../Components/Brands'
import Banner from '../../Components/Banner'
import FlexPiCard from '../../Components/Reuseable/FlexPiCard'
import Content1 from '../../Components/Subcomponents/Content1'
import Flex_Pic_Btn from '../../Components/Reuseable/Flex_Pic_Btn'
import BulletContent from '../../Components/Subcomponents/BulletContent'

const Patient_Verification = () => {
  return (
    <div className='bg-back'>
      <Banner title={'Eligibility Verification'} imgPath={'/services/s-cs-bg.png'} />
      <FlexPiCard title={'Patient Eligibility Verification Services'} imgurl={'/services/s-pv1.png'} desc={<Content1/>} />
      <Flex_Pic_Btn title={'Insurance Eligibility Verification Services'} btnText={'get Started'} desc={<BulletContent />}
      imgurl={'/services/s-pv2.png'} />
      <Brands BTn={true}/>
    </div>
  )
}

export default Patient_Verification
