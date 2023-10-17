import { Outlet } from "react-router-dom";
import Nabbar from "../components/Navbar/Nabbar";

const Root = () => {
    return (
        <div>
            <Nabbar></Nabbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;