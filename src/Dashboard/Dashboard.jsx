import { NavLink, Outlet, useNavigate } from "react-router-dom";
import UseAuth from "../Hooks/UseAuth";
import toast from "react-hot-toast";

const Dashboard = () => {
    const navigate=useNavigate()
    const {logOut}=UseAuth()

    const handlelogout=()=>{
          logOut()
          toast.success('Logged out')

          navigate('/')

    }


    return (
        <div className="grid grid-cols-12 h-full">
        
     <div className="col-span-5 md:col-span-3  min-h-screen bg-[#f76042] text-white">
         <ul className="menu p-4">
             {
               <>
                     <li>
                         <NavLink to="/dashboard/adminProfile">
                        
                          Profile</NavLink>
                     </li>
                     


                 </>
                     
                    
             }




             {/* shared nav links */}
             <div className="divider"></div>
             <li>
                 <NavLink to="/">
                    
                     Home</NavLink>
             </li>
             <li>
                 <NavLink onClick={handlelogout}>
                    
                     Log out</NavLink>
             </li>
            
         </ul>
     </div>
     {/* dashboard content */}
     <div className="col-span-7 md:col-span-9  p-4 md:p-8">
         <Outlet></Outlet>
     </div>
 </div>
    );
};

export default Dashboard;