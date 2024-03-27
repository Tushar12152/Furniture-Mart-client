import Banner from "./Banner";
import Blogs from "./Blogs";
import Mordern from "./Mordern";
// import Lamp from "./Lamp";
import ShopByCategory from "./ShopByCategory";

const HomePage = () => {
    return (
        <div>
            <Banner/>
            <ShopByCategory/>
            {/* <Lamp/> */}
            <Mordern/>

            <Blogs/> 
        </div>
    );
};

export default HomePage;