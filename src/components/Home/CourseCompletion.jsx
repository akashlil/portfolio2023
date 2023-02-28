import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Mousewheel } from "swiper";
import { useSelector } from "react-redux";

export default function CourseCompletion() {
  const { h1Color, themes } = useSelector(
    (state) => state.colorchanges.changetheme
  );

  const [datas, setDatas] = useState([]);
  useEffect(() => {
    fetch("/course.json")
      .then((res) => res.json())
      .then((data) => setDatas(data));
  }, []);

  return (
    <div className="my-28 px-4 lg:px-32 sm:px-6">
      <div className="space-y-20">
        <p className="text-4xl lg:text-5xl  text-center font-bold">
          My <span className={`${h1Color}`}> Course Completion </span> List
        </p>
        <div className="space-y-20  relative">
          <Swiper
            direction={"vertical"}
            slidesPerView={1}
            spaceBetween={30}
            mousewheel={false}
            speed={1000}
            grabCursor={true}
            pagination={{
              clickable: true,
            }}
            loop
            autoplay={{ disableOnInteraction: false, delay: 500 }}
            modules={[Mousewheel, Pagination, Autoplay]}
            className="h-[400px] w-full"
          >
            {datas?.map((data) => (
              <SwiperSlide className="grid grid-cols-1">
                <div
                  className={`shadow-2xl h-full p-3 lg:p-5 rounded-xl ${
                    themes == `dark`
                      ? `bg-gray-900 lg:bg-blue-400/20`
                      : ` border shadow`
                  }  group overflow-hidden`}
                >
                  <div className="grid gap-1 lg:grid-cols-2 justify-between items-center">
                    <div className="lg:my-5 lg:mr-8 lg:space-y-2">
                      <p className="text-dm lg:text-3xl ">{data.name}</p>
                      {data?.subject.map((data) => (
                        <button className="text-sm mr-2 uppercase bg-blue-700/90 group-hover:bg-blue-700 py-1 px-1 b rounded my-2 lg:my-8">
                          {data}
                        </button>
                      ))}

                      <p className="text-base ">{data.itName}</p>
                      <button className="my-2 lg:px-7 inline text-start p-2  lg:py-3 rounded-md bg-blue-700/90 group-hover:bg-blue-700 hover:opacity-90">
                        Details
                      </button>
                    </div>
                    <div className="lg:flex justify-center items-center ">
                      <img
                        src={data.images}
                        alt=""
                        srcset=""
                        className=" lg:w-[550px] lg:h-[360px] rounded lg:rounded-3xl lg:group-hover:scale-110 group-hover:shadow-2xl lg:group-hover:shadow-current group-hover:bg-white  ease-linear transition origin-center lg:origin-right"
                      />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="w-[300px] bg-indigo-600 h-20 lg:w-[200px] absolute top-60 lg:top-10 lg:left-[0%] opacity-40 rotate-12 shadow-2xl shadow-current blur-3xl"></div>
        </div>
      </div>
    </div>
  );
}
