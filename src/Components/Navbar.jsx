import React, { useState } from 'react';
import { FaEnvelope, FaLinkedinIn, FaPhoneAlt } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa6';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [navMenu, setnavMenu] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const navigate = useNavigate();
  return (
    <nav className='w-full flex flex-col z-50'> {/* fixed top-0 left-0  */}

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

        <div className='flex items-center justify-between md:px-52 px-2 bg-white shadow'>
          <div className='py-6'>
            <img src='/logo.png' className=''/>
          </div>
          <div className="relative">
            <div className="hidden lg:flex gap-8">
              <div className="flex gap-4 text-black">
                <ul className="flex items-center gap-6">
                  <Link to={''} className="link">Home</Link>
                  
                  {/* Services Dropdown */}
                  <li
                    className="link relative cursor-pointer"
                    onMouseEnter={() => setIsServicesOpen(true)}
                    onMouseLeave={() => setIsServicesOpen(false)}
                  >
                    Services
                    {isServicesOpen && (
                      <ul className="absolute bg-black text-white w-64 z-50">
                        <li className="px-4 py-2.5 cursor-pointer text-[12px] font-extralight uppercase border-b">
                          Medical Billing Service
                        </li>
                        <li className="px-4 py-2.5 cursor-pointer text-[12px] font-extralight uppercase border-b">
                          Revenue Cycle Management
                        </li>
                        <li className="px-4 py-2.5 cursor-pointer text-[12px] font-extralight uppercase border-b">
                          Denial Management
                        </li>
                        <li className="px-4 py-2.5 cursor-pointer text-[12px] font-extralight uppercase border-b">
                          AR Services
                        </li>
                        <li className="px-4 py-2.5 cursor-pointer text-[12px] font-extralight uppercase border-b">
                          Coding Services
                        </li>
                        <li className="px-4 py-2.5 cursor-pointer text-[12px] font-extralight uppercase">
                          Patient Eligibility Verification
                        </li>
                      </ul>
                    )}
                  </li>

                  <Link to={'/'} className="link">Rcm solutions</Link>
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
            <div className="relative mt-[-37px] left-0 w-full bg-black">
              <ul className="flex flex-col">
                <Link to={'/'} className="nav-link">Home</Link>
                <Link className="nav-link">Services</Link>
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