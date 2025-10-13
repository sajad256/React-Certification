import React from "react";
import { examniationBoard } from "../Constants";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export default function Examination() {
  return (
    <section>
      <div className="info mb-8">
        <h1 className="text-center font-bold text-3xl md:text-5xl xl:text-6xl">
          <span className="text-[#58C4DC]">Examination</span> Board
        </h1>
      </div>

      {/* Swiper Container */}
      <div className="Main-for-Cards container mx-auto pt-3">
        <Swiper
          modules={[Navigation]}
          navigation={{
            nextEl: ".swiper-button-next-custom",
            prevEl: ".swiper-button-prev-custom",
          }}
          spaceBetween={20}
          slidesPerView={1}
          slidesPerGroup={1}
          loop={false}
          breakpoints={{
            0: { slidesPerView: 1, slidesPerGroup: 1 },
            768: { slidesPerView: 2, slidesPerGroup: 2 },
            1024: { slidesPerView: 2, slidesPerGroup: 2 },
            1280: { slidesPerView: 4, slidesPerGroup: 4 },
          }}
        >
          {examniationBoard.map((data, index) => (
            <SwiperSlide key={index}>
              <div className="Cards bg-[#252529] rounded-3xl overflow-hidden group w-full flex flex-col h-full">
                {/* Image */}
                <div className="img h-44   md:h-56 lg:h-64 overflow-hidden">
                  <img
                    src={data.img}
                    alt=""
                    className="w-full h-full object-cover transition duration-300 filter grayscale group-hover:grayscale-0"
                  />
                </div>

                {/* Info */}
                <div className="info transition-colors duration-300 group-hover:bg-[#212B2E] p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="name">
                      <h1 className="text-white text-2xl font-bold">
                        {data.name}
                      </h1>
                    </div>
                    <div className="job pt-3 w-[180px]">
                      <p className="text-[#979FAD]">{data.job}</p>
                    </div>
                  </div>

                  {/* Icons */}
                  <div className="icons pt-4 flex gap-3 pb-3">
                    {data.icons.map((Icon, idx) => (
                      <div
                        key={idx}
                        className="bg-[#3C3E44] px-2 py-2 rounded-full hover:bg-[#4A9EB2] cursor-pointer"
                      >
                        <Icon size={30} className="text-white" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
