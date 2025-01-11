import React, { useState } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Profile1 from "@/public/Images/Profile1.svg";

//Icons
import Download from "@/public/Images/Download.svg"
//Sosmed
import Instagram from "@/public/Images/Instagram.svg";
import LinkInd from "@/public/Images/LinkInd.svg";
import Twitter from "@/public/Images/Twitter.svg";
import GitHub from "@/public/Images/GitHub.svg";



const HomePage = () => {
  return (
    <div className="font-primary text-white bg-black h-[100em]">
      <Navbar />
      <div className="flex flex-col md:flex-row px-10 md:px-14 lg:px-20 justify-between">
        <div className="pt-28 md:pt-40 lg:pt-48 w-[25em] md:w-[30em] lg:w-[35em]">
          <h1 className="text-[40px] font-medium mb-1">HI I’m Amri Sabilly</h1>
          <h3 className="text-[18px] md:text-[24px] font-semibold text-primary mb-3">
            Web & Mobile Developer
          </h3>
          <p className="text-[14px] md:[19px] font-medium mb-5">
            Selamat datang di portofolio web saya! Saya seorang Web & Mobile
            Developer dengan hasrat untuk menciptakan pengalaman web yang
            menarik dan responsif. Dengan keahlian dalam pengembangan front-end
            dan back-end, saya fokus pada penggunaan teknologi modern seperti
            React, Node.js, dan Tailwind CSS untuk menghadirkan solusi inovatif.
            Jelajahi berbagai proyek saya di sini, yang mencakup aplikasi
            e-commerce, website portofolio, hingga aplikasi mobile hybrid yang
            dirancang untuk mempermudah aktivitas sehari-hari.
          </p>
          <div className="flex flex-row gap-5 mb-5">
            <button className="bg-primary px-4 py-2 rounded-md hover:scale-105 transition duration-300">
              Contact Me
            </button>
            <div className="flex flex-row gap-4">
              <Image src={Instagram} alt="instagram" className="" />
              <Image src={LinkInd} alt="linkind" className="" />
              <Image src={Twitter} alt="twitter" className="" />
              <Image src={GitHub} alt="github" className="" />
            </div>
          </div>
          <div className="flex flex-row items-center gap-5">
          <Image src={Download} alt="download" className="" />
          <h3>Download CV</h3>
          </div>
        </div>
        <div className="pt-[65px]">
          <Image src={Profile1} alt="Menu" className="" />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
