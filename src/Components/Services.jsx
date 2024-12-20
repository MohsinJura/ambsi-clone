import React from 'react'
import TransparentCard from '../subComponents/TransparentCard'

const Services = () => {
  return (
    <section className='bg-back pb-8 pt-20'>
        <div className='space-y-14'>

            <div className='text-center font-bold text-2xl'>
                <h1>Revenue Cycle Management Service</h1>
            </div>

            <div className='space-y-10'>
                <div className='flex justify-between gap-8 px-52'>
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

                <div className='text-center'>
                    <button className='btn-primary'>View All Services</button>
                </div>

            </div>
        
        </div>
    </section>
  )
}

export default Services
