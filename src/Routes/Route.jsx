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
import Title from "../Title";

const Services = [
    { path: '/services/medical-billing', element: <Title title="Medical Billing - My Website"><Medical_Billing /></Title> },
    { path: '/services/revenue-cycle', element: <Title title="Revenue Cycle - My Website"><Revenue_Cycle /></Title> },
    { path: '/services/denial-management', element: <Title title="Denial Management - My Website"><Danial_Management /></Title> },
    { path: '/services/ar-services', element: <Title title="AR Services - My Website"><AR_Services /></Title> },
    { path: '/services/coding-services', element: <Title title="Coding Services - My Website"><Coding_Services /></Title> },
    { path: '/services/patient-verification', element: <Title title="Patient Verification - My Website"><Patient_Verification /></Title> },
];

const router = createBrowserRouter([
    {
        path: '/',
        element: <BodyLayout />,
        children: [
            { path: '/', element: <Title title="Home - My Website"><Home /></Title> },
            { path: '/about', element: <Title title="About Us - My Website"><AboutUs /></Title> },
            { path: '/contact', element: <Title title="Contact Us - My Website"><ContactUs /></Title> },
            ...Services,
            { path: '/rcm-solutions', element: <Title title="RCM Solutions - My Website"><RCMSolution /></Title> },
        ],
    },
]);

export default router;
