import Project1 from "@/public/Images/Project1.svg";
import Project2 from "@/public/Images/Project2.svg";
import Project3 from "@/public/Images/Project3.svg";
import Project4 from "@/public/Images/Project4.svg";
import Project5 from "@/public/Images/Project5.svg";
import Project6 from "@/public/Images/Project6.svg";
import Project7 from "@/public/Images/Project7.svg";
import Project8 from "@/public/Images/Project8.svg";
import Project9 from "@/public/Images/Project9.png";
import Project10 from "@/public/Images/Project10.png";
import Project11 from "@/public/Images/Project11.png";

import dok1 from "@/public/Images/dok1.jpg";
import dok2 from "@/public/Images/dok2.png";
import dok3 from "@/public/Images/dok3.png";
import dok4 from "@/public/Images/dok4.png";
import dok5 from "@/public/Images/dok5.png";
import dok6 from "@/public/Images/dok6.png";

import Html from "@/public/Images/Html.svg";
import Js from "@/public/Images/Js.svg";
import Css from "@/public/Images/Css.svg";
import Figma from "@/public/Images/Figma.svg";
import Nodejs from "@/public/Images/Nodejs.svg";
import Tailwind from "@/public/Images/Tailwind.svg";

export const Skill = [
  {
    id: 1,
    nameskill: Html,
  },
  {
    id: 2,
    nameskill: Js,
  },
  {
    id: 3,
    nameskill: Css,
  },
  {
    id: 4,
    nameskill: Figma,
  },
  {
    id: 5,
    nameskill: Nodejs,
  },
  {
    id: 6,
    nameskill: Tailwind,
  },
];

export const Project = [
  {
    id: 1,
    nameproject: Project1,
    jenis: "web",
    describe: "Website Himpunan Mahasiswa Sistem Informasi",
    penjelasan:
      "Website resmi Himpunan Mahasiswa Sistem Informasi UPN Veteran Yogyakarta yang dibangun menggunakan framework Laravel & Inertia.js. Website ini berfungsi sebagai platform informasi, komunikasi, dan manajemen kegiatan organisasi mahasiswa.",
    url: "https://himasisfoupnvy.com/",
    github: "",
    figma: "",
    documentationImages: [Project1, dok5, dok6, dok1],
    technologies: ["Laravel", "Inertia.js", "Tailwind CSS", "MySQL"],
    features: [
      "Sistem Manajemen Anggota",
      "Portal Berita & Pengumuman",
      "Galeri Kegiatan",
      "Sistem Event Management",
      "Dashboard Admin",
    ],
  },
  {
    id: 2,
    nameproject: Project11,
    jenis: "web",
    describe: "Website Monitoring Sistem",
    penjelasan:
      "Aplikasi web monitoring sistem yang digunakan untuk memantau device secara real-time dengan dashboard interaktif.",
    url: "",
    github: "https://github.com/amrisabilly/project_monitoringWeb_RBPL.git",
    figma:
      "https://www.figma.com/design/ssdVkVUYGAkLxOScz5GOhp/Untitled?node-id=0-1&t=Qf2Y3vxUcHB6ZyW7-1",
    documentationImages: [Project11, dok4, dok3],
    technologies: ["Laravel", "Blade", "JavaScript", "MySQL"],
    features: [
      "Real-time Monitoring",
      "Dashboard Interaktif",
      "Alert System",
      "Data Visualization",
      "Performance Analytics",
    ],
  },
  {
    id: 3,
    nameproject: Project9,
    jenis: "web",
    describe: "Website Reseller Akun Premium YouTube",
    penjelasan:
      "Platform e-commerce khusus untuk penjualan akun premium YouTube dengan sistem pembayaran otomatis dan manajemen inventory yang terintegrasi.",
    url: "",
    github: "https://github.com/amrisabilly/E-commerce-Youtube.git",
    figma: "",
    documentationImages: [Project9, Project9, Project9],
    technologies: ["Laravel", "Vite", "Tailwind", "Mysql", "JavaScript"],
    features: [
      "E-commerce System",
      "Payment Gateway",
      "Inventory Management",
      "User Dashboard",
      "Order Tracking",
    ],
  },
  {
    id: 4,
    nameproject: Project10,
    jenis: "web",
    describe: "Website Catering Online",
    penjelasan:
      "Platform pemesanan catering online dengan fitur katalog menu, sistem pemesanan, dan manajemen delivery yang user-friendly.",
    url: "https://monitoringweb.decoratics.id/",
    github: "https://github.com/amrisabilly/catering_project.git",
    figma:
      "https://www.figma.com/design/oJ60mgwExNbj7Py4MBVz7R/CATERING?node-id=0-1&p=f&t=rdYxnWqFh3rc46Iw-0",
    documentationImages: [Project10, dok2],
    technologies: ["Laravel", "Vite", "Tailwind", "Mysql", "JavaScript"],
    features: [
      "Menu Catalog",
      "Online Ordering",
      "Delivery Management",
      "Customer Reviews",
      "Admin Panel",
    ],
  },
  {
    id: 5,
    nameproject: Project2,
    jenis: "web",
    describe: "Website Portofolio Personal",
    penjelasan:
      "Website portofolio pribadi yang dibangun dengan Next.js, menampilkan berbagai proyek, skills, dan pengalaman profesional dengan desain modern dan responsif.",
    url: "https://www.amrisabilly.me/",
    github: "https://github.com/amrisabilly/Portofolio.git",
    figma: "",
    documentationImages: [Project2, Project2, Project2],
    technologies: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "Framer Motion",
      "Vercel",
    ],
    features: [
      "Responsive Design",
      "Interactive Animations",
      "Project Showcase",
      "Contact Form",
      "SEO Optimized",
    ],
  },
  {
    id: 6,
    nameproject: Project3,
    jenis: "web",
    describe: "Website Informasi Kebakaran Hutan",
    penjelasan:
      "Sistem informasi manajemen bencana kebakaran hutan yang menyediakan data real-time, peta interaktif, dan sistem peringatan dini untuk membantu pencegahan dan penanganan kebakaran hutan.",
    url: "",
    github: "https://github.com/amrisabilly/Website-Kebakaran-Hutan.git",
    figma: "",
    documentationImages: [Project3, Project3, Project3],
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    features: [
      "Peta Interaktif Kebakaran",
      "Sistem Peringatan Dini",
      "Data Real-time",
      "Laporan Insiden",
      "Dashboard Monitoring",
    ],
  },
  {
    id: 7,
    nameproject: Project4,
    jenis: "web",
    describe: "Website Portofolio",
    penjelasan:
      "Versi kedua dari website portofolio yang dibangun dengan Next.js, menampilkan desain yang lebih modern dengan animasi yang halus dan optimasi performa yang lebih baik.",
    url: "https://project-portofolio-lovat.vercel.app/",
    github: "https://github.com/amrisabilly/portfolio-v2",
    figma:
      "https://www.figma.com/design/57eE8cQPoOqZyyIGJ27yUE/Portofolio-Project?node-id=0-1&t=96OpOzHiEpKJdyw4-1",
    documentationImages: [Project4, Project4, Project4],
    technologies: ["Next.js", "React", "Tailwind CSS", "TypeScript", "Vercel"],
    features: [
      "Modern Design",
      "Smooth Animations",
      "Performance Optimized",
      "Mobile Responsive",
      "Dark Mode Support",
    ],
  },
  {
    id: 8,
    nameproject: Project5,
    jenis: "web",
    describe: "Website Aku Sewa - Platform Penyewaan",
    penjelasan:
      "Platform penyewaan online yang memungkinkan pengguna untuk menyewa berbagai barang dengan sistem booking, pembayaran, dan manajemen inventory yang terintegrasi dengan panel admin.",
    url: "",
    github: "https://github.com/amrisabilly/Website-Aku_sewa.git",
    figma: "",
    documentationImages: [Project5, Project5, Project5],
    technologies: ["PHP", "Laravel", "MySQL", "Bootstrap", "jQuery"],
    features: [
      "Sistem Booking",
      "Manajemen Inventory",
      "Panel Admin",
      "Payment Gateway",
      "User Management",
    ],
  },
  {
    id: 9,
    nameproject: Project6,
    jenis: "web",
    describe: "Sistem Informasi Manajemen Bencana Angin Topan",
    penjelasan:
      "Website sistem informasi untuk manajemen bencana angin topan dengan fitur prediksi cuaca, peta rawan bencana, sistem peringatan, dan panel admin untuk pengelolaan data.",
    url: "",
    github: "https://github.com/amrisabilly/project_topan.git",
    figma: "",
    documentationImages: [Project6, Project6, Project6],
    technologies: ["Next.js", "React", "Chart.js", "MySQL", "Node.js"],
    features: [
      "Prediksi Cuaca",
      "Peta Rawan Bencana",
      "Sistem Peringatan",
      "Data Visualization",
      "Admin Dashboard",
    ],
  },
  {
    id: 10,
    nameproject: Project7,
    jenis: "web",
    describe: "Website Pandawara Group",
    penjelasan:
      "Website komunitas Pandawara Group untuk kegiatan bersih-bersih lingkungan, menampilkan informasi acara, galeri kegiatan, dan sistem volunteer dengan panel admin untuk pengelolaan konten.",
    url: "",
    github: "https://github.com/amrisabilly/project-pandawara.git",
    figma: "",
    documentationImages: [Project7, Project7, Project7],
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    features: [
      "Event Management",
      "Volunteer System",
      "Galeri Kegiatan",
      "Content Management",
      "Community Portal",
    ],
  },
  {
    id: 11,
    nameproject: Project8,
    jenis: "web",
    describe: "Sistem Input Data Mahasiswa",
    penjelasan:
      "Aplikasi web untuk input dan manajemen data mahasiswa dengan fitur CRUD lengkap, validasi data, export/import, dan dashboard analytics untuk institusi pendidikan.",
    url: "",
    github: "https://github.com/amrisabilly/student-data-system",
    figma: "",
    documentationImages: [Project8, Project8, Project8],
    technologies: ["PHP", "MySQL", "Bootstrap", "JavaScript", "jQuery"],
    features: [
      "CRUD Operations",
      "Data Validation",
      "Export/Import Excel",
      "Search & Filter",
      "Dashboard Analytics",
    ],
  },
];

export const NavItem = [
  { id: 1, name: "Tentang", href: "#about-me" },
  { id: 2, name: "Pengalaman", href: "#work-experience" },
  { id: 3, name: "Sertifikat", href: "#certification" },
  { id: 4, name: "Proyek", href: "#project" },
  { id: 5, name: "Keahlian", href: "#my-skill" },
  { id: 6, name: "Layanan", href: "#services" },
];
