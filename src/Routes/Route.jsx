import { createBrowserRouter } from "react-router-dom";
import '../index.css';
import BodyLayout from "../Layout/Body";
import Home from "../Pages/Home";
import AboutUs from "../Pages/AboutUs";
import Blog from "../Pages/ContactUs";
import ContactUs from "../Pages/ContactUs";

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
            {
                path: '/'
            }
        ]
    }
]);
export default router;