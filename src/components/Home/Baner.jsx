import React from "react";

export default function Baner() {
  return (
    <div className="px-4 sm:px-6 lg:px-32 bg-[url('/public/banner.png')] lg:bg-right  bg-no-repeat  h-[100vh]">
      <div className="flex h-full  justify-center lg:justify-start items-center">
        <div className="space-y-6 text-center lg:text-start text-white">
          <p className="text-5xl text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-orange-600 lg:from-white lg:to-violet-500 md:text-5xl font-bold">
            Are You Student or Teacher?
          </p>
          <p className="lg:w-3/5 text-justify lg:text-start">
            Start by modeling the process of writing a paragraph. Show students
            how to write a topic sentence, supporting sentences, and a
            concluding sentence. Provide examples of well-written paragraphs,
            and discuss why they are effective. Use graphic organizers: Graphic
            organizers can help students organize their thoughts and ideas
            before writing a paragraph. There are many types of graphic
            organizers available, such as web diagrams, flowcharts, and mind
            maps.
          </p>{" "}
          <button
            type="button"
            className="font-semibold px-7 py-3 rounded-full bg-white text-black hover:opacity-80"
          >
            {`Regitser ->`}
          </button>
        </div>
      </div>
    </div>
  );
}
