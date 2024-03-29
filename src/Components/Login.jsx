import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import UseAuth from "../Hooks/UseAuth";
import swal from "sweetalert";
import toast from "react-hot-toast";


const Login = () => {

const [show,setshow]=useState(true)

const {signIn}=UseAuth()
const navigate=useNavigate()

   const handleLogin=e=>{
           e.preventDefault()

           const email=e.target.email.value;
           const password= e.target.password.value;
           console.log(email,password);
              
           signIn(email,password)
           .then(data=>{
            if(data?.user){
             toast.success('logged in')
              navigate('/dashboard')
            }
           })
           .catch(err=>{
             swal('error',`${err}`,"error")
           })
           

   }


    return (
        <div>
             <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
    


    </div>
    <div className="card  w-full max-w-sm shadow-2xl bg-white">
      <form onSubmit={handleLogin} className="card-body">
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
          <button className="btn bg-black text-white">Login</button>
        </div>
          
          <p>New here? Please <Link className="text-blue-400" to='/register'>Register</Link></p>

      </form>
    
    </div>
  </div>

</div>
        </div>
    );
};

export default Login;