import React from "react";
import { stepstoCertification } from "../Constants";

export default function Certification() {
  return (
    <>
      <section>
        <div className="info text-center pt-20">
          <h1 className="text-white text-4xl font-bold">
            Steps to <span className="text-[#58C4DC]">Certification</span>
          </h1>
        </div>
        <div
          className={`Main-for-box container pt-10 flex flex-col gap-6 xl:grid xl:grid-cols-2`}
        >
          {stepstoCertification.map((data, index) => {
            return (
              <div
                key={index}
                className={`for-XL-grid md:grid md:justify-items-center ${
                  index === 2 ? "xl:col-span-2" : ""
                }`}
              >
                <div className="card-1 rounded-xl p-6 bg-[#252529] shadow-lg md:w-11/12 xl:w-full">
                  {/* Flex row: Step + Icon + Info */}
                  <div className="flex items-start gap-4">
                    {/* Step + Icon */}
                    <div className="flex flex-col items-center md:w-32">
                      <h1 className="text-[#58C4DC] font-bold text-2xl">
                        {data.step}
                      </h1>
                      <div className="mt-3">
                        {data.icon && <data.icon size={50} color="#58C4DC" />}
                      </div>
                    </div>

                    {/* Info column */}
                    <div className="flex-1 flex flex-col pt-12">
                      <h1 className="text-[#E8E6E6] text-xl font-bold md:text-4xl">
                        {data.title}
                      </h1>
                      <p className="text-[#979FAD] text-sm w-full pt-2 leading-loose md:text-xl">
                        {data.detail}
                      </p>
                    </div>
                  </div>

                  {/* Third card images */}
                  {index === 2 && data.img && Array.isArray(data.img) && (
                    <div className="mt-4 w-full flex flex-col xl:flex-row xl:gap-4">
                      {data.img.map((src, i) => (
                        <img
                          key={i}
                          src={src}
                          alt={`Step ${index + 1} image ${i + 1}`}
                          className="w-full xl:w-1/2 h-auto object-cover rounded-md pt-3"
                        />
                      ))}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
        
      </section>
    </>
  );
}
