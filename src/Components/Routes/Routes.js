import { createBrowserRouter } from "react-router-dom";
import Blogs from "../Blogs/Blogs";
import CarouselHome from "../CarouselHome/CarouselHome";
import CheckOut from "../CheckOut/CheckOut";
import CourseInfo from "../CourseInfo/CourseInfo";
import CoursesFeatures from "../CoursesFeatures/CoursesFeatures";
import ErrorPage from "../ErrorPage/ErrorPage";
import LogIn from "../LogIn/LogIn";
import Main from "../Main/Main";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
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
            },
            {
                path: '/blog',
                element: <Blogs></Blogs>
            },
            {
                path: '/',
                element: <CarouselHome></CarouselHome>
            },
            {
                path: '/coursesFeatures',
                element: <CoursesFeatures></CoursesFeatures>,
                loader: () => {
                    return fetch('http://localhost:5000/course-info');
                }
            },
            {
                path: '/course-info/:id',
                element: <CourseInfo></CourseInfo>,
                loader: ({ params }) => {
                    return fetch(`http://localhost:5000/course-info/${params.id}`)
                }
            },
            {
                path: '/checkout/:id',
                element: <PrivateRoute><CheckOut></CheckOut></PrivateRoute>,
                loader: ({ params }) => {
                    return fetch(`http://localhost:5000/checkout/${params.id}`)
                }
            }

        ],


    },
    {
        path: '*',
        element: <ErrorPage></ErrorPage>
    }
]);