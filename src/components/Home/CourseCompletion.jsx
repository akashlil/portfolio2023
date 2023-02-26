import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
  EffectCoverflow,
} from "swiper";

// Import Swiper styles

export default function CourseCompletion() {
  const arrSudent = [
    {
      name: "Allina",
      class: "Eight",
      tottalmark: 850,
      result: "GPA 5",
      image:
        "https://images.pexels.com/photos/1462630/pexels-photo-1462630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      name: "Anny fa",
      class: "Eight",
      tottalmark: 850,
      result: "GPA 5",
      image:
        "https://images.pexels.com/photos/3768126/pexels-photo-3768126.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      name: "Ahik ahamed",
      class: "Eight",
      tottalmark: 850,
      result: "GPA 5",
      image:
        "https://images.pexels.com/photos/1329494/pexels-photo-1329494.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      name: "Ahik ahamed",
      class: "Eight",
      tottalmark: 850,
      result: "GPA 5",
      image:
        "https://images.pexels.com/photos/4143797/pexels-photo-4143797.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      name: "Ahik ahamed",
      class: "Eight",
      tottalmark: 850,
      result: "GPA 5",
      image: "https://images.pexels.com/photos/448877/pexels-photo-448877.jpeg",
    },
    {
      name: "Ahik ahamed",
      class: "Eight",
      tottalmark: 850,
      result: "GPA 5",
      image:
        "https://images.pexels.com/photos/3793238/pexels-photo-3793238.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      name: "Ahik ahamed",
      class: "Eight",
      tottalmark: 850,
      result: "GPA 5",
      image:
        "https://images.pexels.com/photos/3755716/pexels-photo-3755716.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      name: "Ahik ahamed",
      class: "Eight",
      tottalmark: 850,
      result: "GPA 5",
      image:
        "https://images.pexels.com/photos/3755716/pexels-photo-3755716.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      name: "Ahik ahamed",
      class: "Eight",
      tottalmark: 850,
      result: "GPA 5",
      image:
        "https://images.pexels.com/photos/3755716/pexels-photo-3755716.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      name: "Ahik ahamed",
      class: "Eight",
      tottalmark: 850,
      result: "GPA 5",
      image:
        "https://images.pexels.com/photos/3755716/pexels-photo-3755716.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      name: "Ahik ahamed",
      class: "Eight",
      tottalmark: 850,
      result: "GPA 5",
      image:
        "https://images.pexels.com/photos/3755716/pexels-photo-3755716.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ];

  return (
    <div className="px-4 sm:px-6 lg:px-32 text-white ">
      <div>
        <p className="text-4xl lg:text-5xl mb-16 text-center font-semibold">
          Course Completion
        </p>
        <div>
          <div className=" ">
            <Swiper
              modules={[
                Navigation,
                Pagination,
                Scrollbar,
                A11y,
                Autoplay,
                EffectCoverflow,
              ]}
              effect={"coverflow"}
              grabCursor={true}
              coverflowEffect={{
                rotate: 45,
                stretch: 0,
                depth: 200,
                modifier: 1,
                slideShadows: false,
              }}
              spaceBetween={5}
              slidesPerView={4}
              navigation
              autoplay={{ delay: 200, disableOnInteraction: false }}
              speed={800}
              // pagination={{ clickable: true }}
              scrollbar={{ draggable: true }}
              centeredSlides={true}
              // onSwiper={(swiper) => console.log(swiper)}
              // onSlideChange={() => console.log("slide change")}
            >
              {arrSudent?.map((student) => (
                <SwiperSlide className="p-10">
                  <div className="flex relative group h-[350px] w-[200px] bg-white rounded-2xl">
                    <img
                      src={student.image}
                      alt=""
                      srcset=""
                      className="group-hover:h-[250px] group-hover:w-[200px]  h-[350px] w-[200px] object-cover bottom-0 transition-all ease-in-out delay-75 duration-200 z-10 rounded-2xl"
                    />
                    <hr />
                    <div className="absolute bottom-0 group-hover:text-indigo-900 text-white z-30 break-all  text-sm p-2 ">
                      <p>Name: {student.name}</p>
                      <p>Class: {student.class}</p>
                      <p>Tottal Mark: {student.tottalmark}</p>
                      <p>Result: {student.result}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}
