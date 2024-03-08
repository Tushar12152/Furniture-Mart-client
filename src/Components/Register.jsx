import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import UseAuth from "../Hooks/UseAuth";
import swal from "sweetalert";

const Register = () => {

    const [show,setshow]=useState(true)

    const {createUser}=UseAuth()

    const handleRegister=e=>{
        e.preventDefault()

        const email=e.target.email.value;
        const password= e.target.password.value;

        // console.log(email,password);

        createUser(email,password)
        .then(data=>{
           console.log(data);
           if(data?.user){
            swal("Success!", "Registration complete", "success");
           }
        })
        .catch(err=>{
           swal('error',`${err}`,'error')
        })



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