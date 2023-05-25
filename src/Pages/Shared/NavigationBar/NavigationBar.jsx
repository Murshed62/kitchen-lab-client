import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";
import './NavigationBar.css';

const NavigationBar = () => {
  const {user, logOut} = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);

  function toggleDropdown() {
    setIsOpen(!isOpen);
  }
  
 
  return (
    <div className="navbar bg-base-100">
  <div className="navbar-start">
  <div className="dropdown transition">
      <label
        tabIndex={0}
        className="btn btn-ghost lg:hidden"
        onClick={toggleDropdown}
      >
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
      {isOpen && (
        <ul
          tabIndex={0}
          className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
        >
          <Link className="ps-4 pb-2" to="/blog">
            Blog
          </Link>
          <hr />
          <Link className="ps-4 pt-2" to="/">
            Home
          </Link>
        </ul>
      )}
    </div>
    <Link className="normal-case text-3xl font-bold text-yellow-500 forMbl" to='/'>Kitchen Lab</Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 text-3xl font-bold">
      <Link className="hover:text-yellow-400 hover:transition mr-5" to="/">Home</Link>
      <Link className="hover:text-yellow-400 hover:transition" to="/blog">Blog</Link>
    </ul>
  </div>
  <div className="navbar-end">
   {
    user?.displayName ? <span className="avatar online">
    <span className="w-14 rounded-full"><img style={{width:"50px"}} className="rounded-full w-1/2" src={user?.photoURL} title={user?.displayName}alt="" /></span>
    </span>: ""
   }
    
    {
      user ? <Link to="/login" onClick={logOut} className="btn font-bold bg-yellow-400 border-none text-black hover:bg-yellow-600">Logout</Link>
      :
      <div>
        <Link to="/login" className="font-bold mr-3 mb-1 bg-yellow-500 border-none text-black hover:bg-yellow-600 forMblLink py-3 px-4 rounded">Login</Link>
      <Link to="/register" className="font-bold bg-yellow-500 border-none text-black hover:bg-yellow-600 forMblLink py-3 px-4 rounded">Register</Link>
      </div>
    }
  </div>
</div>
  );
};

export default NavigationBar;
