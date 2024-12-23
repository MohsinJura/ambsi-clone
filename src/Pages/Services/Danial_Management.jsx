import React from 'react'
import Banner from '../../Components/Banner'
import Brands from '../../Components/Brands'
import Flex_Pic_Btn from '../../Components/Reuseable/Flex_Pic_Btn'
import FlexPiCard from '../../Components/Reuseable/FlexPiCard'
import DanialContent1 from '../../Components/Subcomponents/DanialContent1'
import DanialContent2 from '../../Components/Subcomponents/DanialContent2'
import BulletContent from '../../Components/Subcomponents/BulletContent'
import DanialContent3 from '../../Components/Subcomponents/DanialContent3'

const Danial_Management = () => {
  return (
    <div className='bg-back'>
        <Banner title={"Danial Management"} imgPath={'/services/s-dm-bg.png'} />
        
        <FlexPiCard title={'Denial Management Services'} imgurl={'/services/s-dm1.png'} desc={<DanialContent1 />} />
        
        <Flex_Pic_Btn title={'Ambsi Denial Management Service'} desc={<DanialContent2 />} 
        imgurl={'/services/s-dm2.png'} imgClass={'w-72 flex justify-center'} btnText={'Get Started'} />

        <FlexPiCard title={'Minimize Medical Billing Denials'} imgurl={'/services/s-dm3.png'}
         desc={<DanialContent3/>} bgColor={"bg-white"} imgClass={"w-[33pc] h-60"}/>

        <Brands />
      
    </div>
  )
}

export default Danial_Management
