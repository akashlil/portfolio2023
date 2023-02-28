import React from "react";
import { Link } from "react-router-dom";
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { BsGithub } from "react-icons/bs";
import {
  SiMongodb,
  SiMysql,
  SiFirebase,
  SiTailwindcss,
  SiBootstrap,
  SiRedux,
} from "react-icons/si";
import { DiNodejs } from "react-icons/di";
import { TbBrandNextjs, TbBrandPhp } from "react-icons/tb";
import { useSelector } from "react-redux";

export default function Myskill() {
  const {
    mySkillColor: { textColor, bgColor, iconColor },
    h1Color,
  } = useSelector((state) => state.colorchanges.changetheme);

  return (
    <div className="px-4 lg:px-32 sm:px-6">
      <div>
        <div className="mt-16 mb-10">
          <p className="text-4xl lg:text-5xl  font-bold text-center from-inherit">
            <span className={`${h1Color}`}>My Skill</span> With Technology
          </p>
          <p className="text-center mt-4 text-lg from-inherit">
            Full Satck Developer with experiences
          </p>
        </div>
        <div className="flex gap-2  lg:gap-4 justify-center items-center flex-wrap">
          <div className="inline-flex flex-col justify-center items-center">
            <p
              className={`lg:text-lg text-sm rounded-xl px-5 py-3 shadow-lg ${textColor} ${bgColor} inline-block`}
            >
              Next.js 1 year
            </p>
            <Link target="_blank" to="https://meet.google.com/">
              <div className="hover:scale-125 transition ease-out">
                <TbBrandNextjs
                  className={`w-[75px] h-[75px] lg:w-[120px] lg:h-[125px] shadow-xl ${iconColor} m-8 p-5 shadow-black/70 rounded-xl text-red-900`}
                ></TbBrandNextjs>
              </div>
            </Link>
          </div>
          <div className="inline-flex flex-col justify-center items-center">
            <p
              className={`lg:text-lg text-sm rounded-xl px-5 py-3 shadow-lg ${textColor} ${bgColor} inline-block`}
            >
              React.js 2 year
            </p>
            <Link target="_blank" to="https://meet.google.com/">
              <div className="hover:scale-125 transition ease-out">
                <FaReact
                  className={`w-[75px] h-[75px] lg:w-[120px] lg:h-[125px] shadow-xl ${iconColor} m-8 p-5 shadow-black/70 rounded-xl text-blue-600`}
                />
              </div>
            </Link>
          </div>
          <div className="inline-flex flex-col justify-center items-center ">
            <p
              className={`lg:text-lg text-sm rounded-xl px-5 py-3 shadow-lg ${textColor} ${bgColor} inline-block`}
            >
              Redux 1 year
            </p>
            <Link target="_blank" to="https://zoom.us/download">
              <div className="hover:scale-125 transition ease-out">
                <SiRedux
                  className={`w-[75px] h-[75px] lg:w-[120px] lg:h-[125px] shadow-xl ${iconColor} m-8 p-5 shadow-black/70 rounded-xl text-fuchsia-600`}
                />
              </div>
            </Link>
          </div>
          <div className="inline-flex flex-col justify-center items-center ">
            <p
              className={`lg:text-lg text-sm rounded-xl px-5 py-3 shadow-lg ${textColor} ${bgColor} inline-block`}
            >
              JavaScript 3 year
            </p>
            <Link target="_blank" to="https://zoom.us/download">
              <div className="hover:scale-125 transition ease-out">
                <IoLogoJavascript
                  className={`w-[75px] h-[75px] lg:w-[120px] lg:h-[125px] shadow-xl ${iconColor} m-8 p-5 shadow-black/70 rounded-xl text-yellow-500`}
                />
              </div>
            </Link>
          </div>
          <div className="inline-flex flex-col justify-center items-center ">
            <p
              className={`lg:text-lg text-sm rounded-xl px-5 py-3 shadow-lg ${textColor} ${bgColor} inline-block`}
            >
              Node.js 3 year
            </p>
            <Link target="_blank" to="https://www.whatsapp.com/download">
              <div className="hover:scale-125 transition ease-out">
                <DiNodejs
                  className={`w-[75px] h-[75px] lg:w-[120px] lg:h-[125px] shadow-xl ${iconColor} m-8 p-5 shadow-black/70 rounded-xl text-green-500`}
                />
              </div>
            </Link>
          </div>
          <div className="inline-flex flex-col justify-center items-center ">
            <p
              className={`lg:text-lg text-sm rounded-xl px-5 py-3 shadow-lg ${textColor} ${bgColor} inline-block`}
            >
              MongoDB 2 year
            </p>
            <Link target="_blank" to="https://www.facebook.com/">
              <div className="hover:scale-125 transition ease-out">
                <SiMongodb
                  className={`w-[75px] h-[75px] lg:w-[120px] lg:h-[125px] shadow-xl ${iconColor} m-8 p-5 shadow-black/70 rounded-xl text-green-500`}
                />
              </div>
            </Link>
          </div>
          <div className="inline-flex flex-col justify-center items-center ">
            <p
              className={`lg:text-lg text-sm rounded-xl px-5 py-3 shadow-lg ${textColor} ${bgColor} inline-block`}
            >
              Php 3 year
            </p>
            <Link target="_blank" to="https://www.facebook.com/">
              <div className="hover:scale-125 transition ease-out">
                <TbBrandPhp
                  className={`w-[75px] h-[75px] lg:w-[120px] lg:h-[125px] shadow-xl ${iconColor} m-8 p-5 shadow-black/70 rounded-xl text-blue-400`}
                />
              </div>
            </Link>
          </div>
          <div className="inline-flex flex-col justify-center items-center ">
            <p
              className={`lg:text-lg text-sm rounded-xl px-5 py-3 shadow-lg ${textColor} ${bgColor} inline-block`}
            >
              Mysql 3 year
            </p>
            <Link target="_blank" to="https://www.facebook.com/">
              <div className="hover:scale-125 transition ease-out">
                <SiMysql
                  className={`w-[75px] h-[75px] lg:w-[120px] lg:h-[125px] shadow-xl ${iconColor} m-8 p-5 shadow-black/70 rounded-xl text-blue-400`}
                />
              </div>
            </Link>
          </div>
          <div className="inline-flex flex-col justify-center items-center ">
            <p
              className={`lg:text-lg text-sm rounded-xl px-5 py-3 shadow-lg ${textColor} ${bgColor} inline-block`}
            >
              Firebase 3 year
            </p>
            <Link target="_blank" to="https://www.facebook.com/">
              <div className="hover:scale-125 transition ease-out">
                <SiFirebase
                  className={`w-[75px] h-[75px] lg:w-[120px] lg:h-[125px] shadow-xl ${iconColor} m-8 p-5 shadow-black/70 rounded-xl text-yellow-300`}
                />
              </div>
            </Link>
          </div>
          <div className="inline-flex flex-col justify-center items-center ">
            <p
              className={`lg:text-lg text-sm rounded-xl px-5 py-3 shadow-lg ${textColor} ${bgColor} inline-block`}
            >
              Tailwindcss 2 year
            </p>
            <Link target="_blank" to="https://www.facebook.com/">
              <div className="hover:scale-125 transition ease-out">
                <SiTailwindcss
                  className={`w-[75px] h-[75px] lg:w-[120px] lg:h-[125px] shadow-xl ${iconColor} m-8 p-5 shadow-black/70 rounded-xl text-blue-800`}
                />
              </div>
            </Link>
          </div>
          <div className="inline-flex flex-col justify-center items-center ">
            <p
              className={`lg:text-lg text-sm rounded-xl px-5 py-3 shadow-lg ${textColor} ${bgColor} inline-block`}
            >
              Bootstrap 3 year
            </p>
            <Link target="_blank" to="https://www.facebook.com/">
              <div className="hover:scale-125 transition ease-out">
                <SiBootstrap
                  className={`w-[75px] h-[75px] lg:w-[120px] lg:h-[125px] shadow-xl ${iconColor} m-8 p-5 shadow-black/70 rounded-xl text-violet-600`}
                />
              </div>
            </Link>
          </div>
          <div className="inline-flex flex-col justify-center items-center ">
            <p
              className={`lg:text-lg text-sm rounded-xl px-5 py-3 shadow-lg ${textColor} ${bgColor} inline-block`}
            >
              Github
            </p>
            <Link target="_blank" to="https://www.facebook.com/">
              <div className="hover:scale-125 transition ease-out">
                <BsGithub
                  className={`w-[75px] h-[75px] lg:w-[120px] lg:h-[125px] shadow-xl ${iconColor} m-8 p-5 shadow-black/70 rounded-xl text-sky-600`}
                />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
