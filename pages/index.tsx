import React, { useState } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
// Profile
import Profile1 from "@/public/Images/Profile1.svg";
import Profile2 from "@/public/Images/Profile2.svg";
import Certification from "@/public/Images/Certification.svg";
import FormContact from "@/components/FormContact";
//Assets
import { Project, Skill } from "../components/Asset/assets";

//Icons
import Download from "@/public/Images/Download.svg";
import ShowAll from "@/public/Images/ShowAll.svg";
import Email from "@/public/Images/Email.svg";
//Sosmed
import Instagram from "@/public/Images/Instagram.svg";
import LinkInd from "@/public/Images/LinkInd.svg";
import Twitter from "@/public/Images/Twitter.svg";
import GitHub from "@/public/Images/GitHub.svg";

import { motion } from "framer-motion";

const HomePage = () => {
  const [showAll, setShowAll] = useState(false);

  const limitedProjects = showAll ? Project : Project.slice(0, 3);
  return (
    <div className="font-primary text-white bg-black px-10 md:px-14 lg:px-20">
      <Navbar />

      {/* Home */}
      <div className="flex flex-col md:flex-row justify-between mb-[3em]" id="">
        <div className="pt-28 md:pt-40 lg:pt-48 w-full md:w-[35em] text-center md:text-left px-0 md:px-5">
          <h1 className="text-[40px] font-medium mb-1" data-aos="fade-up">
            HI Im
            <span className="block sm:hidden">Amri Sabilly</span>
            <span className="hidden sm:inline"> Amri Sabilly</span>
          </h1>
          <h3
            className="text-[18px] md:text-[24px] font-semibold text-primary mb-3"
            data-aos="fade-up"
          >
            Web & Mobile Developer
          </h3>
          <p className="text-[14px] font-medium mb-5" data-aos="fade-up">
            Selamat datang di portofolio web saya! Saya seorang Web & Mobile
            Developer dengan hasrat untuk menciptakan pengalaman web yang
            menarik dan responsif. Dengan keahlian dalam pengembangan front-end
            dan back-end, saya fokus pada penggunaan teknologi modern seperti
            React, Node.js, dan Tailwind CSS untuk menghadirkan solusi inovatif.
            Jelajahi berbagai proyek saya di sini, yang mencakup aplikasi
            e-commerce, website portofolio, hingga aplikasi mobile hybrid yang
            dirancang untuk mempermudah aktivitas sehari-hari.
          </p>
          <div
            className="flex flex-col md:flex-row gap-5 mb-5"
            data-aos="fade-up"
          >
            <a href="#contact">
              <button className="bg-primary px-4 py-2 rounded-sm hover:scale-105 transition duration-300 mb-2 text-[14px]">
                Contact Me
              </button>
            </a>
            <div className="flex flex-row gap-4 justify-center items-center">
              <a href="https://www.instagram.com/amrsab._/" target="_blank">
                <Image
                  src={Instagram}
                  alt="instagram"
                  className="hover:scale-110 transition duration-300"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/amri-sabilly-1a2a44319/"
                target="_blank"
              >
                <Image
                  src={LinkInd}
                  alt="linkind"
                  className="hover:scale-110 transition duration-300"
                />
              </a>
              <a href="https://x.com/queenbee973569" target="_blank">
                <Image
                  src={Twitter}
                  alt="twitter"
                  className="hover:scale-110 transition duration-300"
                />
              </a>
              <a href="https://github.com/amrisabilly" target="_blank">
                <Image
                  src={GitHub}
                  alt="github"
                  className="hover:scale-110 transition duration-300"
                />
              </a>
            </div>
          </div>
          <div
            className="flex flex-row items-center gap-5 justify-center md:justify-start"
            data-aos="fade-up"
          >
            <a
              href="/cv.pdf"
              download
              className="flex gap-3 hover:scale-105 transition duration-300"
            >
              <Image src={Download} alt="download" className="w-5 h-5" />
              <h3 className="text-[14px]">Download CV</h3>
            </a>
          </div>
        </div>
        <div
          className="pt-[65px] md:pt-[90px] hidden md:block"
          data-aos="fade-up"
        >
          <Image src={Profile1} alt="Menu" className="w-[574px] h-[589px]" />
        </div>
      </div>

      <div
        id="about-me"
        className="w-full px-10 md:px-40 mb-[1em] md:mb-[5em] lg:mb-[8em]"
        data-aos="fade-up"
      >
        <hr className="h-[1px] bg-gradient-to-r from-[#00a7cdac] to-[#003e4c] border-0" />
      </div>

      {/* About */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-[3em] md:mb-[5em] lg:mb-[8em] px-3 md:px-[2em] lg:px-[5em]">
        <div className="mb-10 md:mb-0">
          <Image src={Profile2} alt="profile" className="" data-aos="fade-up" />
        </div>
        <div className="w-full md:w-[300px] lg:w-[550px] flex-wrap flex flex-col text-center md:text-left">
          <h3 className="font-medium text-[24px] mb-4" data-aos="fade-up">
            About <span className="text-primary">Me</span>{" "}
          </h3>
          <p className="text-[14px] font-medium" data-aos="fade-up">
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
        className="w-full px-10 md:px-40 mb-[3em] md:mb-[5em] lg:mb-[8em]"
        data-aos="fade-up"
      >
        <hr className="h-[1px] bg-gradient-to-r from-[#00a7cdac] to-[#003e4c] border-0" />
      </div>

      <div
        className="flex flex-col items-center mb-[3em] md:mb-[5em] lg:mb-[8em]"
        id="certification"
      >
        <h3
          className="font-medium text-[24px] mb-[1.5em] md:mb-[2em] lg:mb-[3em]"
          data-aos="fade-up"
        >
          Ceritfi<span className="text-primary">cation</span>
        </h3>
        <div className="flex flex-col" data-aos="fade-up">
          <Image src={Certification} alt="certification" className="mb-3" />
          <a href="/sertif.png" download>
            <p className="text-[14px] font-light">Download Sertif</p>
          </a>
        </div>
      </div>

      <div
        className="w-full px-10 md:px-40 mb-[3em] md:mb-[5em] lg:mb-[8em]"
        data-aos="fade-up"
      >
        <hr className="h-[1px] bg-gradient-to-r from-[#00a7cdac] to-[#003e4c] border-0" />
      </div>

      <div className="flex flex-col items-center mb-[3em] md:mb-[5em] lg:mb-[8em]">
        <h3
          className="font-medium text-[24px] mb-[1em] md:mb-[1.5em]"
          data-aos="fade-up"
        >
          My<span className="text-primary"> Project</span>
        </h3>
        <p
          className="w-[15em] md:w-[20em] lg:w-[30em] text-center mb-3 md:mb-10"
          data-aos="fade-up"
        >
          Hallo selamat datang, disini saya akan menampilkan beberapa projects
          web dan web desain yang sudah saya kerjakan.
        </p>
        <div
          className="flex flex-wrap gap-3 justify-center mb-10 md:mb-20 w-[20em] md:w-full"
          data-aos="fade-up"
        >
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
        <div>
          {/* Kontainer proyek */}
          <div
            className="flex flex-wrap gap-6 md:gap-10 justify-center items-center mb-20"
            id="project"
          >
            {limitedProjects.map((item) => (
              <div
                className="flex flex-col gap-1 text-[12px] md:text-[13px] font-light mb-6 md:mb-10"
                key={item.id}
              >
                {/* Kontainer untuk gambar dan overlay */}
                <div className="relative group w-full sm:w-[300px] md:w-[350px] lg:w-[400px] h-[200px] sm:h-[250px] md:h-[300px]">
                  {/* Gambar */}
                  <Image
                    src={item.nameproject}
                    alt="profile"
                    className="transition-all duration-300 ease-in-out transform group-hover:scale-105 object-cover w-full h-full"
                    data-aos="fade-up"
                    width={400}
                    height={300}
                  />

                  {/* Overlay untuk keterangan */}
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
                    <div className="text-white text-center px-4">
                      <p className="text-sm md:text-lg font-semibold">
                        {item.jenis}
                      </p>
                      <p className="mt-2 text-xs md:text-sm">
                        {item.penjelasan}
                      </p>
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <button className="mt-4 bg-primary text-white px-3 py-1 md:px-4 md:py-2 rounded-full">
                          Selengkapnya
                        </button>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Keterangan di bawah gambar */}
                <p
                  className="text-primary mt-2 text-xs md:text-sm"
                  data-aos="fade-up"
                >
                  {item.jenis}
                </p>
                <p className="text-xs md:text-sm" data-aos="fade-up">
                  {item.describe}
                </p>
              </div>
            ))}
          </div>
          <div className="w-full flex justify-center">
            {/* Tombol "Show All" */}
            <button
              className="bg-primary rounded-sm flex gap-2 px-3 py-1 hover:scale-105 transition duration-300"
              data-aos="fade-up"
              onClick={() => setShowAll(!showAll)}
            >
              <p className="text-[14px] md:text-[16px]">
                {showAll ? "Show Less" : "Show All"}
              </p>
              <Image src={ShowAll} alt="showall" className="w-5 md:w-6" />
            </button>
          </div>
        </div>
      </div>

      <div
        className="w-full px-10 md:px-40 mb-[3em] md:mb-[5em] lg:mb-[8em]"
        data-aos="fade-up"
      >
        <hr className="h-[1px] bg-gradient-to-r from-[#00a7cdac] to-[#003e4c] border-0" />
      </div>

      <div
        className="flex flex-col items-center mb-[3em] md:mb-[5em] lg:mb-[8em]"
        id="my-skill"
      >
        <h3 className="font-medium text-[24px] mb-[1.5em]" data-aos="fade-up">
          My<span className="text-primary"> Skill</span>
        </h3>
        <p
          className="w-[16em] sm:w-[23em] text-center mb-[3em] md:mb-20"
          data-aos="fade-up"
        >
          Sebagai seorang Web & Mobile Developer berikut keahlian dan alat yang
          sudah saya pelajari dan gunakan selama proses pembelajaran.
        </p>
        <div
          className="bg-gradient-to-r from-transparent via-[#525151]/10 to-[#525151]/20 w-full max-w-[500px] md:max-w-[1200px] h-auto md:h-[130px] lg:h-[175px] flex overflow-hidden p-4"
          data-aos="fade-up"
        >
          <motion.div
            className="flex gap-8 w-max items-center"
            animate={{
              x: ["0%", "-50%"], // Bergerak setengah panjang konten
            }}
            transition={{
              x: {
                duration: 10, // Durasi animasi
                ease: "linear", // Linear untuk animasi yang mulus
                repeat: Infinity, // Animasi berulang tanpa henti
              },
            }}
          >
            {/* Duplikat gambar untuk seamless scroll */}
            {[...Skill, ...Skill].map((objek, index) => (
              <div key={index} className="flex-shrink-0">
                <Image
                  src={objek.nameskill}
                  alt="showall"
                  className="w-10 h-10 md:w-20 md:h-20 lg:w-24 lg:h-24 object-contain"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <div
        className="w-full px-10 md:px-40 mb-[3em] md:mb-[5em] lg:mb-[8em]"
        data-aos="fade-up"
      >
        <hr className="h-[1px] bg-gradient-to-r from-[#00a7cdac] to-[#003e4c] border-0" />
      </div>

      <div className="flex flex-col items-center mb-[3em] md:mb-[5em] lg:mb-[8em]">
        <h3 className="font-medium text-[24px] mb-[1.5em]" data-aos="fade-up">
          My<span className="text-primary"> Contact</span>
        </h3>
        <p
          className="w-[17em] sm:w-[28em] text-center mb-[3em] md:mb-20"
          data-aos="fade-up"
        >
          Punya ide project untuk dikerjakan bersama-sama? ayoo hubungi saya di
          bawah ini.
        </p>

        <FormContact />
      </div>

      <div
        className="w-full px-10 md:px-40 mb-[3em] md:mb-[5em] lg:mb-[8em]"
        data-aos="fade-up"
      >
        <hr className="h-[1px] bg-gradient-to-r from-[#00a7cdac] to-[#003e4c] border-0" />
      </div>

      <div className="flex flex-col" id="contact">
        <h1
          className="text-[50px] md:text-[63px] font-normal"
          data-aos="fade-up"
        >
          Lets
        </h1>
        <div className="flex flex-wrap justify-between items-center mb-24">
          <h1
            className="text-primary text-[50px] md:text[63px] font-normal"
            data-aos="fade-up"
          >
            Work <span>Together</span> <span className="text-white">-</span>
          </h1>
          <a
            href="mailto:amrsabill@gmail.com"
            className="flex items-center justify-evenly border border-white rounded-sm w-[225px] h-[38px]"
            data-aos="fade-up"
          >
            <Image
              src={Email}
              alt="showall"
              className="w-6 h-6 sm:w-6 sm:h-26 md:w-7 md:h-7 object-contain"
            />
            <p className="text-[14px]">amrsabill@gmail.com</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
