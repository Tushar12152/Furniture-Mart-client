import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layouts/Layout";

export const Routs = createBrowserRouter([
    {
        path:'/',
        element:<Layout/>,
        children:[
            {

            }
        ]
    }
])