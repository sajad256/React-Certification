import React from "react";
import { certificatesDiv } from "../Constants";
import { MdArrowRightAlt } from "react-icons/md";

export default function CertificatesDiv() {
  return (
    <>
      <div className="info flex justify-center items-center text-center pt-5">
        <h1 className="text-white text-3xl font-bold w-[220px] md:text-5xl md:w-[500px] lg:text-6xl lg:w-[600px]">
          Read the latest from{" "}
          <span className="text-[#58C4DC]">Certificates.dev</span>
        </h1>
      </div>

      <div className="Main-for-Cards container mx-auto pt-12 md:grid md:grid-cols-2 md:justify-items-center space-y-2  xl:grid-cols-3">
        {certificatesDiv.map((data, index) => (
          <div className="Cards bg-[#252529] rounded-3xl overflow-hidden group w-full flex flex-col md:w-[350px] lg:w-[450px] xl:w-[400px]">
            <div className="img">
              <img src={data.img} alt="" className="#" />
            </div>

            {/* Info */}
            <div className="info  p-4 flex-1 flex flex-col justify-between">
              <div>
                <div className="title">
                  <h1 className="text-white text-xl font-bold">{data.title}</h1>
                </div>
                <div className="detail pt-3 ">
                  <p className="text-[#979FAD]">{data.detail}</p>
                </div>
              </div>
            </div>
            <div className="main-for-name-and-time container flex items-center justify-between pb-3">
              <div className="name flex items-center gap-2">
                <img className="w-8 rounded-full" src={data.img1} alt="" />
                <h1 className="text-white font-bold">{data.name}</h1>
              </div>
              <div className="time">
                <p className="text-white text-sm">{data.time}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="btn flex justify-center pt-4 ">
        <button className="bg-[#58C4DC] flex items-center gap-2 font-bold px-2 py-2 rounded-xl">
          See more articles
          <span>
            {" "}
            <MdArrowRightAlt className="pt-1" size={30} />
          </span>
        </button>
      </div>
    </>
  );
}
