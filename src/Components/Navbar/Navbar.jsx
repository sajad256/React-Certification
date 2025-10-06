import React, { useState } from "react";
import { logo } from "../../assets/Imges";
import { navLink } from "../Constants/index";
import { FiMenu, FiX } from "react-icons/fi";
import { IoIosMoon } from "react-icons/io";
import { IoMdSunny } from "react-icons/io";

export default function Navbar() {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <div className="Main ">
        <nav className="container mx-auto flex items-center justify-between h-[80px] px-4">
          {/* Logo */}
          <div className="logo">
            <img className="w-[48px]" src={logo} alt="logo" />
          </div>

          <div className="lists hidden xl:flex xl:items-center gap-8">
            {navLink.map((data, index) => (
              <ul
                key={index}
                className="text-white font-bold flex items-center gap-1 relative group"
              >
                <li className="cursor-pointer text-sm hover:text-[#58C4DC] relative after:content-[''] after:absolute after:left-1/2 after:-bottom-[5px] after:h-[2px] after:w-0 after:bg-[#42aac3] after:transition-all after:duration-300 after:ease-out group-hover:after:left-0 group-hover:after:w-full">
                  {data.title}
                </li>
                {data.icon && <data.icon className="text-white text-sm" />}
              </ul>
            ))}
            <div className="buy-now">
              <button className="bg-[#58C4DC] px-4 py-2 rounded-lg font-bold hover:bg-[#42aac3] transition-all">
                Buy Now
              </button>
            </div>
            <div className="main-for-light-and-black-icon flex gap-2 bg-[#252529] py-2 px-3 rounded-full">
              <div className="dark text-white">
                <IoIosMoon size={20} />
              </div>
              <div className="light text-white">
                <IoMdSunny size={20} />
              </div>
            </div>
          </div>

          {/* Mobile Menu Icon */}
          <div className="Menu xl:hidden cursor-pointer">
            {toggle ? (
              <FiX
                className="text-[#888F9B] transition-all duration-300"
                size={35}
                onClick={() => setToggle(false)}
              />
            ) : (
              <FiMenu
                className="text-[#888F9B] transition-all duration-300"
                size={35}
                onClick={() => setToggle(true)}
              />
            )}
          </div>
        </nav>

        <div
          className={`xl:hidden bg-[#1A1A1A] overflow-hidden transition-all duration-500 ease-in-out ${
            toggle ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex flex-col container gap-6 py-6 border-t border-[#2a2a2a]">
            {/* Nav Links */}
            {navLink.map((data, index) => (
              <div
                key={index}
                className="text-white font-bold flex items-center gap-2 hover:text-[#58C4DC] cursor-pointer"
              >
                <p>{data.title}</p>
                {data.icon && <data.icon className="text-white text-sm" />}
              </div>
            ))}

            <button className="bg-[#58C4DC] px-5 py-2 rounded-lg font-bold hover:bg-[#42aac3] transition-all w-[190px]">
              Buy Now
            </button>

            {/* Light / Dark Mode Icons */}
            <div className="main-for-light-and-black-icon flex gap-3 bg-[#252529] py-2 px-3 rounded-full w-[80px]">
              <div className="dark text-white">
                <IoIosMoon size={20} />
              </div>
              <div className="light text-white">
                <IoMdSunny size={20} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
