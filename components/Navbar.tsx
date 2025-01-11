import React, { useState } from "react";
import Image from "next/image";
import { NavItem } from "./Asset/assets";
import ArrowOpen from "../public/Images/ArrowOpen.svg";
import ArrowClose from "../public/Images/ArrowClose.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggelMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="bg-black px-10 md:px-14 lg:px-20 py-5 shadow-md fixed top-0 left-0 w-full">
      <div className="items-center justify-between flex ">
        <a href="#home" className="font-semibold text-[24px] text-white">A.S.</a>
        {/* Button Mobile */}
        <button className="md:hidden" onClick={toggelMenu}>
          <Image src={ArrowOpen} alt="Menu" className="w-6" />
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex flex-row gap-9">
          {NavItem.map((item) => (
            <li key={item.id}>
              <a href={item.href} className="text-white hover:text-primary transition duration-300">
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Menu */}

      <div
        className={`absolute top-0 right-0 bg-black w-[200px] py-4 px-6 shadow-lg md:hidden transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {" "}
        <div className="relative flex flex-col gap-8 pt-3">
          <button className="" onClick={toggelMenu}>
            <Image
              src={ArrowClose}
              alt="Close"
              className="hover:scale-150 transition-transform duration-300"
            />
          </button>

          <ul className="flex flex-col gap-4">
            {NavItem.map((item) => (
              <li key={item.id}>
                <a
                  href={item.href}
                  className="text-white hover:text-primary transition duration-300"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
