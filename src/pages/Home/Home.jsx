import React, { useState } from "react";
import Baner from "../../components/Home/Baner";
import OurProject from "../../components/Home/OurProject";
import CourseCompletion from "../../components/Home/CourseCompletion";
import Footer from "../../layout/Main/Footer";
import Myskill from "../../components/Home/MySkill";
import OurImpact from "../../components/Home/OurImpact";

export default function Home() {
  const [changeColor, setchangeColor] = useState(true);

  const [bgColor, setBgColor] = useState("bg-[#192539]");

  const channavbardd = () => {
    if (parseInt(window.scrollY) <= 600) {
      setBgColor("bg-[#192539]");
      setchangeColor(true);
    } else if (parseInt(window.scrollY) <= 1000) {
      setBgColor("bg-[#4450e6]");
      setchangeColor(true);
    } else if (parseInt(window.scrollY) <= 1500) {
      setBgColor("bg-[#3b9bb7]");
      setchangeColor(true);
    } else if (parseInt(window.scrollY) <= 2000) {
      setBgColor("bg-[#35d298]");
      setchangeColor(true);
    } else if (parseInt(window.scrollY) <= 2500) {
      setBgColor("bg-[#382561]");
      setchangeColor(true);
    }
  };
  console.log(window.scrollY);

  window.addEventListener("scroll", channavbardd);
  return (
    <>
      <div
        className={`
                transition  duration-700  ease-in-out z-50 ${
                  changeColor ? bgColor : "bg-black"
                }
                
              `}
      >
        <div className="px-4">
          <Baner />
          <OurProject />
          <OurImpact />
          <CourseCompletion />
          <Myskill />

          <Footer />
        </div>
      </div>
    </>
  );
}
