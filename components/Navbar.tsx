import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { NavItem } from "./Asset/assets";
import ArrowOpen from "../public/Images/ArrowOpen.svg";
import ArrowClose from "../public/Images/ArrowClose.svg";
import Link from "next/link";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");

  const router = useRouter();

  // Toggle Menu untuk mobile
  const toggleMenu = () => setIsOpen(!isOpen);

  // Mengubah activeSection berdasarkan hash dari URL
  useEffect(() => {
    const currentHash = window.location.hash;
    if (currentHash) {
      setActiveSection(currentHash);
    }
  }, [router.pathname]);

  // Intersection Observer untuk mendeteksi elemen yang terlihat
  useEffect(() => {
    const sections = NavItem.map((item) => document.querySelector(item.href));
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(`#${entry.target.id}`);
        }
      });
    }, { threshold: 0.5 });

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []); 

  // Fungsi untuk memeriksa apakah link aktif
  const isActive = (href: string) => activeSection === href;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      key={router.pathname}
    >
      <div className="bg-black px-10 md:px-14 lg:px-20 py-5 shadow-md fixed top-0 left-0 w-full z-50">
        <div className="flex items-center justify-between">
          <Link href="/" className="font-semibold text-[24px] text-white">
            A.S.
          </Link>

          <button className="md:hidden" onClick={toggleMenu}>
            <Image
              src={isOpen ? ArrowClose : ArrowOpen}
              alt="Menu Toggle"
              className="w-6"
            />
          </button>

          <ul className="hidden md:flex flex-row gap-9">
            {NavItem.map((item) => (
              <li key={item.id}>
                <Link
                  href={item.href}
                  className={`${
                    isActive(item.href) ? "text-primary" : "text-white"
                  } hover:text-primary transition duration-300`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {isOpen && (
          <div className="absolute top-0 right-0 bg-black w-[200px] py-4 px-6 shadow-lg md:hidden">
            <ul className="flex flex-col gap-4">
              {NavItem.map((item) => (
                <li key={item.id}>
                  <Link
                    href={item.href}
                    className={`${
                      isActive(item.href) ? "text-primary" : "text-white"
                    } hover:text-primary transition duration-300`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default Navbar;
