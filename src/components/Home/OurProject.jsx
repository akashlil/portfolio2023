import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Mousewheel } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

export default function OurProject() {
  const [datas, setDatas] = useState([]);
  useEffect(() => {
    fetch("https://jobbox-server-akashlil.vercel.app/jobs")
      .then((res) => res.json())
      .then((data) => setDatas(data));
  }, []);

  return (
    <div className="text-white my-28 px-4 lg:px-32 sm:px-6">
      <div className="space-y-20">
        <p className="text-4xl lg:text-6xl text-center font-semibold">
          My Project List
        </p>
        <div className="space-y-20 ">
          <Swiper
            direction={"vertical"}
            slidesPerView={1}
            spaceBetween={30}
            mousewheel={true}
            pagination={{
              clickable: true,
            }}
            autoplay={{ disableOnInteraction: false, delay: 800 }}
            modules={[Mousewheel, Pagination, Autoplay]}
            className="h-[400px] w-full"
          >
            {datas?.data?.map((data) => (
              <SwiperSlide className="grid grid-cols-1">
                <div className="shadow-2xl h-full p-3 lg:p-5 rounded-xl bg-black/50 lg:hover:bg-[#34da93] group">
                  <div className="grid gap-1 lg:grid-cols-2 justify-between items-center">
                    <div className="lg:my-5 lg:mr-8 lg:space-y-2">
                      <p className="text-dm lg:text-3xl ">
                        Online English tutors & teachers for private{" "}
                      </p>
                      <button className="text-lg mr-2 bg-black group-hover:bg-black/50 py-1 px-1 b rounded my-8">
                        Rakib Isalm
                      </button>
                      <button className="text-lg bg-black group-hover:bg-black/50 py-1 px-1 b rounded my-8">
                        Bsc in Science
                      </button>

                      <p className="text-base ">
                        Enjoy the most effective and enjoyable journey with
                        interactive
                      </p>
                      <button className="my-2 lg:px-7 inline text-start p-2  lg:py-3 rounded-md bg-white text-black hover:opacity-80">
                        {`Details ->`}
                      </button>
                    </div>
                    <div className="lg:flex justify-center items-center ">
                      <img
                        src="https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA17MXlp.img?w=800&h=415&q=60&m=2&f=jpg"
                        alt=""
                        srcset=""
                        className=" lg:z-20 lg:w-[550px] lg:h-[360px] rounded lg:rounded-3xl lg:group-hover:scale-110 group-hover:shadow-2xl lg:group-hover:shadow-current group-hover:bg-white  ease-linear transition origin-center lg:origin-right"
                      />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
