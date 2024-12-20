import React from 'react'
import TransparentCard from '../subComponents/TransparentCard'

const Services = () => {
  return (
    <section className='bg-back py-8'>
        <div className='space-y-10 text-center'>

            <h1 className='font-bold text-4xl'>Revenue Cycle Management Service</h1>

            <div className='space-y-8 max-w-[95%] md:max-w-[85%] lg:max-w-[75%] mx-auto'>
                <div className='grid grid-cols-1 md:grid-cols-3 lg:gap-10 !gap-4 px-4 md:px-12'>
                    <TransparentCard 
                        imgg={"service1.png"}
                        title={"End-End RCM Services"}
                        description={"RCM services for all healthcare organizations & practices to generate a successful revenue stream"}
                    />
                    <TransparentCard 
                        imgg={"service3.png"}
                        title={"Medical Billing Services"}
                        description={"Highly trained medical billing staff that can remotely handle specialty billing with remarkable efficiency"}
                    />
                    <TransparentCard 
                        imgg={"service1.png"}
                        title={"AR Services"}
                        description={"Assess your account receivable status and determine rejected claims, unpaid claims and low payments."}
                    />
                </div>

                <button className='btn-primary'>View All Services</button>
            </div>
        
        </div>
    </section>
  )
}

export default Services
