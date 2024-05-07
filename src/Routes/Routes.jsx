import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Checkout from "../Pages/Checkout/Checkout";
import MyBooking from "../Pages/Bookings/MyBooking";
import Private from "./Private/Private";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/login",
                element: <Login></Login>,
            },
            {
                path: "/signup",
                element: <SignUp></SignUp>,
            },
            {
                path: "/booking",
                element: <Private><MyBooking></MyBooking></Private>,
            },
            {
                path: "/checkout/:id",
                loader:({params})=>fetch(`http://localhost:3000/services/${params.id}`),
                element: <Checkout></Checkout>,
            },
        ],
    },
]);

export default router;