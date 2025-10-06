import React from "react";
import {
  auroraScharffData,
  benefitsofReact,
  reactCompanies,
} from "../Constants";

export default function ReactCompanies() {
  return (
    <>
      <section>
        <div className="Main pt-20 text-center">
          <div className="info mb-10 md:flex md:justify-center">
            <h1 className="text-4xl text-white font-bold md:text-5xl md:w-9/12">
              {reactCompanies.title.split(" ").map((word, index) =>
                word === "React" ? (
                  <span key={index} className="text-[#58C4DC]">
                    {word}{" "}
                  </span>
                ) : (
                  word + " "
                )
              )}
            </h1>
          </div>

          <div className="for-img container grid justify-items-center items-center md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {reactCompanies.logos.map((logo, index) => (
              <img
                key={index}
                src={logo}
                alt=""
                className={`w-32 pt-4 ${index === 5 ? "w-60" : ""} 
                ${
                  index === 4
                    ? "lg:col-start-2"
                    : index === 5
                    ? "lg:col-start-3"
                    : ""
                }
                 ${
                   index === 5
                     ? "xl:col-start-3 xl:row-start-2"
                     : "xl:row-start-1"
                 }`}
              />
            ))}
          </div>
        </div>
        <div className="Main-for-benefits mt-14 md:mt-20">
          <div className="info flex justify-center">
            <h1 className="text-white text-3xl font-bold text-center md:text-6xl w-10/12 md:leading-tight">
              Benefits of getting your{" "}
              <span className="text-[#58C4DC]">React</span> Certification
            </h1>
          </div>
          {benefitsofReact.map((data, index) => {
            return (
              <>
                <div
                  className={`reactCompetency  xl:flex xl:items-center xl:justify-between  ${
                    index === 1
                      ? "xl:flex xl:flex-row-reverse gap-10"
                      : index === 0
                      ? "mt-10"
                      : ""
                  }`}
                >
                  <div
                    className={`info 
                       xl:w-6/12  xl:h-auto xl:space-y-0 text-center xl:text-left
                       ${index === 2 ? "xl:w-9/12" : ""}
                       `}
                  >
                    <div className="container xl:text-left">
                      <h1 className="text-white text-xl font-bold md:text-4xl lg:text-5xl xl:text-3xl">
                        {data.headTitle
                          .split(
                            new RegExp(
                              "(" +
                                (index === 0
                                  ? "React competency"
                                  : index === 1
                                  ? "Enhanced"
                                  : "benefit your team") +
                                ")",
                              "g"
                            )
                          )
                          .map((part, i) => (
                            <span
                              key={i}
                              className={
                                (index === 0 && part === "React competency") ||
                                (index === 1 && part === "Enhanced") ||
                                (index === 2 && part === "benefit your team")
                                  ? "text-[#58C4DC]"
                                  : ""
                              }
                            >
                              {part}
                            </span>
                          ))}
                      </h1>

                      <p className="text-[#878E8E] lg:text-lg mt-3">
                        {data.detail}
                      </p>
                    </div>
                  </div>

                  <div className="img flex justify-center xl:items-center xl:mt-0">
                    <img className="" src={data.img} alt="" />
                  </div>
                </div>
              </>
            );
          })}
        </div>
        <div className="container md:flex md:justify-center">
          <div className="Main-for-Meet-your-instructor bg-[#242428] md:w-11/12 xl:w-10/12 xl:h-80 rounded-3xl">
            <div className="second-for-meet-your-instructor container lg:flex">
              {auroraScharffData.map((data, index) => {
                return (
                  <>
                    <div className="aurora-scharff pt-10  lg:w-80">
                      <div className="img flex justify-center">
                        <img
                          className="rounded-full w-28"
                          src={data.img}
                          alt=""
                        />
                      </div>
                      <div className="name text-center pt-4">
                        <h1 className="text-white text-2xl font-bold">
                          {data.name.split(" ").map((word, index) =>
                            index === 0 ? (
                              <span key={index} className="text-[#58C4DC]">
                                {word}{" "}
                              </span>
                            ) : (
                              word + " "
                            )
                          )}
                        </h1>
                      </div>
                      <div className="job flex justify-center lg:text-center">
                        <h1 className="text-[#979FAD] pt-4 w-48 md:w-96 lg:w-36">
                          {data.job}
                        </h1>
                      </div>
                    </div>
                    <div className="meet-your-instructor pt-14">
                      <div className="info">
                        <h1 className="text-white text-4xl font-bold leading-snug container md:text-4xl xl:text-5xl">
                          {data.instructor.split(" ").map((word, index) =>
                            word.toLowerCase() === "instructor" ? (
                              <span key={index} className="text-[#58C4DC]">
                                {word}{" "}
                              </span>
                            ) : (
                              word + " "
                            )
                          )}
                        </h1>

                        <p className="text-[#979FAD] pt-4 container xl:text-lg pb-3">
                          {data.detail}
                        </p>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
