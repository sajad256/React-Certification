import React from "react";
import { testimonials } from "../Constants";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function Testimonials() {
  return (
    <section>
      <div className="info pt-10">
        <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl  font-bold text-[#58C4DC] text-center">
          Testimonials
        </h1>
      </div>

      <div className="Main-for-Testimonials container pt-4">
        {/* Swiper for screens < 1280 */}
        <div className="xl:hidden">
          <Swiper
            spaceBetween={20}
            slidesPerView={1} // mobile
            breakpoints={{
              768: { slidesPerView: 2 }, // MD
              1024: { slidesPerView: 2 }, // LG
            }}
          >
            {testimonials.map((data, index) => {
              const Icon = data.icon;
              return (
                <SwiperSlide key={index}>
                  <div
                    className={`box bg-[#222225] rounded-xl flex flex-col justify-between h-full mx-auto ${
                      index === 0 ? "h-[795px] md:h-[660px] lg:h-[540px]" : ""
                    } xl:w-[600px]`}
                  >
                    <div className="icon p-3">
                      <Icon className="text-[#58C4DC]" size={30} />
                    </div>
                    <div className="detail container flex-1">
                      <p className="text-white">{data.detail}</p>
                    </div>
                    <div className="main-for-img-and-name flex pt-4 container gap-3 pb-2">
                      <div className="img">
                        <img
                          className="w-16 rounded-full"
                          src={data.img}
                          alt=""
                        />
                      </div>
                      <div className="name-job">
                        <h1 className="text-white text-sm">{data.name}</h1>
                        <p className="text-white text-sm">{data.job}</p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>

        <div className="hidden xl:flex justify-center gap-6">
          {testimonials.map((data, index) => {
            const Icon = data.icon;
            return (
              <div
                key={index}
                className={`box bg-[#222225] rounded-xl flex flex-col justify-between h-full w-[600px] ${
                  index === 0 ? "h-[450px]" : ""
                }`}
              >
                <div className="icon p-3">
                  <Icon className="text-[#58C4DC]" size={30} />
                </div>
                <div className="detail container flex-1">
                  <p className="text-white">{data.detail}</p>
                </div>
                <div className="main-for-img-and-name flex pt-4 container gap-3 pb-2">
                  <div className="img">
                    <img className="w-16 rounded-full" src={data.img} alt="" />
                  </div>
                  <div className="name-job">
                    <h1 className="text-white text-sm">{data.name}</h1>
                    <p className="text-white text-sm">{data.job}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
