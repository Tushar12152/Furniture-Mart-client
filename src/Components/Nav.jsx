import Drawer from "./Drawer";
import SearchDrawer from "./SearchDrawer";
import { GoPerson } from "react-icons/go";
import { CiHeart } from "react-icons/ci";
import { MdOutlineShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";
import { getAuth } from "firebase/auth";



const Nav = () => {

  const {user}=getAuth()

    return (
        <div>
            <div className="navbar max-w-screen-xl fixed z-10 bg-opacity-30 bg-black text-white">
  <div className="navbar-start flex gap-6">

    <span className="text-xl"> <Drawer/></span>
   <span className="text-xl"><SearchDrawer/></span>


  </div>
  <div className="navbar-center">
    <a className=" text-xl">Furniture Mart</a>
  </div>
  <div className="navbar-end flex gap-6">
  
      <Link to={user?'/dashboard':'/login'}  className="text-xl"> <GoPerson/></Link>
    
      
     <span className="text-xl"> <CiHeart/></span>


     <span className="text-xl"> <MdOutlineShoppingCart/></span>
  
    
  </div>
</div>
        </div>
    );
};

export default Nav;