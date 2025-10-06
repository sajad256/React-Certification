import React from "react";
import { heroImg, heroSimg } from "../../assets/Imges";
import { IoLogoGithub } from "react-icons/io5";
import { FaDiscord } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { Navbar } from "../index";

export default function Hero() {
  return (
    <>
      <section className="bg-[#1A1A1A] ">
        <Navbar />
        <div className="Main pt-10 container text-center">
          <div className="md:flex md:justify-center xl:justify-start">
            <div className="junior-mid-level rounded-lg bg-[#273C41] md:w-96">
              <h1 className="text-white py-2 font-bold">
                Junior, Mid-Level and Senior Exams now available
              </h1>
            </div>
          </div>

          <div className="React-Certification mt-10 text-center xl:flex xl:items-start xl:justify-between xl:gap-10">
            <div className="text-block xl:w-1/2 xl:text-left xl:flex xl:flex-col xl:items-start">
              <h1 className="text-white text-5xl md:text-7xl font-bold leading-tight m-0 xl:pt-10 xl:leading-snug">
                <span className="text-[#58C4DC] block md:inline">React </span>
                <span className="block md:inline">Certification</span>
              </h1>
              <p className="text-white font-bold md:text-3xl pt-4 m-0">
                Certification of competence for React
              </p>
              ~``{" "}
              <div className="hero-Img mt-6 relative xl:hidden">
                <img
                  src={heroImg}
                  alt="Hero"
                  className="w-full h-auto rounded-lg"
                />

                <div className="absolute top-1/2 right-3 transform -translate-y-1/2 w-[50%] h-[90%]">
                  <img
                    src={heroSimg}
                    alt="React Icon"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
              <div className="main-for-github-and-discord mt-6 xl:flex xl:flex-col xl:items-start xl:pt-10 ">
                <div className="github flex justify-center xl:justify-center items-center border-2 rounded-lg text-white border-[#58C4DC] gap-3 py-2 px-2 md:w-[700px] md:mx-auto xl:w-[600px] cursor-pointer">
                  <span>
                    <IoLogoGithub size={30} />
                  </span>
                  <h1>Sign Up with GitHub</h1>
                </div>
                <div className="discord mt-3 flex items-center justify-center xl:justify-center border-2 rounded-lg text-white border-[#58C4DC] gap-3 py-2 px-2 md:w-[700px] md:mx-auto xl:w-[600px] cursor-pointer">
                  <span>
                    <FaDiscord size={30} />
                  </span>
                  <h1>Sign Up with Discord</h1>
                </div>

                <div className="Main-for-email-signup mt-8 xl:flex xl:flex-col xl:items-start">
                  <p className="text-[#888F9B]">
                    Or create an account with your email
                  </p>
                  <div className="md:flex md:justify-center md:items-center md:gap-3 mt-3 xl:justify-start">
                    <div className="email md:mt-3  flex gap-3 bg-[#1A1A1A] border border-gray-600 rounded-lg w-full md:w-9/12 lg:w-6/12 py-2 px-3 transition-all duration-300 focus-within:border-white xl:w-[400px]">
                      <span className="text-white flex-shrink-0 flex items-center">
                        <IoMdMail size={20} />
                      </span>
                      <input
                        type="email"
                        placeholder="Enter your Email"
                        className="bg-transparent outline-none text-white placeholder-gray-400 w-full md:py-2 cursor-pointer"
                      />
                    </div>

                    <div className="sign-up md:mt-0 mt-3   md:w-40 md:flex  ">
                      <button className="w-full  px-2   py-3 bg-[#58C3DB] text-black rounded-lg font-bold hover:bg-[#42aac3] transition-colors duration-300">
                        Sign Up
                      </button>
                    </div>
                  </div>

                  <p className="mt-4 text-[#888F9B]">
                    Powered by{" "}
                    <span className="underline">Certificates.dev</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="hero-image-wrapper relative xl:w-1/2 xl:flex xl:justify-center xl:mt-0 hidden group">
              {/* Hero Image */}
              <img
                src={heroImg}
                alt="Hero XL"
                className="w-full h-auto rounded-lg group-hover:-rotate-6 group-hover:-translate-x-6 group-hover:-translate-y-6 duration-150"
              />

              {/* Overlay React Icon */}
              <div className="absolute top-1/2 right-3 transform -translate-y-1/2 w-[50%] h-[90%] group-hover:rotate-12 group-hover:top-0 group-hover:translate-y-0 group-hover:right-0">
                <img
                  src={heroSimg} // your React icon
                  alt="React Icon"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="See-more-certificates mt-5 bg-[#202022] text-center md:flex md:justify-center md:items-center md:gap-4">
          <p className="text-white font-bold text-xl w-80 text-center md:w-auto md:text-left pt-4 md:text-3xl xl:text-2xl">
            <span className="block md:inline">Would you like to see more</span>{" "}
            <span className="block text-[#4686FE] md:inline">
              Certifications?
            </span>
          </p>

          <div className="btn py-2 px-3 text-white font-bold border-blue-500 border-2 mt-4 md:mt-0">
            <button>Learn More</button>
          </div>
        </div>
      </section>
    </>
  );
}
