
import React from 'react'
import { useRoutes } from "react-router-dom";
import AdminLayout from '../layout/AdminLayout';
import AppLayout from '../layout/AppLayout';
import BlankLayout from '../layout/BlankLayout';
import Aboutus from '../pages/Aboutus';
import BlogList from '../pages/admin/blogs/BlogList';
import NewBlog from '../pages/admin/blogs/NewBlog';
import CategoryList from '../pages/admin/category/CategoryList';
import NewCategory from '../pages/admin/category/NewCategory';
import Dashboard from '../pages/admin/dashboard';
import NewTag from '../pages/admin/tags/NewTag';
import TagsList from '../pages/admin/tags/TagsList';
import ForgotPassword from '../pages/Auth/ForgotPassword';
import Login from '../pages/Auth/Login';
import ResetPassword from '../pages/Auth/ResetPassword';
import Signup from '../pages/Auth/Signup';
import Blog from '../pages/Blog';
import Error404 from '../pages/Error404';
import Home from '../pages/Home';
import SingleBlog from '../pages/SingleBlog';

export default function Routes() {
  
     /*
        ************ Current URL Path Finder *******************
        const location = useLocation();
        const currentPath = location.pathname;    
    */

        let routes = useRoutes([
            { 
                path: "/", 
                element: <AppLayout />,
                children: [
                    { index: true, element: <Home /> },
                    { path: 'aboutus', element: <Aboutus /> },
                    { path: 'blog', element: <Blog /> },
                    { path: 'blog/:id', element: <SingleBlog /> },
                ]
            },
            {
                path: '/',
                element: <BlankLayout />, 
                children: [
                    { path: 'login', element: <Login /> },
                    { path: 'register', element: <Signup /> },
                    { path: 'forgot-password', element: <ForgotPassword /> },
                    { path: 'reset-password', element: <ResetPassword /> },
                ]
            },
            {
                path: '/admin', 
                element: <AdminLayout />,
                children: [
                    { index: true, element: <Dashboard /> },
                    { path: 'blog', element: <BlogList /> },
                    { path: 'blog/new', element: <NewBlog /> },
                    { path: 'category', element: <CategoryList /> },
                    { path: 'category/new', element: <NewCategory /> },
                    { path: 'tag', element: <TagsList /> },
                    { path: 'tag/new', element: <NewTag /> },
                ]
            },
            { path: "*", element: <Error404 /> },        
          ]);
        
          return routes;     
}
