import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import UseAuth from "../Hooks/UseAuth";
import toast from "react-hot-toast";
import useAxiosSecure from "../Hooks/useAxiosSecure";
// import { useQuery } from "@tanstack/react-query";

const Register = () => {

    const [show,setshow]=useState(true)
    const axiosSecure=useAxiosSecure()
    const {createUser}=UseAuth()
    // const {user}=UseAuth()
    // console.log('logged',user?.email);



    // const { data=[] } = useQuery({
    //   queryKey: ['users'],
    //   queryFn: async () =>{
    //       const res=await axiosSecure.get(`/users`)
   
    //       return res.data
    //   }
      
    // })

    // console.log(data);







    const handleRegister=async(e)=>{
        e.preventDefault()

        const email=e.target.email.value;
        const password= e.target.password.value;
        const name= e.target.name.value;

        const info={
           email,
           password,
           name,
           role:'user',
        }
        // console.log(info);

       const result=await createUser(email,password)
        
          //  console.log(result.user.email)
           
            if(result?.user?.email){
              axiosSecure.post('/users', info)
               .then(data=>{
                  if(data.data.insertedId){
                    toast.success("Success!");
                  }
               })
            
            }
         
  

}


    return (
        <div>
             <div>
             <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
    
    </div>
    <div className="card  w-full max-w-sm shadow-2xl bg-white">
      <form onSubmit={handleRegister} className="card-body">

      <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input name="name" type="text" placeholder="Name" className="input input-bordered" required />
        </div>


        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input name="email" type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
         <div className="relative">
         <input name="password" type={show?"password":"text"} placeholder="password" className="input input-bordered w-full" required />

         <span onClick={()=>setshow(!show)} className="absolute top-4 right-2"> {show?<FaEye/>:<FaEyeSlash/>} </span>

         </div>
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-black text-white">Register</button>
        </div>
          
          <p>Already have an account? Please <Link className="text-blue-400" to='/login'>Login</Link></p>

      </form>
    
    </div>
  </div>

</div>
        </div>
        </div>
    );
};

export default Register;