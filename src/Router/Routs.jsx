import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layouts/Layout";
import Login from "../Components/Login";
import HomePage from "../Components/HomePage";




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

            }
        ]
    }
])