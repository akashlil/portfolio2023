import React, { useEffect, useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const [navColor, setNavColor] = useState(true);
  const channavbar = () => {
    if (parseInt(window.scrollY) <= 80) {
      setNavColor(true);
    } else {
      setNavColor(false);
    }
  };

  window.addEventListener("scroll", channavbar);
  return (
    <nav
      className={`sticky transition-colors top-0 backdrop-blur-lg shadow-2xl shadow-black/30 ${
        navColor ? "bg-[#192539]" : ""
      } text-white z-50 py-2`}
    >
      <div className="">
        <div className="flex items-center justify-between h-16">
          <div className="flex justify-between grow px-4 sm:px-6 lg:px-32">
            <a className="shrink-0 items-center flex" href="#">
              <img
                className="h-8 w-8"
                src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                alt="Workflow"
              />
              <p className="ml-5 text-2xl font-serif ">teacher</p>
            </a>

            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a
                  href="#"
                  className="hover:text-sky-400 px-3 py-2 rounded-md text-md font-semibold"
                >
                  Home
                </a>
                <a
                  href="#"
                  className="font-semibold hover:text-sky-400 px-3 py-2 rounded-md text-md"
                >
                  About
                </a>
                <a
                  href="/login"
                  className="hover:text-sky-400 px-3 py-2 rounded-md text-md font-semibold"
                >
                  Login
                </a>
              </div>
            </div>
          </div>
          <div className="px-2 flex md:hidden">
            <button
              type="button"
              className="bg-gray-800 inline-flex items-center  justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              onClick={() => setIsOpen(!isOpen)}
              aria-controls="mobile-menu"
              aria-expanded={isOpen ? "true" : "false"}
            >
              <span className="sr-only">Open main menu</span>
              {/* Icon when menu is closed. */}
              {/* Menu open: "hidden", Menu closed: "block" */}
              <svg
                className={`${isOpen ? "hidden" : "block"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              {/* Icon when menu is open. */}
              {/* Menu open: "block", Menu closed: "hidden" */}
              <svg
                className={`${isOpen ? "block" : "hidden"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, toggle classNamees based on menu state. */}
      <div
        className={`${isOpen ? "block" : "hidden"} md:hidden `}
        id="mobile-menu"
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 transition duration-200">
          {/* <a href="#" className="text-gray-300 hover:text-white block px-3 py-2 rounded"> */}
          <a
            href="#"
            className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Home
          </a>
          <a
            href="#"
            className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            About
          </a>
          <a
            href="#"
            className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
