import React from "react";
import RButton from "./Button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router";

const Footer = () => {
  return (
    <nav className="bg-dark_gray text-main_yellow w-full px-[35px] md:px-20 lg:px-40 py-20 min-h-max mt-24">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 place-content-center place-items-start border-b border-main_yellow/40 pb-14">
        {/* Input */}
        <div className="w-full">
          <span className="text-main_yellow capitalize font-semibold">
            Subscribe to Newsletter
          </span>
          <div className="relative mt-4 w-full">
            <input
              type="text"
              className="py-4 px-6 w-full border border-dark_gray/50 rounded-md focus:outline-none"
              placeholder="Enter your email"
            />
            {/* Button positioned absolutely at the right of the input */}
            <RButton
              btnText={<ArrowRight />}
              btnStyle={`bg-black w-12 h-12 flex items-center justify-center text-main_yellow rounded-full border border-dark_gray absolute right-2 top-1/2 transform -translate-y-1/2`}
            />
          </div>
        </div>
        {/* uls */}
        <ul className="w-full">
          <li className="font-bold capitalize mb-3">Footer Link Topic 1</li>
          <li>
            <Link to="/">Footer Link</Link>
          </li>
          <li>
            <Link to="/">Footer Link</Link>
          </li>
          <li>
            <Link to="/">Footer Link</Link>
          </li>
        </ul>
        {/* uls */}
        <ul className="w-full">
          <li className="font-bold capitalize mb-3">Footer Link Topic 1</li>
          <li>
            <Link to="/">Footer Link</Link>
          </li>
          <li>
            <Link to="/">Footer Link</Link>
          </li>
          <li>
            <Link to="/">Footer Link</Link>
          </li>
        </ul>
        {/* uls */}
        <ul className="w-full">
          <li className="font-bold capitalize mb-3">Footer Link Topic 1</li>
          <li>
            <Link to="/">Footer Link</Link>
          </li>
          <li>
            <Link to="/">Footer Link</Link>
          </li>
          <li>
            <Link to="/">Footer Link</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Footer;
