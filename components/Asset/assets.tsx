// Import placeholder images - replace these with your actual image paths
import project1 from "@/public/Images/Profile1.svg"; // Using existing images as placeholders
import project2 from "@/public/Images/Profile2.svg";
import project3 from "@/public/Images/Certification.svg";

import skill1 from "@/public/Images/Download.svg"; // Using existing images as placeholders
import skill2 from "@/public/Images/ShowAll.svg";
import skill3 from "@/public/Images/Email.svg";

// Navigation items
export const NavItem = [
  { id: 1, name: "Tentang Saya", href: "#about-me" },
  { id: 2, name: "Sertifikat", href: "#certification" },
  { id: 3, name: "Proyek", href: "#project" },
  { id: 4, name: "Keahlian", href: "#my-skill" },
  { id: 5, name: "Layanan", href: "#services" },
];

// Project data
export const Project = [
  {
    id: 1,
    nameproject: project1,
    jenis: "Aplikasi Web",
    describe: "Platform E-Commerce",
    penjelasan: "Solusi e-commerce full-stack dengan React dan Node.js",
    url: "https://example.com/project1",
  },
  {
    id: 2,
    nameproject: project2,
    jenis: "Website",
    describe: "Website Portofolio",
    penjelasan: "Website portofolio modern dengan animasi dan desain responsif",
    url: "https://example.com/project2",
  },
  {
    id: 3,
    nameproject: project3,
    jenis: "Aplikasi Mobile",
    describe: "Aplikasi Manajemen Tugas",
    penjelasan: "Aplikasi React Native untuk manajemen tugas dan proyek",
    url: "https://example.com/project3",
  },
  {
    id: 4,
    nameproject: project1,
    jenis: "Aplikasi Web",
    describe: "Sistem Booking",
    penjelasan: "Sistem booking online untuk restoran dan acara",
    url: "https://example.com/project4",
  },
  {
    id: 5,
    nameproject: project2,
    jenis: "Website",
    describe: "Profil Perusahaan",
    penjelasan: "Profil perusahaan profesional dengan desain modern",
    url: "https://example.com/project5",
  },
  {
    id: 6,
    nameproject: project3,
    jenis: "Aplikasi Web",
    describe: "Dashboard Analitik",
    penjelasan: "Dashboard analitik real-time dengan grafik dan laporan",
    url: "https://example.com/project6",
  },
];

// Skills data
export const Skill = [
  {
    id: 1,
    nameskill: skill1,
    skillname: "React",
  },
  {
    id: 2,
    nameskill: skill2,
    skillname: "JavaScript",
  },
  {
    id: 3,
    nameskill: skill3,
    skillname: "Node.js",
  },
  {
    id: 4,
    nameskill: skill1,
    skillname: "Next.js",
  },
  {
    id: 5,
    nameskill: skill2,
    skillname: "TypeScript",
  },
  {
    id: 6,
    nameskill: skill3,
    skillname: "MongoDB",
  },
  {
    id: 7,
    nameskill: skill1,
    skillname: "Tailwind CSS",
  },
  {
    id: 8,
    nameskill: skill2,
    skillname: "Git",
  },
];
