import Banner from "../../components/Banner/Banner";
import Companies from "../../components/Companies/Companies";
import Contact from "../Contact/Contact";
import LatestProduct from "../LatestProduct/LatestProduct";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Companies></Companies>
            <LatestProduct></LatestProduct>
            <Contact></Contact>
        </div>
    );
};

export default Home;