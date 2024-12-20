import { createBrowserRouter } from "react-router-dom";
import '../index.css';
import BodyLayout from "../Layout/Body";
import Home from "../Pages/Home";

const router = createBrowserRouter ([
    {
        path: '/',
        element: <BodyLayout />,

        children: [
            {
                path: '/', element: <Home />,
            },
        ]
    }
]);
export default router;