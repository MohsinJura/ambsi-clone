import React from 'react';

const AboutUs = () => {
  return (
    <section>
      <div className='px-32 md:px-52 space-y-8 py-6'>

        <h2 className="text-2xl font-bold text-center">Learn more about us</h2>

        <div className='flex flex-col md:flex-row items-center justify-center py-3 space-y-6 md:space-y-0 md:space-x-14'>
            <div className="md:w-1/2">
                <p className="text-gray-700 leading-relaxed text-sm">
                Ambsi is recognized as a leading provider of Medical Billing & RCM
                Services in the United States. In today’s challenging healthcare
                environment, healthcare organizations need an innovative partner to
                help improve clinical workflows, increase revenue, modernize the
                patient experience, and reduce operating expenses. AMBSI provides the
                most comprehensive technical solutions for healthcare organizations
                of all sizes across the country, covering a wide range of
                professional fields. Ambsi is a leading provider of innovative health
                information systems and services that can transform the
                administrative and clinical operations of healthcare organizations of
                all sizes. Our award-winning solutions simplify decision-making,
                simplify operations, and ensure compliance with industry standards
                and best practices; in the end, you can save time and effort to
                maximize value and profit.
                </p>
            </div>

            <div className="md:w-1/2">
                <img
                src="/about-us.png"
                alt="Healthcare Services"
                />
            </div>
        </div>

      </div>
    </section>
  );
};

export default AboutUs;
