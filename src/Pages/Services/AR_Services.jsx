import React from 'react'
import Banner from '../../Components/Banner'
import Brands from '../../Components/Brands'
import FlexPiCard from '../../Components/Reuseable/FlexPiCard'
import Content1 from '../../Components/Subcomponents/Content1'
import Flex_Pic_Btn from '../../Components/Reuseable/Flex_Pic_Btn'
import BulletContent from '../../Components/Subcomponents/BulletContent'

const AR_Services = () => {
  return (
    <div>
      <Banner title={'AR Services'} imgPath={'/services/s-ar-bg.png'} />
      <FlexPiCard title={'AR Management Services'} imgurl={'/services/s-ar1.png'} desc={<Content1 />} />
      <Flex_Pic_Btn title={'Expert AR Management team'} imgurl={'/services/s-ar2.png'} desc={<Content1 />} btnText={"Get Started"} />
      <FlexPiCard title={'Why Choose us'} imgurl={'/services/s-ar3.png'} desc={<BulletContent />} imgClass={"w-[33pc] h-52"} />

      <Brands BTn={true}/>
    </div>
  )
}

export default AR_Services
