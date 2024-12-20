import React from 'react'
import CardSection from './CardSection'

const Mission = () => {
  return (
    <section className='bg-back'>
        <div className='space-y-8 py-8 px-4 text-center'>

            <div className='text-black space-y-11'>
                <h1 className='font-bold text-3xl tracking-tight'> Our Mission</h1>
                <p className='text-sm'>
                    Ambsi mission is to help healthcare organizations and individual professionals understand their income cycle more clearly, and to illuminate their way to improve their financial situation.
                </p>
            </div>

            <div className='flex justify-center'>
                <CardSection />
            </div>

            <div>
                <button className='btn-secondary'>Get Started</button>
            </div>

        </div>
    </section>
  )
}

export default Mission
