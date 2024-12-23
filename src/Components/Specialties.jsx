import React from 'react';

const specialties = [
  { name: "Cardiology", icon: '/specialities/0.png' },
  { name: "Internal Medicine", icon: '/specialities/1.png' },
  { name: "Pathology", icon: '/specialities/2.png' },
  { name: "Psychiatry",icon: '/specialities/3.png' },
  { name: "Dietitian", icon: '/specialities/4.png' },
  { name: "Hematology",icon: '/specialities/5.png' },
  { name: "Oncology", icon: '/specialities/6.png' },
  { name: "Radiology", icon: '/specialities/7.png' },
  { name: "Neurology", icon: '/specialities/8.png' },
  { name: "Family Practice", icon: '/specialities/9.png' },
  { name: "General Surgery", icon: '/specialities/10.png' },
  { name: "Genetics", icon: '/specialities/11.png' },
  { name: "Gasterology", icon: '/specialities/12.png' },
  { name: "Orthopedics", icon: '/specialities/13.png' },
  { name: "Dermatology", icon: '/specialities/14.png' },
  { name: "Gynecology", icon: '/specialities/15.png' },
];

const MedicalSpecialties = ({bgColor}) => {
  return (
    <section className={`   ${bgColor}`}>
      <div className="w-full text-center py-6 md:py-10">
        <h2 className="text-2xl font-bold mb-8">Medical Specialties</h2>
        <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-8 gap-4 md:gap-10 lg:gap-11 max-w-[75%] mx-auto">
          {specialties.map((specialty, index) => (
            <div key={index} className= "flex flex-col items-center justify-center mx-auto">
              <img src={specialty.icon} alt='icoons' className='h-24 w-28'/>
              <p className="font-semibold mt-2">{specialty.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MedicalSpecialties;
