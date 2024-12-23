import React from 'react';
import Card from './Reuseable/Card';

const CardSection = () => {
    
  return (
    <section>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6 px-6'>
      
        <Card 
          icon = {<img src='icon1.png' size={60} color='indigo' />}
          title = "RCM for Hospitals"
          description = "We collaborate with hospitals to improve and speed up repayments, forestall dissents, capture income spillage, and work on the patient experience."
        />

        <Card 
          icon = {<img src='icon2.png' size={60} color='indigo' />}
          title = "RCM for Medical Group Practices"
          description = "Fast Payments, more revenue & more financial stability with AMBSI RCM services. We ensure better results through procedures prescribed by Access Healthcare"
        />
        
        <Card 
          icon = {<img src='icon3.png' size={60} color='indigo' />}
          title = "RCM for Independent Practices"
          description = "We work with the medical groups to improve & accelerate reimbursement, prevent disagreements, capture revenue overflow, & improve experience."
        />
      
      </div>
    </section>
  )
}

export default CardSection
