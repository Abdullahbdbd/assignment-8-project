import React from "react";
import logo from '../../assets/logo.png'
import { Link } from "react-router";
import { FaGithub } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="bg-base-100 shadow-sm">
      <div className="w-11/12 mx-auto navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm text-xs gap-2 dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>Apps</a>
              </li>
              <li>
                <a>Installation</a>
              </li>
            </ul>
          </div>
            
          <Link to='/' className="text-md font-bold bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent flex items-center gap-1">
            <img className="w-8" src={logo} alt="" /> HERO.IO</Link>
         
        </div>

        <div className="navbar-center">
          <div className="hidden lg:flex">
            <ul className="menu menu-horizontal pr-5 gap-2 text-xs">
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>Apps</a>
              </li>
              <li>
                <a>Installation</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="navbar-end">
          <Link to='https://github.com/Abdullahbdbd' 
                className="btn btn-sm text-xs text-white bg-[linear-gradient(125.07deg,#632EE3,#9F62F2)]"
                target="_blank"
                >
          <FaGithub />  Contribute
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
