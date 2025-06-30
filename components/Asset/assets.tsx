// Import placeholder images - replace these with your actual image paths
import project1 from "@/public/Images/Profile1.svg"; // Using existing images as placeholders
import project2 from "@/public/Images/Profile2.svg";
import project3 from "@/public/Images/Certification.svg";

import skill1 from "@/public/Images/Download.svg"; // Using existing images as placeholders
import skill2 from "@/public/Images/ShowAll.svg";
import skill3 from "@/public/Images/Email.svg";

// Navigation items
export const NavItem = [
  { id: 1, name: "Home", href: "#" },
  { id: 2, name: "About Me", href: "#about-me" },
  { id: 3, name: "Certificate", href: "#certification" },
  { id: 4, name: "Project", href: "#project" },
  { id: 5, name: "Skills", href: "#my-skill" },
  { id: 6, name: "Services", href: "#services" },
  { id: 7, name: "Contact", href: "#contact" },
];

// Project data
export const Project = [
  {
    id: 1,
    nameproject: project1,
    jenis: "Web App",
    describe: "E-Commerce Platform",
    penjelasan: "Full-stack e-commerce solution with React and Node.js",
    url: "https://example.com/project1",
  },
  {
    id: 2,
    nameproject: project2,
    jenis: "Website",
    describe: "Portfolio Website",
    penjelasan:
      "Modern portfolio website with animations and responsive design",
    url: "https://example.com/project2",
  },
  {
    id: 3,
    nameproject: project3,
    jenis: "Mobile App",
    describe: "Task Management App",
    penjelasan: "React Native app for task and project management",
    url: "https://example.com/project3",
  },
  {
    id: 4,
    nameproject: project1,
    jenis: "Web App",
    describe: "Booking System",
    penjelasan: "Online booking system for restaurants and events",
    url: "https://example.com/project4",
  },
  {
    id: 5,
    nameproject: project2,
    jenis: "Website",
    describe: "Company Profile",
    penjelasan: "Professional company profile with modern design",
    url: "https://example.com/project5",
  },
  {
    id: 6,
    nameproject: project3,
    jenis: "Web App",
    describe: "Dashboard Analytics",
    penjelasan: "Real-time analytics dashboard with charts and reports",
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
