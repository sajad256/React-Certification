import React from "react";
import { footer } from "../Constants";
import { BsBoxArrowUpRight } from "react-icons/bs";

export default function Footer() {
  return (
    <footer className="bg-[#0E0E10]">
      {/* Main section */}
      <div className="main md:flex md:justify-center md:items-center md:gap-20 xl:gap-32 pb-5">
        {footer.map((data, i) => (
          <div
            key={i}
            className="md:flex md:gap-16 w-full max-w-[1200px] lg:gap-44"
          >
            {/* Left section */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left md:w-1/2  md:px-4">
              <div className="logo pt-16 flex justify-center md:justify-start">
                <img className="w-[60px]" src={data.logo} alt="logo" />
              </div>

              <div className="title pt-5 md:text-left">
                <h1 className="font-bold text-4xl text-[#58C4DC]">
                  {data.title}
                </h1>
              </div>

              <div className="social-Media-icons pt-4">
                <div className="reachscocial md:text-left text-white">
                  <p>{data.ReachSocial}</p>
                </div>
                <div className="flex gap-3 pt-3">
                  {data.icons.map((Icon, index) => (
                    <Icon
                      key={index}
                      size={50}
                      className="text-white hover:bg-[#58C4DC] cursor-pointer px-2 py-2 bg-[#1E2023] rounded-full"
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Right section: Lists */}
            <div className="lists flex justify-between px-4 pt-10 md:pt-0 xl:items-start xl:justify-start lg:gap-6 xl:gap-12 xl:pt-32">
              {/* First list */}
              <ul className="flex flex-col justify-center xl:pt-0 ">
                {data.list.map((item, index) => (
                  <li
                    key={index}
                    className="text-[#959DAB] text-sm list-none pt-4 xl:pt-0 flex items-center gap-2 xl:text-base hover:text-[#58C4DC] cursor-pointer"
                  >
                    {item}
                    {item === "Cast your Vote" && (
                      <BsBoxArrowUpRight size={14} className="inline-block" />
                    )}
                  </li>
                ))}
              </ul>

              {/* Second list */}
              <ul className="flex flex-col justify-center md:pt-10 xl:pt-0 cursor-pointer">
                {data.lists1.map((item, index) => (
                  <li
                    key={index}
                    className="text-[#959DAB] text-sm list-none pt-4 xl:pt-0 flex items-center gap-2 xl:text-base hover:text-[#58C4DC] cursor-pointer"
                  >
                    {item}
                    <BsBoxArrowUpRight size={14} className="inline-block" />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom bar */}
      <div className="last-div bg-[#58C4DC] pt-3 pb-3">
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row md:justify-between md:items-center text-center md:text-left px-4">
          <div className="md:pt-0">
            <h1 className="text-sm md:text-base">
              React Certification Powered by{" "}
              <span className="font-bold">Certificates.dev</span>
            </h1>
          </div>
          <div className="pt-3 md:pt-0 text-sm">
            <a href="https://www.linkedin.com/feed/" target="_blank">
              {" "}
              <h1>
                Develop By •{" "}
                <span className="font-bold text-gray-800">Sajad Danish</span>
              </h1>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
