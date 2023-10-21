import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
const Nabbar = () => {
  const {user, logOut} = useContext(AuthContext);

  const navlink = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/addproduct">AddProduct</NavLink>
      </li>
      <li>
        <NavLink to="/contact">Contact</NavLink>
      </li>
    </>
  );

  return (
    <div className="container mx-auto">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navlink}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">
            <img
              src="https://i.ibb.co/r5CqcRV/leodigital-logo-1486181530.png"
              alt=""
            />
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navlink}</ul>
        </div>
        <div className="navbar-end">
        {
                    !user?
                    <div>
                        
                        <button className="btn"><Link to='/login'>LogIn</Link></button>

                    </div>
                    
                    :
                    <div className="flex items-center">
                        <div>
                            <img className="w-10 rounded-full mr-3" src={user.photoURL} alt="" />
                            <p>{user.displayName}</p>
                        </div>
                        <button onClick={logOut} className="btn">Log Out</button>
                    </div>  
                }
        </div>

      </div>
    </div>
  );
};

export default Nabbar;
