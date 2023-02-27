import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { lightToDark } from "../../features/colorChange/colorChangeSlice";

export default function Main() {
  const { textColor, bgColor, status } = useSelector(
    (state) => state.colorchanges.changetheme
  );
  const dispatch = useDispatch();

  return (
    <div className={`${bgColor} ${textColor}`}>
      <Navbar />
      <button
        type="button"
        className="fixed right-20  top-5  z-[500] inline"
        onClick={() => dispatch(lightToDark())}
      >
        {status ? (
          <MdLightMode
            className={`${textColor} text-2xl hover:text-blue-700`}
          />
        ) : (
          <MdDarkMode className={`${textColor} text-2xl hover:text-blue-700`} />
        )}
      </button>
      <Outlet />
      <Footer />
    </div>
  );
}
