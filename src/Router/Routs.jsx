import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layouts/Layout";
import Login from "../Components/Login";
import HomePage from "../Components/HomePage";
import Register from "../Components/Register";
import Dashboard from "../Dashboard/Dashboard";
import AddProduct from "../Dashboard/AddProduct";




export const Routs = createBrowserRouter([
    {
        path:'/',
        element:<Layout/>,
        children:[
            {
                path:'/',
                element:<HomePage/>
            },
            {
                path:'/login',
                element:<Login/>
            },
            
            {
                path:'/register',
                element:<Register/>
            },

        ]

    },

    {
        path:'/dashboard',
        element:<Dashboard/>,
        children:[
            {
                path:'/dashboard/addProduct',
                element:<AddProduct/>
            }
        ]
    }
])