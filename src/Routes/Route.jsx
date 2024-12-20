import { createBrowserRouter } from "react-router-dom";
import '../index.css';
import BodyLayout from "../Layout/Body";
import Home from "../Pages/Home";
import AboutUs from "../Pages/AboutUs";

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
                
            }
        ]
    }
]);
export default router;