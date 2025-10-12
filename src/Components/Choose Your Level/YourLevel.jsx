import React from "react";

export default function YourLevel() {
  return (
    <>
      <section>
        <div className="info flex justify-center pt-20">
          <h1 className="text-3xl text-white font-bold">
            Choose Your <span className="text-[#58C4DC]">Level</span>
          </h1>
        </div>
        <div className="Main-for-Level container">
          <div className="flex text-white justify-between  bg-[#252529] rounded-full h-10 items-center">
            <div className="junior bg-[#58C4DC] rounded-full px-2 py-1">
              <h1 className="text-2xl">Junior</h1>
            </div>
            <div className="Mid-Level">
              <h1>Mid-Level</h1>
            </div>
            <div className="Senior">
              <h1>Senior</h1>
            </div>
          </div>
        </div>
        <div className="Main-for-Level-cards"></div>
      </section>
    </>
  );
}
