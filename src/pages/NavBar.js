import React, { useState } from 'react';
import { useContext } from 'react';
import { FaBookReader, FaToggleOff, FaToggleOn } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import { userContext } from '../context/AuthProvider';
const NavBar = () => {
  const navigate = useNavigate();
  const { user, LogOut } = useContext(userContext)

  let [isLight, setLight] = useState(true)


  let LightMood = () => {
    setLight(false)
    console.log("dark")
  }
  let DarkMood = () => {
    setLight(true)
    console.log("light")
  }
  const Logout = () => {
    LogOut().then(() => {
      navigate('/home')
    })
  }

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
            <li><Link to="/blog">Blog</Link></li>
            {/* add light or dark mood toggle */}
            {
              isLight ?
                <p onClick={LightMood}><FaToggleOff className='pointer h-[40px] w-[40px] m-16 lg:mx-0 my-2'></FaToggleOff></p>
                :
                <p onClick={DarkMood}><FaToggleOn className='pointer h-[40px] w-[40px] m-16 lg:mx-0 my-2'></FaToggleOn></p>
            }
            {
              user?.displayName ? <button onClick={Logout} className="btn mr-3">LogOut</button> : ""
            }


          </ul>
        </div>
        <div className='lg:flex'>
          <FaBookReader className='h-[40px] w-[40px] mx-16 lg:mx-0'></FaBookReader>
          <Link to="/home" className="btn btn-ghost normal-case text-xl">LEARN-ONLINE</Link>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
          <li><Link to="/home">Courses</Link></li>
          <li><Link to="">FAQ</Link></li>
          <li><Link to="/blog">Blog</Link></li>
          {/* add light or dark mood toggle */}
          {
            isLight ?
              <p onClick={LightMood}><FaToggleOff className='pointer h-[40px] w-[40px] m-16 lg:mx-0 my-2'></FaToggleOff></p>
              :
              <p onClick={DarkMood}><FaToggleOn className='pointer h-[40px] w-[40px] m-16 lg:mx-0 my-2'></FaToggleOn></p>
          }
          {
            user ? <button onClick={Logout} className="btn mx-3">LogOut</button> : ""
          }
        </ul>
      </div>

      {/* if user login show profile otherwish show Registration form */}
      <div className="navbar-end">
        {

          user ?
            <button title={user?.displayName}>
              <div className="avatar p-3">
                <div className="w-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img src={user?.photoURL} alt="" />
                </div>
              </div>
            </button>

            :
            <div className='lg:flex md:flex lg:mx-0 md:mx-0 ml-[40px]'>
              <Link to='/login' className="btn mr-3 lg:mb-0 md:mb-0 mb-1">Login</Link>
              <Link to='/registration' className="btn">Registration</Link>
            </div>
        }
      </div>
      {/* *************************************************** */}
    </div>
  );
};

export default NavBar;