import Banner from "./Banner";
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
        </div>
    );
};

export default HomePage;