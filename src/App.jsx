import React from "react";
import {
  Navbar,
  Hero,
  ReactCompanies,
  SteptoCertication,
  Clearinterst,
  Reactlevel,
  OptionalPreparation,
  Pricing,
  ChooseyourLevel,
} from "./Components/index";

export default function App() {
  return (
    <>
      <div className="bg-[#1A1A1A]">
        <Navbar />
      </div>
      <div className="bg-[#1A1A1A]">
        <Hero />
      </div>
      <div className="bg-[#1A1A1A]">
        <ReactCompanies />
      </div>
      <div className="bg-[#1A1A1A]">
        <SteptoCertication />
      </div>
      <div className="bg-[#1A1A1A]">
        <Clearinterst />
      </div>
      <div className="bg-[#1A1A1A]">
        <Reactlevel />
      </div>
      <div className="bg-[#1A1A1A]">
        <OptionalPreparation />
      </div>
      <div className="bg-[#1A1A1A]">
        <Pricing />
      </div>
      <div className="bg-[#1A1A1A]">
        <ChooseyourLevel />
      </div>
    </>
  );
}
