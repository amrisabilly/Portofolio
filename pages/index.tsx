import React, { useState } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
// Profile
import Profile1 from "@/public/Images/Profile1.svg";
import Profile2 from "@/public/Images/Profile2.svg";
import Certification from "@/public/Images/Certification.svg";
import Certification1 from "@/public/sertif1.webp";
import Certification2 from "@/public/sertif2.webp";
import Certification3 from "@/public/sertif3.webp";
import Certification4 from "@/public/sertif4.webp";
import Certification5 from "@/public/sertif5.webp";
import Certification6 from "@/public/sertif6.webp";
import Certification7 from "@/public/sertif7.webp";

//Assets
import { Project, Skill } from "../components/Asset/assets";
import FormContact from "@/components/FormContact";
//Icons
import Download from "@/public/Images/Download.svg";
import ShowAll from "@/public/Images/ShowAll.svg";
import Email from "@/public/Images/Email.svg";
//Sosmed
import Instagram from "@/public/Images/Instagram.svg";
import LinkInd from "@/public/Images/LinkInd.svg";
import Twitter from "@/public/Images/Twitter.svg";
import GitHub from "@/public/Images/GitHub.svg";
import type { StaticImageData } from "next/image";

import { motion } from "framer-motion";
import ResponsiveCarousel from "@/components/ResponsiveCarousel";
import CertificationModal from "@/components/CertificationModal";
import LoadingScreen from "@/components/LoadingScreen";
import ProjectModal from "@/components/ProjectModal";

// Define the project type
type ProjectType = {
  id: number;
  nameproject: StaticImageData;
  jenis: string;
  describe: string;
  penjelasan: string;
  url: string;
  github?: string;
  figma?: string;
  documentationImages?: StaticImageData[];
  technologies?: string[];
  features?: string[];
};

const HomePage = () => {
  const [showAll, setShowAll] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedProject, setSelectedProject] = useState<ProjectType | null>(
    null
  );

  // Define the certification type
  type CertificationType = {
    id: number;
    title: string;
    issuer: string;
    date: string;
    image: StaticImageData;
    description: string;
  };

  const [selectedCertification, setSelectedCertification] =
    useState<CertificationType | null>(null);

  // Handle loading completion
  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  // Show loading screen while loading
  if (isLoading) {
    return <LoadingScreen onLoadingComplete={handleLoadingComplete} />;
  }

  // Expanded certifications data with more certificates
  const certifications: CertificationType[] = [
    {
      id: 1,
      title:
        "Sertifikasi penghargaan karyawan berprestasi (Employee of the Month)",
      issuer: "PT Berbinar Insightful Indonesia",
      date: "2025",
      image: Certification6,
      description:
        "Sertifikasi penghargaan karyawan berprestasi (Employee of the Month) atas kontribusi dan kinerja luar biasa dalam pengembangan aplikasi web dan mobile di PT Berbinar Insightful Indonesia.",
    },
    {
      id: 2,
      title: "Sertifikasi kontribusi pengembangan website HIMASISFO",
      issuer: "HIMASISFO UPN Veteran Yogyakarta",
      date: "2025",
      image: Certification7,
      description:
        "Sertifikasi apresiasi kontribusi pengembangan website HIMASISFO sebagai Wakil Ketua dan Staf Front-end Developer.",
    },
    {
      id: 3,
      title: "Alibaba Cloud Academy",
      issuer: "Aliababa Cloud Academy",
      date: "2025",
      image: Certification,
      description:
        "Sertifikasi resmi Alibaba Cloud sebagai Certified Developer yang memvalidasi kemampuan dalam membangun aplikasi menggunakan layanan Alibaba Cloud.",
    },
    {
      id: 4,
      title: "Belajar Membuat Aplikasi Web Dengan React",
      issuer: "Dicoding",
      date: "2025",
      image: Certification3,
      description:
        "Sertifikasi pengembangan aplikasi web menggunakan React, dengan fokus pada pembuatan UI yang deklaratif dan reusable melalui penggunaan functional component, stateful component, dan controlled component.",
    },
    {
      id: 5,
      title: "Belajar Dasar Pemrograman JavaScript",
      issuer: "Dicoding",
      date: "2025",
      image: Certification4,
      description:
        "Sertifikasi pengembangan web back-end dengan Node.js yang mencakup dasar-dasar JavaScript, struktur data, Object-Oriented dan Functional Programming, modularisasi, serta manajemen proses asynchronous, divalidasi sesuai standar industri oleh AWS.",
    },
    {
      id: 6,
      title: "Belajar Dasar Pemrograman Web",
      issuer: "Dicoding",
      date: "2025",
      image: Certification5,
      description:
        "Sertifikasi pengembangan web dasar yang mencakup pemahaman struktur HTML, styling dengan CSS, serta teknik layout responsif menggunakan Flexbox dan media query sebagai fondasi utama pembuatan website.",
    },
    {
      id: 7,
      title: "Belajar Membuat Front-End Web",
      issuer: "Dicoding",
      date: "2025",
      image: Certification2,
      description:
        "Sertifikasi pengembangan front-end web yang berfokus pada pembuatan website interaktif melalui manipulasi DOM, penggunaan event, serta pengelolaan data dengan Web Storage sesuai standar industri.",
    },
    {
      id: 8,
      title: "Belajar Dasar AI",
      issuer: "Dicoding",
      date: "2025",
      image: Certification1,
      description:
        "Sertifikasi dasar Artificial Intelligence (AI) yang mencakup konsep AI, pemanfaatan data, dasar-dasar Machine Learning, dan pengenalan Deep Learning.",
    },
  ];

  const limitedProjects = showAll ? Project : Project.slice(0, 3);

  return (
    <div
      className="min-h-screen text-white font-primary relative overflow-hidden"
      style={{ backgroundColor: "#14181A" }}
    >
      <div className="container mx-auto relative z-10 px-6 md:px-12 lg:px-20">
        <Navbar />

        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-between py-20">
          <motion.div
            className="w-full md:w-1/2 space-y-6"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <div className="space-y-3">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="inline-block px-4 py-1 rounded-full backdrop-blur-sm"
                style={{
                  backgroundColor: "#00A8CD30",
                  border: "1px solid #00A8CD80",
                }}
              >
                <span
                  style={{ color: "#00A8CD" }}
                  className="text-lg font-medium"
                >
                  Halo, Saya
                </span>
              </motion.div>

              <div className="overflow-hidden">
                <motion.h1
                  className="text-5xl md:text-7xl font-bold"
                  style={{
                    background: `linear-gradient(to right, #ffffff, #00A8CD, #ffffff)`,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                  initial={{ opacity: 0, y: 100 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.4,
                    duration: 0.8,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  Amri Sabilly
                </motion.h1>
              </div>

              <div className="overflow-hidden">
                <motion.h2
                  className="text-2xl md:text-3xl font-semibold flex items-center gap-3"
                  style={{ color: "#00A8CD" }}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.7 }}
                >
                  Web Developer
                  <span
                    className="inline-block w-2 h-2 rounded-full animate-pulse"
                    style={{ backgroundColor: "#00A8CD" }}
                  ></span>
                </motion.h2>
              </div>
            </div>

            <motion.p
              className="text-slate-200 text-lg leading-relaxed max-w-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 1 }}
            >
              Selamat datang di portofolio web saya! Saya seorang Web Developer
              dengan hasrat untuk menciptakan pengalaman web yang menarik dan
              responsif.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 pt-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              viewport={{ once: true, amount: 0.5 }}
            >
              <a href="#contact">
                <button
                  className="px-8 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg relative group overflow-hidden"
                  style={{
                    backgroundColor: "#00A8CD",
                    boxShadow: "0 10px 25px #00A8CD30",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "#0088AA";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "#00A8CD";
                  }}
                >
                  <span className="relative z-10 text-white">Hubungi Saya</span>
                </button>
              </a>

              <div className="flex items-center gap-4">
                {[
                  {
                    icon: Instagram,
                    url: "https://www.instagram.com/amrsab._/",
                  },
                  {
                    icon: LinkInd,
                    url: "https://www.linkedin.com/in/amri-sabilly-1a2a44319/",
                  },
                  {
                    icon: Twitter,
                    url: "https://x.com/queenbee973569",
                  },
                  {
                    icon: GitHub,
                    url: "https://github.com/amrisabilly",
                  },
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    className="p-3 backdrop-blur-md rounded-lg transition-all duration-300 transform hover:scale-110 shadow-lg border"
                    style={{
                      backgroundColor: "#14181A80",
                      borderColor: "#00A8CD30",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = "#00A8CD";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = "#00A8CD30";
                    }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      transition: { delay: 1.2 + index * 0.1 },
                    }}
                    whileHover={{ y: -3 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Image
                      src={social.icon}
                      alt="social"
                      className="w-5 h-5"
                      priority
                    />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            <motion.a
              href="/cv.pdf"
              download
              className="inline-flex items-center gap-3 mt-3 backdrop-blur-sm px-6 py-2 rounded-full transition-all duration-300 group border"
              style={{
                backgroundColor: "#14181A80",
                borderColor: "#00A8CD30",
                color: "#00A8CD",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "#00A8CD";
                e.currentTarget.style.color = "#ffffff";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "#00A8CD30";
                e.currentTarget.style.color = "#00A8CD";
              }}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2 }}
              whileHover={{ scale: 1.02 }}
            >
              <div
                className="p-1 rounded-full"
                style={{ backgroundColor: "#00A8CD" }}
              >
                <Image
                  src={Download}
                  alt="download"
                  className="w-4 h-4"
                  priority
                />
              </div>
              <span className="font-medium">Unduh CV</span>
            </motion.a>
          </motion.div>

          <motion.div
            className="hidden md:block w-1/2"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <div className="relative">
              {/* Hapus semua animasi bergerak, hanya sisakan background statis */}
              <div
                className="absolute -inset-4 rounded-full blur-2xl"
                style={{
                  background: "#00A8CD",
                  opacity: 0.06,
                }}
              />

              {/* Hapus decorative border pattern yang berputar */}
              <div
                className="absolute inset-0 rounded-full border-2 border-dashed flex items-center justify-center"
                style={{
                  borderColor: "#00A8CD15",
                }}
              >
                <div
                  className="w-1/2 h-1/2 rounded-full border-2 border-dashed"
                  style={{
                    borderColor: "#00A8CD15",
                  }}
                ></div>
              </div>

              {/* Profile image tanpa animasi bergerak */}
              <div className="relative z-10 p-5">
                <div className="relative">
                  <Image
                    src={Profile1}
                    alt="Profile"
                    className="w-full max-w-lg mx-auto drop-shadow-2xl"
                    priority
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* About Section */}
        <section id="about-me" className="py-28">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div
              className="lg:w-1/2"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, amount: 0.5 }}
            >
              <div className="relative">
                {/* Decorative elements - simplified */}
                <div
                  className="absolute -top-6 -left-6 w-12 h-12 border-t-2 border-l-2"
                  style={{ borderColor: "#00A8CD" }}
                ></div>
                <div
                  className="absolute -bottom-6 -right-6 w-12 h-12 border-b-2 border-r-2"
                  style={{ borderColor: "#00A8CD" }}
                ></div>

                {/* Hapus animasi bergerak pada background blur */}
                <div
                  className="absolute -inset-4 rounded-2xl blur-xl"
                  style={{
                    background: "#00A8CD",
                    opacity: 0.04,
                  }}
                ></div>

                {/* Main image with frame */}
                <motion.div
                  className="relative z-10 p-1 backdrop-blur-sm rounded-2xl border"
                  style={{
                    backgroundColor: "#00A8CD15",
                    borderColor: "#00A8CD40",
                  }}
                  whileHover={{ scale: 1.01 }} // Reduce scale untuk performa
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src={Profile2}
                    alt="About"
                    className="w-full rounded-xl"
                    priority
                  />
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              className="lg:w-1/2 space-y-8"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, amount: 0.5 }}
            >
              <div className="space-y-2">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="inline-block px-4 py-1 rounded-full border text-sm font-medium"
                  style={{
                    backgroundColor: "#00A8CD20",
                    borderColor: "#00A8CD",
                    color: "#00A8CD",
                  }}
                >
                  Temukan Kisah Saya
                </motion.div>

                <motion.h2
                  className="text-4xl md:text-5xl font-bold"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  Tentang{" "}
                  <span
                    style={{
                      background: "#00A8CD",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    Saya
                  </span>
                </motion.h2>
              </div>

              <motion.p
                className="text-slate-200 text-lg leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                Saya mahasiswa Sistem Informasi yang antusias dalam
                mengembangkan solusi teknologi untuk mendukung efisiensi dan
                inovasi. Berpengalaman dalam pengembangan web dengan JavaScript,
                React JS, dan MySQL, serta desain UI/UX yang berfokus pada
                pengalaman pengguna dan aspek keamanan.
              </motion.p>

              <motion.div
                className="flex flex-wrap gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
              >
                {[
                  "JavaScript",
                  "React",
                  "Next.js",
                  "UI/UX Design",
                  "MySQL",
                  "Node.js",
                  "Laravel",
                ].map((skill, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 backdrop-blur-sm border rounded-lg text-slate-200 text-sm transition-colors duration-300"
                    style={{
                      backgroundColor: "#14181A80",
                      borderColor: "#00A8CD30",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = "#00A8CD";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = "#00A8CD30";
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Work Experience Section */}
        <section id="work-experience" className="py-28">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-1 rounded-full border text-sm font-medium mb-4"
              style={{
                backgroundColor: "#00A8CD20",
                borderColor: "#00A8CD",
                color: "#00A8CD",
              }}
            >
              Pengalaman Kerja
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Perjalanan{" "}
              <span className="relative">
                <span
                  style={{
                    background: "#00A8CD",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Karir Saya
                </span>
                <motion.span
                  className="absolute -bottom-2 left-0 w-full h-1 rounded-full"
                  style={{ backgroundColor: "#00A8CD" }}
                  initial={{ scaleX: 0, opacity: 0 }}
                  whileInView={{ scaleX: 1, opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  viewport={{ once: true }}
                />
              </span>
            </h2>
            <p className="text-slate-200 text-lg max-w-2xl mx-auto">
              Pengalaman profesional saya di bidang pengembangan web dan
              organisasi.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Experience 1 */}
            <motion.div
              className="backdrop-blur-sm border rounded-xl p-8 shadow-lg flex flex-col"
              style={{
                backgroundColor: "#14181A60",
                borderColor: "#00A8CD30",
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4 mb-4">
                <span className="text-2xl">💻</span>
                <div>
                  <h3
                    className="text-xl font-bold"
                    style={{ color: "#00A8CD" }}
                  >
                    Frontend Developer
                  </h3>
                  <p className="text-slate-300 text-sm">
                    HIMASISO UPNYK &middot;{" "}
                    <span className="text-slate-400">Organisasi Mahasiswa</span>
                  </p>
                </div>
              </div>
              <p className="text-slate-200 mb-4">
                Berperan sebagai Frontend Developer di HIMASISO UPNYK,
                mengembangkan dan memelihara website organisasi serta mendukung
                berbagai acara digital.
              </p>
              <a
                href="https://www.linkedin.com/in/amri-sabilly-1a2a44319/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium"
                style={{ color: "#00A8CD" }}
              >
                Lihat di LinkedIn
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M12.293 2.293a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L15 5.414V17a1 1 0 11-2 0V5.414l-1.293 1.293A1 1 0 1110.293 5.293l4-4z" />
                </svg>
              </a>
            </motion.div>
            {/* Experience 2 */}
            <motion.div
              className="backdrop-blur-sm border rounded-xl p-8 shadow-lg flex flex-col"
              style={{
                backgroundColor: "#14181A60",
                borderColor: "#00A8CD30",
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4 mb-4">
                <span className="text-2xl">🛠️</span>
                <div>
                  <h3
                    className="text-xl font-bold"
                    style={{ color: "#00A8CD" }}
                  >
                    Staff Backend Developer
                  </h3>
                  <p className="text-slate-300 text-sm">
                    PT Berbinar Insight Full &middot;{" "}
                    <span className="text-slate-400">Perusahaan Teknologi</span>
                  </p>
                </div>
              </div>
              <p className="text-slate-200 mb-4">
                Bertanggung jawab sebagai Staf Pengembang Backend di PT Berbinar
                Insight Full, membangun dan mengelola database serta sistem
                backend untuk kebutuhan bisnis psikolog.
              </p>
              <a
                href="https://www.linkedin.com/in/amri-sabilly-1a2a44319/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium"
                style={{ color: "#00A8CD" }}
              >
                Lihat di LinkedIn
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M12.293 2.293a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L15 5.414V17a1 1 0 11-2 0V5.414l-1.293 1.293A1 1 0 1110.293 5.293l4-4z" />
                </svg>
              </a>
            </motion.div>
          </div>
        </section>

        {/* Certifications Section */}
        <section id="certification" className="py-28">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-1 rounded-full border text-sm font-medium mb-4"
              style={{
                backgroundColor: "#00A8CD20",
                borderColor: "#00A8CD",
                color: "#00A8CD",
              }}
            >
              Pertumbuhan Profesional
            </motion.div>

            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Sertifikat{" "}
              <span className="relative">
                <span
                  style={{
                    background: "#00A8CD",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Saya
                </span>
                <motion.span
                  className="absolute -bottom-2 left-0 w-full h-1 rounded-full"
                  style={{ backgroundColor: "#00A8CD" }}
                  initial={{ scaleX: 0, opacity: 0 }}
                  whileInView={{ scaleX: 1, opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  viewport={{ once: true }}
                />
              </span>
            </h2>
            <p className="text-slate-200 text-lg max-w-2xl mx-auto">
              Sertifikasi profesional dan pencapaian dalam pengembangan web dan
              teknologi.
            </p>
          </motion.div>

          {/* Use ResponsiveCarousel Component */}
          <ResponsiveCarousel
            certifications={certifications}
            currentSlide={currentSlide}
            setCurrentSlide={setCurrentSlide}
            onCertificationClick={(cert) => {
              setSelectedCertification(cert);
            }}
          />

          {/* Certification Modal */}
          {selectedCertification && (
            <CertificationModal
              certification={selectedCertification}
              onClose={() => {
                setSelectedCertification(null);
              }}
            />
          )}
        </section>

        {/* Projects Section */}
        <section id="project" className="py-28">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-1 rounded-full border text-sm font-medium mb-4"
              style={{
                backgroundColor: "#00A8CD20",
                borderColor: "#00A8CD",
                color: "#00A8CD",
              }}
            >
              Portofolio Saya
            </motion.div>

            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Proyek{" "}
              <span className="relative">
                <span
                  style={{
                    background: "#00A8CD",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Unggulan
                </span>
                <motion.span
                  className="absolute -bottom-2 left-0 w-full h-1 rounded-full"
                  style={{ backgroundColor: "#00A8CD" }}
                  initial={{ scaleX: 0, opacity: 0 }}
                  whileInView={{ scaleX: 1, opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  viewport={{ once: true }}
                />
              </span>
            </h2>
            <p className="text-slate-200 text-lg max-w-2xl mx-auto mb-8">
              Jelajahi proyek pengembangan web terbaru dan solusi digital saya.
            </p>

            <div className="flex flex-wrap gap-3 justify-center mb-12">
              {["#Tailwind", "#MySQL", "#React.js", "#Next.js", "#UI/UX"].map(
                (tech, index) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                    viewport={{ once: true }}
                    className="border px-5 py-2 rounded-full text-sm font-medium backdrop-blur-sm transition-all duration-300 cursor-pointer"
                    style={{
                      backgroundColor: "#00A8CD20",
                      borderColor: "#00A8CD40",
                      color: "#00A8CD",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = "#00A8CD";
                      e.currentTarget.style.backgroundColor = "#00A8CD30";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = "#00A8CD40";
                      e.currentTarget.style.backgroundColor = "#00A8CD20";
                    }}
                    whileHover={{ y: -2, scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {tech}
                  </motion.span>
                )
              )}
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {limitedProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="group relative backdrop-blur-sm border rounded-xl overflow-hidden transition-all duration-500 shadow-lg"
                style={{
                  backgroundColor: "#14181A60",
                  borderColor: "#00A8CD30",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "#00A8CD";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "#00A8CD30";
                }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <div className="relative overflow-hidden">
                  {/* Project label badge */}
                  <div className="absolute top-4 left-4 z-10">
                    <span
                      className="px-3 py-1 text-white text-xs font-medium rounded-full shadow-lg"
                      style={{ backgroundColor: "#00A8CD" }}
                    >
                      {project.jenis}
                    </span>
                  </div>

                  <Image
                    src={project.nameproject}
                    alt={project.jenis}
                    className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />

                  {/* Overlay with gradient */}
                  <div
                    className="absolute inset-0 opacity-60 group-hover:opacity-80 transition-opacity duration-300"
                    style={{
                      background:
                        "linear-gradient(to top, #14181A, #14181A70, transparent)",
                    }}
                  ></div>

                  {/* Updated CTA Button */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <motion.button
                      onClick={() => setSelectedProject(project)}
                      className="text-white px-6 py-2 rounded-lg font-medium transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 shadow-lg"
                      style={{ backgroundColor: "#00A8CD" }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = "#0088AA";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = "#00A8CD";
                      }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Lihat Detail
                    </motion.button>
                  </div>
                </div>

                <div className="p-6 relative">
                  {/* Project title and description */}
                  <h3
                    className="text-xl font-semibold mb-3 text-white group-hover:transition-colors duration-300"
                    style={{ color: "#00A8CD" }}
                  >
                    {project.describe}
                  </h3>
                  <p className="text-slate-200 text-sm line-clamp-2">
                    {project.penjelasan}
                  </p>

                  {/* Bottom divider with animation */}
                  <div
                    className="absolute bottom-0 left-0 w-full h-0.5 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
                    style={{ backgroundColor: "#00A8CD" }}
                  ></div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <motion.button
              onClick={() => setShowAll(!showAll)}
              className="px-8 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 flex items-center gap-3 mx-auto shadow-lg relative group overflow-hidden"
              style={{
                backgroundColor: "#00A8CD",
                boxShadow: "0 10px 25px #00A8CD30",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#0088AA";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#00A8CD";
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <span className="relative z-10 font-medium text-white">
                {showAll ? "Tampilkan Lebih Sedikit" : "Tampilkan Semua Proyek"}
              </span>
              <span className="relative z-10 p-1 bg-white/20 rounded-full">
                <Image
                  src={ShowAll}
                  alt="toggle"
                  className={`w-4 h-4 transition-transform duration-300 ${
                    showAll ? "rotate-180" : ""
                  }`}
                  loading="lazy"
                />
              </span>
            </motion.button>
          </div>
        </section>

        {/* Skills Section */}
        <section id="my-skill" className="py-28">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-1 rounded-full border text-sm font-medium mb-4"
              style={{
                backgroundColor: "#00A8CD20",
                borderColor: "#00A8CD",
                color: "#00A8CD",
              }}
            >
              Teknologi
            </motion.div>

            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Keahlian{" "}
              <span className="relative">
                <span
                  style={{
                    background: "#00A8CD",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Saya
                </span>
                <motion.span
                  className="absolute -bottom-2 left-0 w-full h-1 rounded-full"
                  style={{ backgroundColor: "#00A8CD" }}
                  initial={{ scaleX: 0, opacity: 0 }}
                  whileInView={{ scaleX: 1, opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  viewport={{ once: true }}
                />
              </span>
            </h2>
            <p className="text-slate-200 text-lg max-w-2xl mx-auto">
              Teknologi dan alat yang saya gunakan untuk menciptakan pengalaman
              web yang luar biasa.
            </p>
          </motion.div>

          <div
            className="relative overflow-hidden backdrop-blur-md border rounded-2xl shadow-lg"
            style={{ borderColor: "#00A8CD30" }}
          >
            <div
              className="absolute inset-0 -z-10"
              style={{ backgroundColor: "#14181A80" }}
            ></div>
            <div
              className="absolute -top-10 -left-10 w-40 h-40 rounded-full blur-3xl"
              style={{ backgroundColor: "#00A8CD", opacity: 0.04 }}
            ></div>
            <div
              className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full blur-3xl"
              style={{ backgroundColor: "#00A8CD", opacity: 0.04 }}
            ></div>

            <div className="relative overflow-hidden py-12 px-8">
              {/* Hapus animasi infinite scroll, ganti dengan grid statis */}
              <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
                {Skill.map((skill, index) => (
                  <motion.div
                    key={index}
                    className="flex-shrink-0 p-6 rounded-2xl border shadow-lg group"
                    style={{
                      backgroundColor: "#14181A90",
                      borderColor: "#00A8CD30",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = "#00A8CD";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = "#00A8CD30";
                    }}
                    whileHover={{ scale: 1.1, y: -5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <div className="relative flex items-center justify-center">
                      {/* Hapus animasi berulang */}
                      <div
                        className="absolute inset-0 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        style={{ backgroundColor: "#00A8CD15" }}
                      />
                      <Image
                        src={skill.nameskill}
                        alt="skill"
                        className="w-14 h-14 md:w-16 md:h-16 object-contain relative z-10"
                        loading="lazy"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-28">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-1 rounded-full border text-sm font-medium mb-4"
              style={{
                backgroundColor: "#00A8CD20",
                borderColor: "#00A8CD",
                color: "#00A8CD",
              }}
            >
              Paket Website
            </motion.div>

            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Layanan{" "}
              <span className="relative">
                <span
                  style={{
                    background: "#00A8CD",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Profesional
                </span>
                <motion.span
                  className="absolute -bottom-2 left-0 w-full h-1 rounded-full"
                  style={{ backgroundColor: "#00A8CD" }}
                  initial={{ scaleX: 0, opacity: 0 }}
                  whileInView={{ scaleX: 1, opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  viewport={{ once: true }}
                />
              </span>
            </h2>
            <p className="text-slate-200 text-lg max-w-2xl mx-auto">
              Paket website lengkap dengan hosting untuk berbagai kebutuhan
              bisnis Anda.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                id: 1,
                title: "Website Portofolio",
                description:
                  "Website portofolio profesional untuk menampilkan karya dan kemampuan Anda.",
                price: "Rp 500.000",
                features: [
                  "Desain Responsif",
                  "5 Halaman Utama",
                  "Formulir Kontak",
                  "Optimasi SEO",
                  "Hosting Gratis 1 Tahun",
                  "Domain .com Gratis",
                ],
                popular: false,
              },
              {
                id: 2,
                title: "Website Bisnis",
                description:
                  "Website bisnis lengkap untuk meningkatkan kredibilitas dan penjualan online.",
                price: "Rp 1.200.000",
                features: [
                  "Desain Kustom",
                  "10+ Halaman",
                  "Panel Admin",
                  "Integrasi WhatsApp",
                  "Hosting Gratis 1 Tahun",
                  "Domain .com Gratis",
                  "Google Analytics",
                ],
                popular: true,
              },
              {
                id: 3,
                title: "Website E-Commerce",
                description:
                  "Toko online lengkap dengan sistem pembayaran dan manajemen produk.",
                price: "Rp 2.500.000",
                features: [
                  "Keranjang Belanja",
                  "Gateway Pembayaran",
                  "Manajemen Produk",
                  "Pelacakan Pesanan",
                  "Multi Admin",
                  "Hosting Gratis 1 Tahun",
                  "Domain .com Gratis",
                  "Sertifikat SSL",
                ],
                popular: false,
              },
              {
                id: 4,
                title: "Sistem Rental/Booking",
                description:
                  "Website untuk sistem rental mobil, villa, atau booking layanan lainnya.",
                price: "Rp 3.000.000",
                features: [
                  "Kalender Booking",
                  "Integrasi Pembayaran",
                  "Manajemen Pelanggan",
                  "Pelacakan Inventori",
                  "Sistem Notifikasi",
                  "Hosting Gratis 1 Tahun",
                  "Domain .com Gratis",
                  "Dukungan 24/7",
                ],
                popular: false,
              },
              {
                id: 5,
                title: "Profil Perusahaan",
                description:
                  "Website profil perusahaan yang elegan untuk meningkatkan brand awareness.",
                price: "Rp 800.000",
                features: [
                  "Desain Profesional",
                  "Tentang Perusahaan",
                  "Halaman Layanan",
                  "Bagian Tim",
                  "Integrasi Kontak",
                  "Hosting Gratis 1 Tahun",
                  "Domain .com Gratis",
                ],
                popular: false,
              },
              {
                id: 6,
                title: "Website Kustom",
                description:
                  "Website kustom sesuai kebutuhan spesifik bisnis Anda.",
                price: "Mulai Rp 1.500.000",
                features: [
                  "Dapat Dikustomisasi Penuh",
                  "Halaman Tak Terbatas",
                  "Fitur Lanjutan",
                  "Integrasi Database",
                  "Integrasi API",
                  "Hosting Gratis 1 Tahun",
                  "Domain .com Gratis",
                  "Dukungan Prioritas",
                ],
                popular: false,
              },
            ].map((service, index) => (
              <motion.div
                key={service.id}
                className={`relative backdrop-blur-sm border rounded-xl p-6 transition-all duration-500 shadow-lg group ${
                  service.popular ? "ring-2 ring-cyan-400/50" : ""
                }`}
                style={{
                  backgroundColor: "#14181A60",
                  borderColor: service.popular ? "#00A8CD" : "#00A8CD30",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "#00A8CD";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = service.popular
                    ? "#00A8CD"
                    : "#00A8CD30";
                }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span
                      className="px-3 py-1 text-white text-xs font-medium rounded-full shadow-lg"
                      style={{ backgroundColor: "#00A8CD" }}
                    >
                      Paling Populer
                    </span>
                  </div>
                )}

                <div className="text-center mb-6">
                  <h3
                    className="text-xl font-bold mb-2"
                    style={{ color: "#00A8CD" }}
                  >
                    {service.title}
                  </h3>
                  <p className="text-slate-200 text-sm mb-4">
                    {service.description}
                  </p>
                  <div className="text-3xl font-bold text-white mb-1">
                    {service.price}
                  </div>
                  <p className="text-slate-400 text-sm">Pembayaran sekali</p>
                </div>

                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center text-slate-200 text-sm"
                    >
                      <svg
                        className="w-4 h-4 mr-3 flex-shrink-0"
                        style={{ color: "#00A8CD" }}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => {
                    const message = `Halo, saya tertarik dengan paket *${service.title}* seharga ${service.price}. Bisa tolong dijelaskan lebih detail?`;
                    const phoneNumber = "6281227186535";
                    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
                      message
                    )}`;
                    window.open(whatsappUrl, "_blank");
                  }}
                  className="w-full py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg text-white"
                  style={{
                    backgroundColor: "#00A8CD",
                    boxShadow: "0 10px 25px #00A8CD20",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "#0088AA";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "#00A8CD";
                  }}
                >
                  Pesan Sekarang
                </button>
              </motion.div>
            ))}
          </div>

          {/* Additional Services */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <div
              className="backdrop-blur-sm border rounded-2xl p-8 shadow-lg"
              style={{
                backgroundColor: "#14181A40",
                borderColor: "#00A8CD30",
              }}
            >
              <h3 className="text-2xl font-bold text-white mb-4">
                Layanan Tambahan
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
                {[
                  {
                    icon: "🚀",
                    title: "Domain & Hosting",
                    description: "Setup domain dan hosting profesional",
                  },
                  {
                    icon: "🛠️",
                    title: "Perawatan",
                    description: "Update dan perawatan website bulanan",
                  },
                  {
                    icon: "📈",
                    title: "Optimasi SEO",
                    description: "Optimasi website untuk mesin pencari",
                  },
                  {
                    icon: "📱",
                    title: "Aplikasi Mobile",
                    description: "Konversi website menjadi aplikasi mobile",
                  },
                ].map((addon, index) => (
                  <motion.div
                    key={index}
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="text-3xl mb-2">{addon.icon}</div>
                    <h4
                      className="font-semibold mb-2"
                      style={{ color: "#00A8CD" }}
                    >
                      {addon.title}
                    </h4>
                    <p className="text-slate-300 text-sm">
                      {addon.description}
                    </p>
                  </motion.div>
                ))}
              </div>
              <button
                onClick={() => {
                  const message =
                    "Halo, saya ingin konsultasi tentang layanan tambahan untuk website. Bisa tolong dijelaskan lebih detail?";
                  const phoneNumber = "6281227186535";
                  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
                    message
                  )}`;
                  window.open(whatsappUrl, "_blank");
                }}
                className="px-8 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg text-white"
                style={{
                  backgroundColor: "#00A8CD",
                  boxShadow: "0 10px 25px #00A8CD20",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#0088AA";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "#00A8CD";
                }}
              >
                Konsultasi Gratis
              </button>
            </div>
          </motion.div>
        </section>

        {/* Contact Form Section */}
        <section className="py-20">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Mari{" "}
              <span
                style={{
                  background: "#00A8CD",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Terhubung
              </span>
            </h2>
            <p className="text-slate-200 text-lg max-w-2xl mx-auto">
              Punya ide proyek untuk dikerjakan bersama-sama? Mari kita
              diskusikan dan wujudkan visi Anda.
            </p>
          </motion.div>

          <FormContact />
        </section>

        {/* Footer CTA Section */}
        <section id="contact" className="py-28">
          <div className="relative">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              {/* Jika ingin lebih ringan, hapus/matikan motion.div dekorasi besar di sini */}
              {/* <motion.div
                className="absolute inset-0 rounded-full blur-3xl"
                style={{
                  background: "#00A8CD",
                  opacity: 0.06,
                }}
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.05, 0.1, 0.05],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              /> */}
            </div>

            <div className="text-center relative z-10">
              <motion.div
                className="inline-block px-6 py-2 rounded-full border text-base font-medium mb-6"
                style={{
                  backgroundColor: "#00A8CD20",
                  borderColor: "#00A8CD",
                  color: "#00A8CD",
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true, amount: 0.5 }}
              >
                Siap Berkolaborasi?
              </motion.div>

              <div className="overflow-hidden mb-8">
                <motion.h2
                  className="text-6xl md:text-8xl font-bold"
                  initial={{ opacity: 0, y: 100 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.8,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  viewport={{ once: true }}
                >
                  Mari{" "}
                  <span
                    style={{
                      background: "#00A8CD",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    Bekerja
                  </span>
                  <br />
                  <span
                    style={{
                      background: "#00A8CD",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    Bersama
                  </span>
                </motion.h2>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="mailto:amrsabill@gmail.com"
                  className="inline-flex items-center gap-4 backdrop-blur-md border px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg group"
                  style={{
                    backgroundColor: "#14181A90",
                    borderColor: "#00A8CD30",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "#00A8CD";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "#00A8CD30";
                  }}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <div
                    className="p-2 rounded-lg"
                    style={{ backgroundColor: "#00A8CD" }}
                  >
                    <Image
                      src={Email}
                      alt="email"
                      className="w-5 h-5"
                      priority
                    />
                  </div>
                  <span
                    className="text-lg group-hover:transition-colors duration-300"
                    style={{ color: "#00A8CD" }}
                  >
                    amrsabill@gmail.com
                  </span>
                </motion.a>

                <motion.a
                  href="https://wa.me/6281227186535"
                  target="_blank"
                  className="inline-flex items-center gap-4 backdrop-blur-md border px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg group"
                  style={{
                    backgroundColor: "#14181A90",
                    borderColor: "#00A8CD30",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "#00A8CD";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "#00A8CD30";
                  }}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <div className="p-2 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z" />
                    </svg>
                  </div>
                  <span className="text-lg group-hover:text-green-300 transition-colors duration-300">
                    WhatsApp
                  </span>
                </motion.a>
              </div>
            </div>
          </div>
        </section>

        {/* Project Modal */}
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </div>
    </div>
  );
};

export default HomePage;
