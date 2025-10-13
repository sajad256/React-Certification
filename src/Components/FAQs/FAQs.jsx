import React, { useState } from "react";
import { FaChevronDown, FaChevronUp, FaStar, FaCode } from "react-icons/fa";
import { IoMdWallet } from "react-icons/io";
import { BsBootstrapFill, BsFillQuestionCircleFill } from "react-icons/bs";
import { MdEditDocument } from "react-icons/md";
import { accordionData } from "../Constants/index"; // <-- your data array

export default function CustomAccordion() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      <div className="info text-center pt-5 ">
        <h1 className="text-[#58C4DC] text-4xl font-bold md:text-5xl lg:text-6xl xl:text-7xl">
          FAQs
        </h1>
      </div>
      <div className="w-full max-w-2xl container pt-5 space-y-3  pb-20">
        {accordionData.map((item, index) => (
          <div key={index} className="border-gray-700">
            <button
              onClick={() => toggleAccordion(index)}
              className="flex items-center justify-between rounded-tl-2xl rounded-tr-2xl w-[300px] md:w-[670px] xl:w-full p-4 text-left bg-[#252529]"
            >
              <div className="flex items-center gap-1">
                {/* Icons based on title */}
                {item.title.toLowerCase().includes("general") && (
                  <FaStar size={20} className="text-[#58C4DC]" />
                )}
                {item.title.toLowerCase().includes("payment") && (
                  <IoMdWallet size={20} className="text-[#58C4DC]" />
                )}
                {item.title.toLowerCase().includes("self") && (
                  <FaCode size={20} className="text-[#58C4DC]" />
                )}
                {item.title.toLowerCase().includes("bootcamp") && (
                  <BsBootstrapFill size={20} className="text-[#58C4DC]" />
                )}
                {item.title.toLowerCase().includes("examination") && (
                  <MdEditDocument size={20} className="text-[#58C4DC]" />
                )}
                {item.title.toLowerCase().includes("prerequisites") && (
                  <BsFillQuestionCircleFill
                    size={20}
                    className="text-[#58C4DC]"
                  />
                )}

                <span
                  key={index}
                  className={`text-white font-semibold ${
                    index === 5 ? "text-sm" : ""
                  }`}
                >
                  {item.title}
                </span>
              </div>

              <span className="text-white">
                {activeIndex === index ? <FaChevronUp /> : <FaChevronDown />}
              </span>
            </button>

            {activeIndex === index && (
              <div className="p-4 text-gray-300 bg-[#252529] rounded-bl-2xl rounded-br-2xl">
                {item.content}
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
}
