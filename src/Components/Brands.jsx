import React from 'react'

const Brands = ({BTn}) => {
    const logos = [
        { name: 'AdvancedMD', img: '/brands/p1.png' },
        { name: 'Kareo', img: '/brands/p2.png' },
        { name: 'NextGen', img: '/brands/p3.png' },
        { name: 'AmazingCharts', img: '/brands/p4.png' },
        { name: 'eMDs', img: '/brands/p5.png' },
        { name: 'Allscripts', img: '/brands/p6.png' },
        { name: 'eClinicalWorks', img: '/brands/p7.png' },
        { name: 'PracticeFusion', img: '/brands/p8.png' },
        { name: 'GreenwayHealth', img: '/brands/p9.png' },
        { name: 'WebDMEMR', img: '/brands/p10.png' },
      ];
      
  return (
    <section className='text-center py-6 md:pt-12 bg-white'>
        <div className="flex flex-col justify-between px-2 sm:px-12 md:px-20 lg:px-48 gap-6 md:gap-10 lg:gap-12">

            <h2 className="text-2xl md:text-4xl font-bold">EHRs we work with</h2>
            <p className="text-small  px-8">
                We are experts in the most popular electronic medical records and practice management systems. The following is a list of examples of system management practices we use electronic medical records. If you don’t see your software here, please contact us for a complete list.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 justify-items-center">
                {logos.map((logo, index) => (
                <div key={index}>
                    <img src={logo.img} alt={logo.name} />
                </div>
                ))}
            </div>
            <div className={`${BTn ? 'hidden' : ''}`}>
                <button className="btn-primary">Show More</button>
            </div>

        </div>
    </section>
  )
}

export default Brands
