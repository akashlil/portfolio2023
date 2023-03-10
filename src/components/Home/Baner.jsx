import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";

export default function Baner() {
  const { themes, h1Color } = useSelector(
    (state) => state.colorchanges.changetheme
  );

  return (
    <div className="px-4 sm:px-6 lg:px-32 backGroundGrid border-b border-gray-700 lg:bg-right  bg-no-repeat relative h-[100vh]">
      <div className="grid lg:grid-cols-2 place-content-center place-items-center gap-10 lg:gap-0 h-full">
        <div>
          <div className="text-center lg:text-start">
            <p className="text-2xl">Hello</p>
            <p className="text-5xl font-bold">
              Md{" "}
              <span className={`${h1Color}`}>
                <Typewriter
                  words={["Akash munshi"]}
                  loop={5}
                  typeSpeed={70}
                  delaySpeed={1000}
                />
              </span>
            </p>
            <p className="mt-5">Full Stack Developer</p>
            <p className="mb-8">
              I'm a Full Stack Developer, and I'm very passionate and dedicated
              to my work.
            </p>
            <Link
              target="_blank"
              to="https://docs.google.com/document/d/1PDITbwCTCk0Ap3HBq4CaMWWGecW-QIoX5lbXzizKOcM/"
            >
              <button className="text-gray-400 py-2 px-2 ring-2 ring-slate-700 bg-black  rounded-full hover:bg-gray-800">
                My Resume Download
              </button>
            </Link>
          </div>
        </div>
        <div className="lg:place-self-end place-self-center ">
          <div
            className={`border ${
              themes === `light` ? `bg-white` : `bg-black/50`
            } border-gray-500/25 rounded-md h-72 lg:w-[500px]`}
          >
            <div>
              <div className="p-3 text-blue-500">
                <Typewriter
                  words={[
                    `
                      const colorChane = createSlice({
                        name: "colorchange",
                        initialState,
                        reducers: {
                          lightToDark: (state, action) => {
                            if (!state.changetheme.status) {
                              state.changetheme.themes = "dark";
                            } else {
                              state.changetheme.themes = "light";
                              state.changetheme.bgColor = "bg-white";
                              state.changetheme.textColor = "text-balck";
                            }
                          },
                        },
                      });
                    `,
                  ]}
                  loop
                  cursor
                  cursorStyle="_"
                  cursorColor="blue"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class={`${
          themes === `light` ? `hidden` : `block`
        } absolute left-10 top-40 rotate-45 blur-3xl rounded-3xl bg-sky-800 opacity-40 h-24 w-[250px] lg:h-32 lg:w-[450px] xl:h-44 xl:w-[600px]`}
      ></div>
      <div
        class={`${
          themes === `light` ? `hidden` : `block`
        } absolute right-8 top-[60%] rotate-12 rounded-3xl bg-sky-800 opacity-60 blur-3xl h-24 w-[300px] lg:h-32 lg:w-[450px] xl:h-44 xl:w-[600px]`}
      ></div>
    </div>
  );
}
