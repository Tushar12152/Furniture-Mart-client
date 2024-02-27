import { IoIosSearch } from "react-icons/io";

const SearchDrawer = () => {
    return (
        <div>
            <div className="drawer drawer-end">
  <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content">
    {/* Page content here */}
    <label htmlFor="my-drawer-4" className="drawer-button cursor-pointer"><IoIosSearch/></label>
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
    <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
      <p>Search for products (0)</p>
        
        <div className="relative mt-10">
             <input placeholder="Search for products" className="p-3  border-slate-900 w-[90%] " type="text" />

             <button className="absolute text-xl top-3 right-12"><IoIosSearch/></button>


        </div>
    </ul>
  </div>
</div>
        </div>
    );
};

export default SearchDrawer;