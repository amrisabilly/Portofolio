import { Bars3CenterLeftIcon } from "@heroicons/react/16/solid";
import React from "react";

const Nav = () => {
  return (
    <div className="fixed w-[100%] x-[1000] bg-gray-800">
      <div className="flex items-center h-[12vh] justify-between w-[80%] mx-auto">
        <div className="font-logo text-white text-[18px]">
          <span className="text-[30px] md:text-[40px] text-yellow-400">
            Dev
          </span>
          Sam
        </div>
        <ul className="md:flex hidden items-center space-x-10">
          <li>
            <a className="nav_link" href="#">Home</a>
          </li>
          <li>
            <a className="nav_link" href="#">About</a>
          </li>
          <li>
            <a className="nav_link" href="#">Service</a>
          </li>
          <li>
            <a className="nav_link" href="#">Contact</a>
          </li> 
        </ul>
        <Bars3CenterLeftIcon className="w-[2.3rem] h-[2.3rem] text-white rotate-180 md:hidden"/>
      </div>
    </div>
  );
};

export default Nav;
