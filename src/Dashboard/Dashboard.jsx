import { NavLink, Outlet, useNavigate } from "react-router-dom";
import UseAuth from "../Hooks/UseAuth";
import toast from "react-hot-toast";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const Dashboard = () => {
    const navigate=useNavigate()
    const {logOut}=UseAuth()


    const axiosSecure=useAxiosSecure()
    const {user}=UseAuth()
    // console.log('logged',user?.email);
    const logedMail=user?.email;



    const { data=[] } = useQuery({
      queryKey: ['users'],
      queryFn: async () =>{
          const res=await axiosSecure.get(`/users`)
   
          return res.data
      }
      
    })

    // console.log(data);


const loggedUser=data.find(user=>user?.email===logedMail)
// console.log('oo',loggedUser);


const Admin=loggedUser.role==='admin'

console.log(Admin);




    const handlelogout=()=>{
          logOut()
          toast.success('Logged out')

          navigate('/')

    }


    return (
        <div className="grid grid-cols-12 h-full">
        
     <div className="col-span-5 md:col-span-3  min-h-screen bg-slate-400 text-white">
         <ul className="menu p-4">
             {
               Admin?
               <>
                     <li>
                         <NavLink to="/dashboard/adminProfile">
                        
                          Profile</NavLink>
                     </li>
                     
                     <li>
                         <NavLink to="/dashboard/addProduct">
                        
                          Add Product</NavLink>
                     </li>
                     


                 </> :



<>
                     <li>
                         <NavLink to="/dashboard/adminProfile">
                        
                          Profile</NavLink>
                     </li>
                     
                     <li>
                         <NavLink to="/dashboard/mycart">
                        
                          My cart</NavLink>
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
                 <a onClick={handlelogout}>
                    
                     Log out</a>
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