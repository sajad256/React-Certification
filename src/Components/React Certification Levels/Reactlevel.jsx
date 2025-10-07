import React from "react";
import { ReactCLevel } from "../Constants";
import { logo } from "../../assets/Imges";
import { IoTimeSharp } from "react-icons/io5";
import { HiMiniDocumentDuplicate } from "react-icons/hi2";

export default function Reactlevel() {
  return (
    <>
      <section>
        <div className="info pt-20">
          <h1 className="text-white text-3xl font-bold text-center container md:text-6xl md:w-9/12 xl:text-6xl">
            React Certification <span className="text-[#58C4DC]">Levels</span>
          </h1>
        </div>
        <div className="Main-for-C-level container pt-4 grid justify-items-center">
          <div className="second  rounded-2xl md:w-11/12 xl:grid xl:grid-cols-3 xl:gap-4">
            {ReactCLevel.map((data, index) => {
              return (
                <div
                  key={index}
                  className={`box  rounded-2xl p-6 my-6 md:my-8 bg-[#252529] ${
                    index === 0
                      ? "hover:border-2 hover:border-[#58C4DC] duration-300"
                      : index === 1
                      ? "hover:border-2 hover:border-[#FF765D] duration-300"
                      : index === 2
                      ? "hover:border-2 hover:border-[#2DC790] duration-300"
                      : ""
                  }`}
                >
                  <div className="icon container">
                    <img className="w-16" src={data.img} alt="" />
                  </div>

                  <div className="title container">
                    <h1
                      key={index}
                      className={`text-[#58C4DC] text-2xl font-bold w-36 pt-4 md:text-4xl md:w-10/12 md:p-4 ${
                        index === 1
                          ? "text-[#FF765D] xl:w-80"
                          : index === 2
                          ? "text-[#2DC790]"
                          : ""
                      }`}
                    >
                      {data.title}
                    </h1>
                  </div>

                  <div
                    className={`main-for-duration-and-question flex  ${
                      index === 1 || index === 2
                        ? "flex-col md:flex-row xl:flex-col "
                        : ""
                    }`}
                  >
                    <div className="duration text-[#969EAC] flex items-center gap-2 p-4">
                      <IoTimeSharp size={20} />
                      <h1>{data.duration}</h1>
                    </div>

                    <div
                      className={`question text-[#969EAC] flex items-center gap-2 ${
                        index === 1 || index === 2
                          ? "mx-auto text-sm w-64 md:w-9/12  xl:w-72"
                          : ""
                      }`}
                    >
                      <HiMiniDocumentDuplicate
                        size={20}
                        className={`${
                          index === 1 || index === 2 ? "w-10 h-full" : ""
                        }`}
                      />
                      <h1>{data.questions}</h1>
                    </div>
                  </div>

                  <div
                    className={`detail text-[#969EAC] container ${
                      index === 1 || index === 2 ? "pt-4" : ""
                    }`}
                  >
                    <p className="text-sm leading-loose container md:text-base">
                      {data.detail}
                    </p>
                  </div>

                  <div
                    key={index}
                    className={`btn-pricing mt-6 ${
                      index === 1 ? "pt-12" : index === 0 ? "pt-20" : ""
                    }`}
                  >
                    <button
                      key={index}
                      className={`text-white px-4 py-3 rounded-lg  ${
                        index === 1
                          ? "border-1 border-[#FF765D]"
                          : index === 2
                          ? "border-1 border-[#2DC790]"
                          : "border-1 border-[#58C4DC]"
                      }`}
                    >
                      View Pricing
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
