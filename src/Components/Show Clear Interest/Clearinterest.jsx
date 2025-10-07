import React from "react";
import { clearInterestData } from "../Constants";

export default function Clearinterest() {
  return (
    <>
      <section>
        <div className="info pt-20">
          <h1 className="text-center text-4xl font-bold text-white md:text-6xl xl:text-7xl">
            Research show <span className="text-[#58C4DC]">clear interest</span>{" "}
            in achieving certification
          </h1>
          <p className="container pt-4 text-center text-[#979FAD] md:text-xl md:w-10/12 lg:w-[650px]">
            We received more than 2,300 responses from React Developers to a
            pre-launch survey conducted about the Certification Program.
          </p>
        </div>
        <div className="Main-for-boxes">
          <div className="second container mt-10 md:grid md:grid-cols-2 md:justify-items-center xl:grid-cols-4">
            {clearInterestData.map((data, index) => {
              const Icon = data.icon;
              return (
                <div
                  key={index}
                  className="box bg-[#252529] p-6 rounded-2xl shadow-lg mt-4 md:w-[340px] lg:w-[460px] xl:w-72"
                >
                  <div className="main-for-icon-and-perentage flex items-center gap-4 md:block">
                    <div className="icon">
                      <Icon className="text-[#58C4DC]" size={50} />
                    </div>
                    <div className="persentage md:p-4">
                      <h1 className="text-[#58C4DC] text-3xl md:text-5xl font-bold">
                        {data.persentage}
                      </h1>
                    </div>
                  </div>
                  <div className="detail pt-4">
                    <p className="text-[#979FAD] text-xl">{data.detail}</p>
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
