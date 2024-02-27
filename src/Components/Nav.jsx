import Drawer from "./Drawer";
import SearchDrawer from "./SearchDrawer";
import { GoPerson } from "react-icons/go";
import { CiHeart } from "react-icons/ci";
import { MdOutlineShoppingCart } from "react-icons/md";



const Nav = () => {
    return (
        <div>
            <div className="navbar bg-base-100 shadow-lg shadow-slate-400">
  <div className="navbar-start flex gap-6">

    <span className="text-xl"> <Drawer/></span>
   <span className="text-xl"><SearchDrawer/></span>


  </div>
  <div className="navbar-center">
    <a className=" text-xl">Furniture Mart</a>
  </div>
  <div className="navbar-end flex gap-6">
  
      <span className="text-xl"> <GoPerson/></span>
    
      
     <span className="text-xl"> <CiHeart/></span>


     <span className="text-xl"> <MdOutlineShoppingCart/></span>
  
    
  </div>
</div>
        </div>
    );
};

export default Nav;