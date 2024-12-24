import React, { useState } from 'react';
import { FaEnvelope, FaLinkedinIn, FaPhoneAlt } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa6';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [navMenu, setnavMenu] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const navigate = useNavigate();
  return (
    <nav className='fixed top-0 left-0 w-full flex flex-col z-50 shadow'> {/* fixed top-0 left-0  */}

        <div className='bg-[#233a6f] flex justify-between items-center md:px-52 px-2 text-white md:py-1 py-2'>
          <div className='flex items-center gap-1'>
            <FaPhoneAlt size={13} color="white" />
            <span className='text-small'>Toll Free: (800) 996-0076 </span>
          </div>
          <div className='flex py-2 gap-6'>
            <div className='flex items-center gap-1'>
              <FaEnvelope size={13} color='white' className='mt-1'/>
              <span className='text-small'>info@ambsi.com</span>
            </div>
            <div className='flex flex-col md:flex-row items-center md:gap-1 '>
              <div className='w-6 h-6 bg-white rounded-full flex items-center justify-center'><FaTwitter size={14} color='black' /></div>
              <div className='w-6 h-6 bg-white rounded-full flex items-center justify-center'><FaLinkedinIn size={14} color='black' /></div>
            </div>
          </div>
        </div>

        <div className='bg-Bwhite flex justify-between items-center md:px-52 px-4'>
          <div className='flex items-center min-h-20'>
            <img src='/logo.png' className='min-h-12 min-w-20'/>
          </div>
          <div className="relative">
            <div className="hidden lg:flex gap-8">
              <div className="flex gap-4 text-black">
                <ul className="min-w-max flex items-center gap-4">
                  <Link to={'/'} className="link">Home</Link>
                  
                  {/* Services Dropdown */}
                  <li
                    className="link relative cursor-pointer"
                    onMouseEnter={() => setIsServicesOpen(true)}
                    onMouseLeave={() => setIsServicesOpen(false)}
                  >
                    Services
                    {isServicesOpen && (
                      <div className="absolute bg-black text-white w-64 z-50 ">
                        <Link to={'/services/medical-billing'} className="droplink border-b">
                          Medical Billing Service
                        </Link>
                        <Link to={'/services/revenue-cycle'} className="droplink border-b">
                          Revenue Cycle Management
                        </Link>
                        <Link to={'/services/denial-management'} className="droplink border-b">
                          Denial Management
                        </Link>
                        <Link to={'/services/ar-services'} className="droplink border-b">
                          AR Services
                        </Link>
                        <Link to={'/services/coding-services'} className="droplink border-b">
                          Coding Services
                        </Link>
                        <Link to={'/services/patient-verification'} className="droplink">
                          Patient Eligibility Verification
                        </Link>
                      </div>
                    )}
                  </li>

                  <Link to={'/rcm-solutions'} className="link">Rcm solutions</Link>
                  <Link to={'/about'} className="link">About us</Link>
                  <Link to={'#'} className="link">Blog</Link>
                </ul>
              </div>
              <div>
                <button onClick={() => navigate('/contact')} className="btn-small">Contact Us</button>
              </div>
            </div>

            <div className="flex lg:hidden">
              <button className="text-2xl pr-20 font-bold"
              onClick={()=>setnavMenu(!navMenu)} > ☰ </button>
            </div>

          </div>

        </div>

      {navMenu &&
            <div className="left-0 w-full bg-black">
              <ul className="flex flex-col">
                <Link to={'/'} className="nav-link">Home</Link>
                <li
                    className="nav-link"
                    onClick={()=> setIsServicesOpen(!isServicesOpen)}
                  >
                    Services
                    {isServicesOpen && (
                      <div className="pt-2">
                        <Link to={'/services/medical-billing'} className="droplink border-b">
                          Medical Billing Service
                        </Link>
                        <Link to={'/services/revenue-cycle'} className="droplink border-b">
                          Revenue Cycle Management
                        </Link>
                        <Link to={'/services/denial-management'} className="droplink border-b">
                          Denial Management
                        </Link>
                        <Link to={'/services/ar-services'} className="droplink border-b">
                          AR Services
                        </Link>
                        <Link to={'/services/coding-services'} className="droplink border-b">
                          Coding Services
                        </Link>
                        <Link to={'/services/patient-verification'} className="droplink">
                          Patient Eligibility Verification
                        </Link>
                      </div>
                    )}
                  </li>
                <Link className="nav-link">Rcm solutions</Link>
                <Link to={'/about'} className="nav-link">About us</Link>
                <Link to={"#"} className="nav-link !border-none">Blog</Link>
              </ul>
            </div>
          }
    </nav>
  )
};
export default Navbar;