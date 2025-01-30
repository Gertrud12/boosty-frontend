import React, { useState } from "react";
import Logo from "../Images/Logo.png";
import { NavLink } from "react-router-dom";
import RButton from "./Button";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage menu toggle
  const [isScrolled, setIsScrolled] = useState(false); // State to manage scroll shadow

  // scroll event listener to toggle navbar bottom shadow
  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`bg-white text-yellow w-full py-8 lg:py-6 px-[30px] md:px-14 lg:px-16 flex items-center justify-between border-b border-dark_gray/20 fixed top-0 left-0 z-50 ${
        isScrolled ? "shadow-md" : "shadow-none"
      }`}
    >
      {/* Logo (Extreme Left) */}
      <div>
        <img src={Logo} alt="Uploaded" className="" />
      </div>

      {/* NavLinks (Centered on Larger Screens) */}
      <ul className="hidden lg:flex items-center justify-center gap-10 absolute left-1/2 transform -translate-x-1/2">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-main_yellow font-sm"
                : "hover:underline hover:text-main_yellow drop-shadow-sm duration-300 transition-all ease-linear"
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/become-a-partner"
            className={({ isActive }) =>
              isActive
                ? "text-main_yellow font-sm"
                : "hover:underline hover:text-main_yellow drop-shadow-sm duration-300 transition-all ease-linear"
            }
          >
            Become A Partner
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/fund-solar-projects"
            className={({ isActive }) =>
              isActive
                ? "text-main_yellow font-sm"
                : "hover:underline hover:text-main_yellow drop-shadow-sm duration-300 transition-all ease-linear"
            }
          >
            Want To Fund Solar Projects?
          </NavLink>
        </li>
      </ul>

      {/* Sign-In Button (Extreme Right on Larger Screens) */}
      <div className="hidden lg:block">
        <RButton
          btnText={`Sign In`}
          btnStyle={`bg-[#E8F2F2] w-[102px] h-auto py-2 rounded-full border-2 border-dark_gray`}
        />
      </div>

      {/* Menu Toggle Button (Visible on Small Screens, Extreme Right) */}
      <div className="lg:hidden">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-dark_gray focus:outline-none"
        >
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Menu (Slides in from Left on Small Screens) */}
      <div
        className={`fixed lg:hidden top-0 left-0 h-screen w-3/4 md:w-[40%] bg-white border-r border-dark_gray/20 rounded-r-xl transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } z-40 p-8`}
      >
        <ul className="flex flex-col gap-6 mt-16">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-main_yellow font-bold"
                  : "hover:underline hover:text-main_yellow drop-shadow-sm duration-300 transition-all ease-linear"
              }
              onClick={() => setIsMenuOpen(false)} // Close menu on link click
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/become-a-partner"
              className={({ isActive }) =>
                isActive
                  ? "text-main_yellow font-bold"
                  : "hover:underline hover:text-main_yellow drop-shadow-sm duration-300 transition-all ease-linear"
              }
              onClick={() => setIsMenuOpen(false)} // Close menu on link click
            >
              Become A Partner
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/fund-solar-projects"
              className={({ isActive }) =>
                isActive
                  ? "text-main_yellow font-bold"
                  : "hover:underline hover:text-main_yellow drop-shadow-sm duration-300 transition-all ease-linear"
              }
              onClick={() => setIsMenuOpen(false)} // Close menu on link click
            >
              Want To Fund Solar Projects?
            </NavLink>
          </li>
        </ul>

        {/* Sign-In Button in Mobile Menu */}
        <div className="mt-6">
          <RButton
            btnText={`Sign In`}
            btnStyle={`bg-[#E8F2F2] w-full lg:w-[102px] h-auto py-2 rounded-md lg:rounded-full border border-dark_gray`}
            onClick={() => setIsMenuOpen(false)} // Close menu on button click
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
