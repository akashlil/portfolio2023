import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate, useRoutes } from "react-router-dom";

export default function OurProject() {
  const navigate = useNavigate();
  const [datas, setDatas] = useState([1, 2, 3, 4, 6, 7, 8, 9, 10]);
  const [projectDatas, setprojectDatas] = useState([]);
  const { themes, h1Color } = useSelector(
    (state) => state.colorchanges.changetheme
  );

  useEffect(() => {
    fetch("/project.json")
      .then((res) => res.json())
      .then((data) => setprojectDatas(data));
  }, []);

  return (
    <div className="px-4 lg:px-32 sm:px-6">
      <p
        className={`text-center text-4xl ${
          themes === `dark`
            ? `from-cyan-200 to-violet-500 bg-clip-text text-transparent bg-gradient-to-br`
            : `${h1Color}`
        }  lg:text-5xl font-bold mb-10 lg:mb-16`}
      >
        My Project
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 ">
        {projectDatas?.map((data) => (
          <div
            className={`${
              themes === `dark`
                ? `shadow-2xl bg-gray-600/20 rounded-xl `
                : `shadow-md rounded-lg border`
            } `}
          >
            <div className="flex items-center gap-3 justify-between p-3 ">
              <div>
                <p
                  className={`text-lg lg:text-3xl ${
                    themes === `dark`
                      ? `bg-clip-text text-transparent bg-gradient-to-br from-cyan-200 to-violet-500`
                      : ``
                  }`}
                >
                  {data.title.slice(0, 20)}
                </p>
              </div>
              <div className="flip-box">
                <div className="flip-box-inner">
                  <Link to={data.livelink} target="_blank">
                    <img
                      src={data.imagelink}
                      alt="Paris"
                      className="rounded-xl hover:cursor-pointer w-36 h-20 lg:w-72 lg:h-40 hover:scale-x-125 transition duration-150  ease-linear hover:shadow-current shadow-2xl"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
