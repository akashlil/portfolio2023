import React from "react";
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <div className="relative py-14 px-4 sm:px-6 lg:px-32 text-md font-serif border-t border-gray-700">
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-9 lg:justify-items-center ">
        <div className="">
          <p className="text-xl font-semibold font-sans">Office Address</p>
          <p>
            Level-4, 34, Awal Centre, Banani, Dhaka Support:
            Web@Programming-Hero.Com Helpline: 01322810867 (Available: Sat -
            Thu, 10:00 AM To 7:00 PM)
          </p>
        </div>
        <div>
          <p className="text-xl font-semibold font-sans">All Link</p>
          <p className="hover:text-blue-600">
            <NavLink to="/home">Home</NavLink>
          </p>
          <p className="hover:text-blue-600">
            <NavLink to="/home">About</NavLink>
          </p>
          <p className="hover:text-blue-600">
            <NavLink to="/home">Login</NavLink>
          </p>
          <p className="hover:text-blue-600">
            <NavLink to="/home">Contact</NavLink>
          </p>
        </div>
        <div className="">
          <p className="text-xl font-semibold font-sans">Community</p>
          <p className="hover:text-blue-600">
            <NavLink to="/home">GitHub</NavLink>
          </p>
          <p className="hover:text-blue-600">
            <NavLink to="/home">Discord</NavLink>
          </p>
          <p className="hover:text-blue-600">
            <NavLink to="/home">Twitter</NavLink>
          </p>
          <p className="hover:text-blue-600">
            <NavLink to="/home">YouTube</NavLink>
          </p>
        </div>
      </div>
      <p className="text-md lg:text-center pt-10  text-transparent bg-gradient-to-br from-indigo-700 to-fuchsia-600 bg-clip-text">
        @Power by akash 2023
      </p>
      <div className="w-[300px] bg-indigo-600 h-20 lg:w-[600px] absolute top-60 lg:top-10 lg:left-[30%] opacity-40 rotate-12 shadow-2xl shadow-current blur-3xl "></div>
    </div>
  );
}
