import React, { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className={`sticky transition-colors top-0 backdrop-blur-md shadow-2xl shadow-black/10 z-50`}
    >
      <div className="">
        <div className="flex items-center justify-between h-16">
          <div className="flex justify-between items-center grow px-4 sm:px-6 lg:px-32">
            <a className="shrink-0 items-center flex" href="#">
              <img className="h-20 w-20" src="/logo.png" alt="Workflow" />
              <p className="text-4xl font-serif -translate-x-8">kash</p>
            </a>

            <div className="hidden md:block">
              <div className="ml-10 flex  space-x-4">
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
