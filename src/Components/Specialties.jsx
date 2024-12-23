import React from 'react';

const specialties = [
  { name: "Cardiology", icon: '0.png' },
  { name: "Internal Medicine", icon: '1.png' },
  { name: "Pathology", icon: '2.png' },
  { name: "Psychiatry",icon: '3.png' },
  { name: "Dietitian", icon: '4.png' },
  { name: "Hematology",icon: '5.png' },
  { name: "Oncology", icon: '6.png' },
  { name: "Radiology", icon: '7.png' },
  { name: "Neurology", icon: '8.png' },
  { name: "Family Practice", icon: '9.png' },
  { name: "General Surgery", icon: '10.png' },
  { name: "Genetics", icon: '11.png' },
  { name: "Gasterology", icon: '12.png' },
  { name: "Orthopedics", icon: '13.png' },
  { name: "Dermatology", icon: '14.png' },
  { name: "Gynecology", icon: '15.png' },
];

const MedicalSpecialties = () => {
  return (
    <section className="w-full">
      <h2 className="text-center text-2xl font-bold mb-8">Medical Specialties</h2>
      <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-8 gap-4 md:gap-10 lg:gap-11 max-w-[75%] mx-auto">
        {specialties.map((specialty, index) => (
          <div key={index} className= "flex flex-col items-center justify-center mx-auto">
            <img src={specialty.icon} alt='icoons' className='h-24 w-28'/>
            <p className="font-semibold mt-2 text-center">{specialty.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MedicalSpecialties;
