import { FaBars } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Drawer = () => {
  return (
    <div>
      <div className="drawer">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Page content here */}
          <label htmlFor="my-drawer" className="cursor-pointer drawer-button">
            <FaBars />
          </label>
        </div>
        <div className="drawer-side z-10">
          <label
            htmlFor="my-drawer"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
            {/* Sidebar content here */}
            <li>
              <NavLink
                to="/wood"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "bg-red-400 text-white" : ""
                }
              >
                Wood Furnitures
              </NavLink>
              ;
            </li>

            <li>
              <NavLink
                to="/steel"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "bg-red-400 text-white" : ""
                }
              >
                Steel Furniture
              </NavLink>
              ;
            </li>


            <li>
              <NavLink
                to="/partex"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "bg-red-400 text-white" : ""
                }
              >
                Partex Furniture
              </NavLink>
              ;
            </li>

            <li>
              <NavLink
                to="/steel"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "bg-red-400 text-white" : ""
                }
              >
                Plastic Furniture
              </NavLink>
              ;
            </li>

          </ul>
        </div>
      </div>
    </div>
  );
};

export default Drawer;
