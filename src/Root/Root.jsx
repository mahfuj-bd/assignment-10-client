import { Outlet } from "react-router-dom";
import Nabbar from "../components/Navbar/Nabbar";
import Footer from "../components/Footer/Footer";

const Root = () => {
    return (
        <div>
            <Nabbar></Nabbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;