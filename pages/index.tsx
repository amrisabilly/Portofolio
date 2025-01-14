import React, { useState } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
// Profile
import Profile1 from "@/public/Images/Profile1.svg";
import Profile2 from "@/public/Images/Profile2.svg";
import Certification from "@/public/Images/Certification.svg";

//Assets
import { Project, Skill } from "../components/Asset/assets";

//Icons
import Download from "@/public/Images/Download.svg";
import GarisHorizontal from "@/public/Images/GarisHorizontal.svg";
import ShowAll from "@/public/Images/ShowAll.svg";
import Email from "@/public/Images/Email.svg";
//Sosmed
import Instagram from "@/public/Images/Instagram.svg";
import LinkInd from "@/public/Images/LinkInd.svg";
import Twitter from "@/public/Images/Twitter.svg";
import GitHub from "@/public/Images/GitHub.svg";

const HomePage = () => {
  return (
    <div className="font-primary text-white bg-black px-10 md:px-14 lg:px-20">
      <Navbar />

      {/* Home */}
      <div className="flex flex-col md:flex-row justify-between mb-[3em]" id="">
        <div className="pt-28 md:pt-40 lg:pt-48 w-full md:w-[28em] lg:w-[35em] text-center md:text-left">
          <h1 className="text-[40px] font-medium mb-1">
            HI I’m
            <span className="block sm:hidden">Amri Sabilly</span>
            <span className="hidden sm:inline"> Amri Sabilly</span>
          </h1>
          <h3 className="text-[18px] md:text-[24px] font-semibold text-primary mb-3">
            Web & Mobile Developer
          </h3>
          <p className="text-[14px] font-medium mb-5">
            Selamat datang di portofolio web saya! Saya seorang Web & Mobile
            Developer dengan hasrat untuk menciptakan pengalaman web yang
            menarik dan responsif. Dengan keahlian dalam pengembangan front-end
            dan back-end, saya fokus pada penggunaan teknologi modern seperti
            React, Node.js, dan Tailwind CSS untuk menghadirkan solusi inovatif.
            Jelajahi berbagai proyek saya di sini, yang mencakup aplikasi
            e-commerce, website portofolio, hingga aplikasi mobile hybrid yang
            dirancang untuk mempermudah aktivitas sehari-hari.
          </p>
          <div className="flex flex-col md:flex-row gap-5 mb-5">
            <button className="bg-primary px-4 py-2 rounded-sm hover:scale-105 transition duration-300 mb-2">
              Contact Me
            </button>
            <div className="flex flex-row gap-4 justify-center">
              <Image src={Instagram} alt="instagram" className="" />
              <Image src={LinkInd} alt="linkind" className="" />
              <Image src={Twitter} alt="twitter" className="" />
              <Image src={GitHub} alt="github" className="" />
            </div>
          </div>
          <div className="flex flex-row items-center gap-5 justify-center md:justify-start">
            <Image src={Download} alt="download" className="" />
            <h3>Download CV</h3>
          </div>
        </div>
        <div className="pt-[65px] md:pt-[90px] hidden md:block">
          <Image src={Profile1} alt="Menu" className="w-[574px] h-[589px]" />
        </div>
      </div>

      <div
        id="about-me"
        className="w-full px-10 md:px-40 mb-[1em] md:mb-[5em] lg:mb-[8em]"
      >
        <hr className="h-[1px] bg-gradient-to-r from-[#00a7cdac] to-[#003e4c] border-0" />
      </div>

      {/* About */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-[3em] md:mb-[5em] lg:mb-[8em] px-[5em]">
        <div className="mb-10 md:mb-0">
          <Image src={Profile2} alt="profile" className="" />
        </div>
        <div className="w-full md:w-[28em] lg:w-[35em] flex flex-col text-center md:text-left">
          <h3 className="font-medium text-[24px] mb-4">
            About <span className="text-primary">Me</span>{" "}
          </h3>
          <p className="text-[14px] font-medium">
            Saya mahasiswa Sistem Informasi yang antusias dalam mengembangkan
            solusi teknologi untuk mendukung efisiensi dan inovasi.
            Berpengalaman dalam pengembangan web dengan JavaScript, React, dan
            MySQL, pengembangan mobile menggunakan Flutter, serta desain UI/UX
            yang berfokus pada pengalaman pengguna. Saya juga memiliki minat
            pada analisis data dan pembuatan sistem pendukung keputusan untuk
            membantu pengambilan keputusan strategis.
          </p>
        </div>
      </div>

      <div
        id="certification"
        className="w-full px-10 md:px-40 mb-[3em] md:mb-[5em] lg:mb-[8em]"
      >
        <hr className="h-[1px] bg-gradient-to-r from-[#00a7cdac] to-[#003e4c] border-0" />
      </div>

      <div className="flex flex-col items-center mb-[3em] md:mb-[5em] lg:mb-[8em]">
        <h3 className="font-medium text-[24px] mb-[1.5em] md:mb-[2em] lg:mb-[3em]">
          Ceritfi<span className="text-primary">cation</span>
        </h3>
        <div className="flex flex-col">
          <Image src={Certification} alt="certification" className="mb-3" />
          <p className="text-[14px] font-light">Download Sertif</p>
        </div>
      </div>

      <div
        id="project"
        className="w-full px-10 md:px-40 mb-[3em] md:mb-[5em] lg:mb-[8em]"
      >
        <hr className="h-[1px] bg-gradient-to-r from-[#00a7cdac] to-[#003e4c] border-0" />
      </div>

      <div className="flex flex-col items-center mb-[3em] md:mb-[5em] lg:mb-[8em]">
        <h3 className="font-medium text-[24px] mb-[1em] md:mb-[2em] lg:mb-[3em]">
          My<span className="text-primary"> Project</span>
        </h3>
        <p className="w-[15em] text-center mb-3">
          Hallo selamat datang, disini saya akan menampilkan beberapa projects
          web dan web desain yang sudah saya kerjakan.
        </p>
        <div className="flex flex-wrap gap-3 justify-center mb-10">
          <div className="bg-primary px-2 py-1 rounded-sm">
            <p className="text-[13px]">#Tailwind</p>
          </div>
          <div className="bg-primary px-2 py-1 rounded-sm">
            <p className="text-[13px]">#Flutter</p>
          </div>
          <div className="bg-primary px-2 py-1 rounded-sm">
            <p className="text-[13px]">#React.js</p>
          </div>
          <div className="bg-primary px-2 py-1 rounded-sm">
            <p className="text-[13px]">#Phyton</p>
          </div>
          <div className="bg-primary px-2 py-1 rounded-sm">
            <p className="text-[13px]">#C++</p>
          </div>
        </div>

        <div className="flex flex-wrap gap-10 justify-center mb-10">
          {Project.map((item) => (
            <div
              className="flex flex-col gap-1 text-[13px] font-light"
              key={item.id}
            >
              <Image src={item.nameproject} alt="profile" className="" />
              <p className="text-primary">{item.jenis}</p>
              <p className="">{item.describe}</p>
            </div>
          ))}
        </div>
        <div className="bg-primary rounded-sm flex gap-2 px-3 py-1">
          <p className="text-[16px]">Show All</p>
          <Image src={ShowAll} alt="showall" className="" />
        </div>
      </div>

      <div
        id="my-skill"
        className="w-full px-10 md:px-40 mb-[3em] md:mb-[5em] lg:mb-[8em]"
      >
        <hr className="h-[1px] bg-gradient-to-r from-[#00a7cdac] to-[#003e4c] border-0" />
      </div>

      <div className="flex flex-col items-center mb-[3em] md:mb-[5em] lg:mb-[8em]">
        <h3 className="font-medium text-[24px] mb-[1em] md:mb-[2em] lg:mb-[3em]">
          My<span className="text-primary"> Skill</span>
        </h3>
        <p className="w-[15em] text-center mb-[3em] md:mb-[5em] lg:mb-[8em]">
          Sebagai seorang Web & Mobile Developer berikut keahlian dan alat yang
          sudah saya pelajari dan gunakan selama proses pembelajaran.
        </p>
        <div className="bg-gradient-to-r from-transparent via-[#525151]/10 to-[#525151]/20 w-full max-w-[970px] h-auto sm:h-[175px] flex flex-wrap items-center justify-center gap-2 sm:gap-4 lg:gap-16 p-4">
          {Skill.map((item) => (
            <Image
              src={item.nameskill}
              alt="showall"
              className="w-10 h-10 sm:w-20 sm:h-20 md:w-24 md:h-24 object-contain"
            />
          ))}
        </div>
      </div>

      <div
        id="contact"
        className="w-full px-10 md:px-40 mb-[3em] md:mb-[5em] lg:mb-[8em]"
      >
        <hr className="h-[1px] bg-gradient-to-r from-[#00a7cdac] to-[#003e4c] border-0" />
      </div>

      <div className="flex flex-col items-center mb-[3em] md:mb-[5em] lg:mb-[8em]">
        <h3 className="font-medium text-[24px] mb-[1em] md:mb-[2em] lg:mb-[3em]">
          My<span className="text-primary"> Contact</span>
        </h3>
        <p className="w-[15em] text-center mb-[3em] md:mb-[5em] lg:mb-[8em]">
          Punya ide project untuk dikerjakan bersama-sama? ayoo hubungi saya di
          bawah ini!
        </p>

        <div className="w-full bg-gradient-to-r from-transparent via-[#525151]/10 to-[#525151]/20 h-[371px] pt-10 mb-[1em] md:mb-[5em] lg:mb-[8em]">
          <form
            action=""
            className="flex justify-evenly flex-wrap text-white text-[12px] md:text-[16px]"
          >
            <input
              type="text"
              placeholder="Name"
              className="w-[270px] md:w-[463px] mb-8 bg-transparent border-b-2 border-[#00A8CD] focus:outline-none"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="w-[270px] md:w-[463px] mb-8 bg-transparent border-b-2 border-[#00A8CD] focus:outline-none"
            />
            <input
              type="text"
              placeholder="Email"
              className="w-[270px] md:w-[463px] mb-8 bg-transparent border-b-2 border-[#00A8CD] focus:outline-none"
            />
            <input
              type="text"
              placeholder="Phone Number"
              className="w-[270px] md:w-[463px] mb-8 bg-transparent border-b-2 border-[#00A8CD] focus:outline-none"
            />
            <textarea
              placeholder="Message"
              className="w-[270px] md:w-[463px] mb-8 bg-transparent border border-[#00A8CD] rounded-sm p-2 focus:outline-none h-[8em] text-start resize-none"
            />
          </form>
        </div>
        <button className="bg-primary px-8 py-2 rounded-sm hover:scale-105 transition duration-300 mb-2">
          Send
        </button>
      </div>

      <div className="w-full px-10 md:px-40 mb-[3em] md:mb-[5em] lg:mb-[8em]">
        <hr className="h-[1px] bg-gradient-to-r from-[#00a7cdac] to-[#003e4c] border-0" />
      </div>

      <div className="flex flex-col">
        <h1 className="text-[50px] md:text-[63px] font-normal">Let's</h1>
        <div className="flex flex-wrap justify-between items-center mb-20">
          <h1 className="text-primary text-[50px] font-normal mb-7">
            Work <span>Together</span> <span className="text-white">-</span>
          </h1>
          <button className="flex items-center justify-evenly border border-white rounded-sm w-[225px] h-[38px]">
            <Image
              src={Email}
              alt="showall"
              className="w-6 h-6 sm:w-6 sm:h-26 md:w-7 md:h-7 object-contain"
            />
            <p className="text-[14px]">sabillyamri1@gmail.com</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
