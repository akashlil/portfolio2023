import React from "react";
import { Link } from "react-router-dom";

export default function Myskill() {
  return (
    <div className="text-white px-4 lg:px-32 sm:px-6">
      <div>
        <div className="my-20">
          <p className="text-4xl lg:text-6xl  font-semibold text-center from-inherit">
            My Skill With Technology
          </p>
          <p className="text-center mt-6 text-lg from-inherit">
            Full Satck Developer
          </p>
        </div>
        <div className="flex gap-2  lg:gap-4 justify-center items-center flex-wrap">
          <div className="inline-flex flex-col justify-center items-center">
            <p className="lg:text-lg text-sm rounded-xl px-5 py-3 shadow-lg bg-slate-800/80 inline-block">
              Google Meet
            </p>
            <Link target="_blank" to="https://meet.google.com/">
              <div className="hover:scale-125 transition ease-out">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/9/9b/Google_Meet_icon_%282020%29.svg"
                  alt=""
                  className="w-[75px] h-[75px] lg:w-[125px] lg:h-[125px] shadow-xl bg-white m-8 p-5 shadow-black/10 rounded-xl"
                />
              </div>
            </Link>
          </div>
          <div className="inline-flex flex-col justify-center items-center ">
            <p className="lg:text-lg text-sm rounded-xl px-5 py-3 shadow-lg bg-slate-800/80 inline-block">
              Zoom
            </p>
            <Link target="_blank" to="https://zoom.us/download">
              <div className="hover:scale-125 transition ease-out">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/1/11/Zoom_Logo_2022.svg"
                  alt=""
                  className="w-[75px] h-[75px] lg:w-[120px] lg:h-[125px] shadow-xl bg-white m-8 p-5 shadow-black/10 rounded-xl"
                />
              </div>
            </Link>
          </div>
          <div className="inline-flex flex-col justify-center items-center ">
            <p className="lg:text-lg text-sm rounded-xl px-5 py-3 shadow-lg bg-slate-800/80 inline-block">
              WhatsApp
            </p>
            <Link target="_blank" to="https://www.whatsapp.com/download">
              <div className="hover:scale-125 transition ease-out">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                  alt=""
                  className="w-[75px] h-[75px] lg:w-[125px] lg:h-[125px] shadow-xl bg-white m-8 p-5 shadow-black/10 rounded-xl"
                />
              </div>
            </Link>
          </div>
          <div className="inline-flex flex-col justify-center items-center ">
            <p className="lg:text-lg text-sm rounded-xl px-5 py-3 shadow-lg bg-slate-800/80 inline-block">
              Facebook Group
            </p>
            <Link target="_blank" to="https://www.facebook.com/">
              <div className="hover:scale-125 transition ease-out">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/b/b8/2021_Facebook_icon.svg"
                  alt=""
                  className="w-[75px] h-[75px] lg:w-[125px] lg:h-[125px] shadow-xl bg-white m-8 p-5 shadow-black/10 rounded-xl"
                />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
