import React from "react";

export default function OurImpact() {
  return (
    <div className="px-2 lg:px-32 sm:px-6 lg:mt-14">
      <div className="bg-indigo-900/30 mt-9 lg:mt-0 lg:p-5 rounded-lg mb-16">
        <div className="lg:flex p-5 gap-5 justify-between lg:space-x-10">
          <div className="mb-3 text-center">
            <div className="inline-block px-10 py-5 bg-gradient-to-tl from-violet-600 to-red-600 rounded-full">
              <p className="text-3xl font-bold">3</p>
            </div>
            <p className="text-lg">Work With Companies</p>
          </div>
          <div className="mb-3 text-center">
            <div className="inline-block px-10 py-5 bg-gradient-to-tl from-cyan-700 to-purple-600 rounded-full">
              <p className="text-3xl font-bold">Find</p>
            </div>
            <p className="text-lg">job States</p>
          </div>
          <div className="mb-3 text-center">
            <div className="inline-block px-10 py-5 bg-gradient-to-tl from-blue-600 to-red-600 rounded-full">
              <p className="text-3xl font-bold">200+</p>
            </div>
            <p className="text-lg">Project Complects</p>
          </div>
        </div>
      </div>
    </div>
  );
}
