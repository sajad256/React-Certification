import React from "react";
import { certificatesData } from "../Constants";

export default function Certificates() {
  return (
    <section>
      <div className="main">
        {certificatesData.map((data, i) => (
          <div
            key={i}
            className="second xl:flex xl:items-center xl:justify-center xl:flex-row-reverse xl:gap-10"
          >
            {/* Image section */}
            <div className="main-for-img-xl flex justify-center xl:justify-end">
              <div className="img">
                <img
                  className="w-[200px] md:w-[600px] xl:w-11/12 max-w-[600px]"
                  src={data.img1}
                  alt=""
                />
              </div>
            </div>

            {/* Text section */}
            <div className="main-for-xl-screen xl:w-[900px] flex flex-col xl:items-start xl:justify-center">
              <div className="certificates-img container flex justify-center xl:justify-start">
                <img className="w-[200px] xl:ms-8" src={data.img} alt="" />
              </div>

              <div className="title container px-5 mt-4">
                <h1 className="text-white font-bold text-2xl xl:text-3xl">
                  {data.title}
                </h1>
              </div>

              <div className="detail">
                <p className="text-white px-5 xl:w-[650px] mt-3 xl:text-xl">
                  {data.detail}
                </p>
              </div>

              <div className="btn flex justify-center xl:justify-start mt-4 xl:ps-10">
                <button className="px-5 py-3 bg-[#3D4FEC] text-white rounded-xl font-bold">
                  Cast your Vote
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
