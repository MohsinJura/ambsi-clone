import { createBrowserRouter } from "react-router-dom";
import '../index.css';
import BodyLayout from "../Layout/Body";
import AboutUs from "../Pages/AboutUs";
import ContactUs from "../Pages/ContactUs";
import Home from "../Pages/Home";
import AR_Services from "../Pages/Services/AR_Services";
import Coding_Services from "../Pages/Services/Coding_Services";
import Danial_Management from "../Pages/Services/Danial_Management";
import Medical_Billing from "../Pages/Services/Medical_Billing";
import Patient_Verification from "../Pages/Services/Patient_Verification";
import Revenue_Cycle from "../Pages/Services/Revenue_Cycle";
import RCMSolution from "../Pages/RCMSolution";

const Services = [
    {path: '/services/medical-billing', element: <Medical_Billing /> },
    {path: '/services/revenue-cycle', element: <Revenue_Cycle /> },
    {path: '/services/denial-management', element: <Danial_Management /> },
    {path: '/services/ar-services', element: <AR_Services /> },
    {path: '/services/coding-services', element: <Coding_Services /> },
    {path: '/services/patient-verification', element: <Patient_Verification /> },
];
const router = createBrowserRouter ([
    {
        path: '/',
        element: <BodyLayout />,

        children: [
            {
                path: '/', element: <Home />,
            },
            {
                path: '/about', element: <AboutUs />,
            },
            {
                path: '/contact', element: <ContactUs />
            },
            ...Services,
            {
                path: '/rcm-solutions', element: <RCMSolution />
            },
        ],
    },

]);
export default router;