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
  Examination,
  CertificatesDiv,
  Testimonials,
  FAQs,
  Certificates,
  Footer,
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
      <div className="bg-[#1A1A1A]">
        <Examination />
      </div>
      <div className="bg-[#1A1A1A]">
        <CertificatesDiv />
      </div>
      <div className="bg-[#1A1A1A]">
        <Testimonials />
      </div>
      <div className="bg-[#1A1A1A]">
        <FAQs />
      </div>
      <div className="bg-[#252529]">
        <Certificates />
      </div>
      <div className="bg-black">
        <Footer />
      </div>
    </>
  );
}
