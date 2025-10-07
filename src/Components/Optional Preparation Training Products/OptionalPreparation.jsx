import React from "react";
import { optionalPreparation } from "../Constants";

export default function OptionalPreparation() {
  return (
    <>
      <section>
        <div className="info flex justify-center pt-20">
          <h1 className="text-white text-center w-64 font-bold text-3xl md:text-5xl md:w-8/12 md:leading-snug lg:text-6xl xl:w-6/12 xl:leading-snug">
            <span className="text-[#58C4DC]">Optional Preparation</span>{" "}
            Training Products
          </h1>
        </div>
        <div className="Main-for-boxes">
          <div className="second container pt-5  md:grid md:justify-items-center space-y-6 xl:grid xl:grid-cols-2 xl:space-y-0">
            {optionalPreparation.map((data, index) => {
              const Icon = data.icon;
              const Check = data.check;
              return (
                <div
                  key={index}
                  className="box rounded-3xl bg-[#252529] md:w-11/12"
                >
                  <div className="icon flex justify-center md:justify-center md:w-2/12 items-center pt-3">
                    <Icon className="text-[#58C4DC]" size={50} />
                  </div>
                  <div className="title pt-5 flex justify-center md:w-7/12 lg:w-5/12 xl:w-8/12">
                    <h1 className="text-white  text-2xl font-bold md:text-4xl ">
                      {data.title}
                    </h1>
                  </div>
                  <div className="detail pt-4 grid  md:ps-7   md:w-10/12">
                    <p className="text-[#888F9B] container leading-loose md:text-lg">
                      {data.detail}
                    </p>
                  </div>
                  {/* List with check icons in flex */}
                  <div className="main-for-check-icon-and-list">
                    <ul>
                      {data.list.map((item, i) => (
                        <li
                          key={i}
                          className="flex items-center container  gap-3 text-center md:ps-10"
                        >
                          <Check
                            className="text-[#58C4DC]  md:mt-6"
                            size={20}
                          />
                          <span
                            key={index}
                            className={`text-[#888F9B]  text-sm w-40 leading-loose pt-4 md:w-6/12 lg:w-5/12 md:text-lg xl:w-8/12 ${
                              index === 1
                                ? "md:w-7/12 lg:w-5/12 xl:w-[405px]"
                                : ""
                            }`}
                          >
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div
                    key={index}
                    className={`btn pt-4 ${
                      index === 1 ? "xl:flex xl:items-end  xl:h-40" : ""
                    }`}
                  >
                    <button className="text-white border-1 border-[#58C4DC] px-4 py-3 rounded-lg hover:bg-[#58C4DC] duration-500 cursor-pointer">
                      Learn more
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
