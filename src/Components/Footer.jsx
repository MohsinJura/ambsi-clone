import React from 'react';
import { FaLinkedinIn, FaTwitter } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="bg-darkblue text-Bwhite">
        <div className='w-full shadow-lg pt-12'>
            <div className="w-[75%] mx-auto flex md:flex-row flex-col py-12">
                {/* Logo and Description */}
                <div className="text-center md:text-left md:min-w-[40%]">
                <img src="/logo.png" alt="Ambsi Logo" className="mx-auto md:mx-0 w-32 mb-4" />
                <p className="text-small">
                    Ambsi is recognized as the best medical billing & RCM services in
                    United States. AMBSI provides the most comprehensive technical
                    solutions for healthcare organizations of all sizes across the
                    country.
                </p>
                <div className="flex justify-center md:justify-start mt-4 space-x-1.5">
                    <a href="#" className="bg-gray-300 rounded-full w-6 h-6 flex items-center justify-center">
                    <FaTwitter size={12} className='text-black' />
                    </a>
                    <a href="#" className="bg-gray-300 rounded-full w-6 h-6 flex items-center justify-center">
                        <FaLinkedinIn size={13} className='text-black' />
                    </a>
                </div>
                </div>

                {/* Links Section */}
                <div className="text-center md:text-left md:ml-12 md:min-w-[20%]">
                <ul className="space-y-4 text-sm font-sog">
                    <li>RCM for Hospitals</li>
                    <li>RCM for Medical Group</li>
                    <li>RCM for Individual Practices</li>
                    <li>AR Services</li>
                    <li>Coding Support</li>
                    <li>Medical Billing</li>
                </ul>
                </div>
                <div className="text-center md:text-left md:ml-24 w-full md:min-w-[20%]">
                <ul className="space-y-4 text-sm font-sog">
                    <li>Credentialing</li>
                    <li>Denial Management</li>
                    <li>Patient Eligibility</li>
                    <li>End-End RCM</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                </ul>
                </div>
            </div>
        </div>

      {/* Bottom Section */}
      <div className="flex items-center justify-between px-32 h-12 font-sog text-small">
        <p>© Ambsi 2022 - All Rights Reserved.</p>
        <p className="mt-2">
          <a href="#" className="hover:underline"> Privacy Policy </a> |{' '}
          <a href="#" className="hover:underline"> Terms & Conditions </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
