import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Footer';

const Body = () => {
    return (
        <>
            <Navbar />
            
            <Outlet />

            <Footer />
            
        </>
    )
};
export default Body;