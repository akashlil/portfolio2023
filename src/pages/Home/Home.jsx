import React from "react";
import Baner from "../../components/Home/Baner";
import OurProject from "../../components/Home/OurProject";
import CourseCompletion from "../../components/Home/CourseCompletion";
import Myskill from "../../components/Home/MySkill";
import OurImpact from "../../components/Home/OurImpact";

export default function Home() {
  return (
    <>
      <div className="px-4">
        <Baner />
        <OurImpact />
        <OurProject />
        <CourseCompletion />
        <Myskill />
      </div>
    </>
  );
}
