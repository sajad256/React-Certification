import React, { useState } from "react";
import { pricing } from "../Constants/index";

export default function Pricing() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section>
      {/* Header */}
      <div className="info pt-20">
        <h1 className="text-4xl font-bold text-[#58C4DC] text-center md:text-7xl">
          Pricing
        </h1>
        <p className="text-white text-center container pt-10 text-lg font-bold w-[300px] md:text-3xl md:w-[500px] lg:w-[650px]">
          Get your React Certification now during the Launch and enjoy these{" "}
          <span className="text-[#58C4DC]">benefits:</span>
        </p>
      </div>

      {/* Pricing Boxes */}
      <div className="Main-for-Boxes overflow-hidden">
        <div className="second container pt-10 md:grid md:justify-items-center xl:grid-cols-5">
          {pricing.map((data, index) => {
            const Icon = data.icon;
            const PlusIcon = data.plusIcon;
            const isHovered = hoveredIndex === index;

            return (
              <div
                key={index}
                className="box bg-[#242428] rounded-3xl mt-3 md:w-11/12 xl:h-[250px] flex flex-col justify-start group relative cursor-help"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Top content */}
                <div className="flex-1">
                  {/* Icon */}
                  {!isHovered && (
                    <div className="icon p-4">
                      <Icon className="text-[#58C4DC]" size={30} />
                    </div>
                  )}

                  {/* Title */}
                  <div
                    className={`title p-3 ${isHovered ? "xl:mt-8" : "xl:mt-0"}`}
                  >
                    <h1
                      className={`text-white transform transition-all duration-300 font-bold md:text-2xl ps-3 xl:text-sm text-left ${
                        index === 3 || index === 4 ? "w-46" : ""
                      } ${
                        hoveredIndex === index
                          ? "translate-y-0"
                          : "translate-y-2"
                      }`}
                    >
                      {data.title}
                    </h1>
                  </div>

                  {/* Detail */}
                  <div className="detail container pb-3 xl:block">
                    <p
                      className={`text-[#878E8E] text-sm text-left md:text-base xl:ps-4  duration-300 ${
                        isHovered
                          ? "xl:translate-y-0 xl:opacity-100"
                          : "xl:translate-y-4 xl:opacity-0"
                      }`}
                    >
                      {data.detail}
                    </p>
                  </div>
                </div>

                {/* Plus Icon */}
                {!isHovered && (
                  <div className="plus-icon hidden xl:flex xl:absolute xl:bottom-4 xl:left-8">
                    <PlusIcon className="text-[#58C4DC]" size={20} />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
