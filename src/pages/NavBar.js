import React from 'react';
import { FaBookReader} from "react-icons/fa";
import { Link } from 'react-router-dom';
const NavBar = () => {
    return (
        <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              <li><Link to="/home">Courses</Link></li>
              
              <li><Link to="">FAQ</Link></li>
              <li><Link to="">Blog</Link></li>
            
            </ul>
          </div>
          <FaBookReader className='h-[40px] w-[40px]'></FaBookReader>
          <Link to="/home" className="btn btn-ghost normal-case text-xl">LEARN-ONLINE</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
          <li><Link to="/home">Courses</Link></li>
            
          <li><Link to="">FAQ</Link></li>
          <li><Link to="">Blog</Link></li>
          </ul>
        </div>
        <div className="navbar-end">
          <Link to='' className="btn mr-3">Login</Link>
       
          <Link to='' className="btn">Registration</Link>
        </div>
      </div>
    );
};

export default NavBar;