import { createBrowserRouter } from "react-router-dom";
import LogIn from "../LogIn/LogIn";
import Main from "../Main/Main";
import Register from "../Register/Register";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/login',
                element: <LogIn></LogIn>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    }
]);