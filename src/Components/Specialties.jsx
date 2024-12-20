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
  { name: "Gastroenterology", icon: '12.png' },
  { name: "Orthopedics", icon: '13.png' },
  { name: "Dermatology", icon: '14.png' },
  { name: "Gynecology", icon: '15.png' },
];

const MedicalSpecialties = () => {
  return (
    <div className="bg-gray-100 py-10">
      <h2 className="text-center text-2xl font-bold mb-8">Medical Specialties</h2>
      <div className="grid grid-cols-8 gap-12 max-w-4xl mx-auto">
        {specialties.map((specialty, index) => (
          <div key={index} className= "flex flex-col items-center justify-center mx-auto">
            <img src={specialty.icon} alt='icons' className='w-40 h-32' />
            <p className="font-semibold mt-2 text-center">{specialty.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MedicalSpecialties;
