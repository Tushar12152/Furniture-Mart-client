import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
    return (
        <div className="grid grid-cols-12 h-full">
        
     <div className="col-span-5 md:col-span-3  min-h-screen bg-[#f76042] text-white">
         <ul className="menu p-4">
             {
               <>
                     <li>
                         <NavLink to="/dashboard/adminProfile">
                        
                             Admin Profile</NavLink>
                     </li>
                     <li>
                         <NavLink to="/dashboard/manageUsers">
                    
                             Manage Users</NavLink>
                     </li>


                     <li>
                         <NavLink to="/dashboard/addmeal">
                          
                             Add Meal</NavLink>
                     </li>
                     
                     <li>
                         <NavLink to="/dashboard/allmeal">
                          
                             All Meals</NavLink>
                     </li>
                     <li>
                         <NavLink to="/dashboard/allreview">
                     
                             All Review</NavLink>
                     </li>
                     <li>
                         <NavLink to="/dashboard/servemeal">
                    
                             Serve Meal</NavLink>
                     </li>
                     <li>
                         <NavLink to="/dashboard/upcomingmeal">
                      
                             Upcoming Meal</NavLink>
                     </li>
                 </>
                     
                    
             }




             {/* shared nav links */}
             <div className="divider"></div>
             <li>
                 <NavLink to="/">
                    
                     Home</NavLink>
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